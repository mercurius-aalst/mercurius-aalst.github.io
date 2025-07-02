import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { transition } from "../../assets/styling";

type Mercuriosity = {
  id: string;
  title: string;
  description: string;
  pdf: string;
  year: number;
  month: string;
};

const MercuriosityDetail: React.FC = () => {
  const { id, year, month } = useParams<{ id: string; year: string; month: string }>();
  const [curiosity, setCuriosity] = useState<Mercuriosity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/data/mercuriosities.json")
      .then(res => res.json())
      .then((data: Mercuriosity[]) => {
        const found = data.find(c => c.id === id && String(c.year) === year && c.month === month);
        setCuriosity(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id, year, month]);

  if (loading) return <div>Bezig met laden...</div>;

  const ReturnButton = styled(Link)`
    background-color: var(--green);
    color: var(--white);
    font-size: 1.25rem;
    padding: 0.5rem 1.4rem;
    min-width: 8rem;
    border-radius: 0.25rem;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    border: none;
    ${transition}
    box-shadow: 0 2px 12px rgba(26,127,90,0.13);
    margin-bottom: 0.5rem;
    &:hover {
      background-color: #16694a;
      color: var(--white);
    }
  `;

  return (
    <div className="mercuriosity-detail">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <ReturnButton to="/mercuriosity">
          <span style={{ fontSize: '1.3em', lineHeight: 1, marginRight: '0.2em' }}>←</span>
          Terug naar Mercuriosity overzicht
        </ReturnButton>
      </div>
      <h1 style={{
        fontSize: '2.4rem',
        fontWeight: 700,
        color: 'var(--green, #1a7f5a)',
        margin: '2rem 0 1.5rem 0',
        textAlign: 'center',
        letterSpacing: '0.01em',
        lineHeight: 1.1,
        textShadow: '0 2px 12px rgba(0,0,0,0.07)'
      }}>{curiosity ? curiosity.title : `Curiosity ${id}`}</h1>
      {curiosity && curiosity.pdf ? (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2.5rem 0' }}>
          <iframe
            src={curiosity.pdf}
            title={`Curiosity PDF ${id}`}
            width="800px"
            height="1131px"
            style={{ border: "1.5px solid #b5b5b5", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
            allowFullScreen
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const errorDiv = document.createElement('div');
              errorDiv.style.color = 'red';
              errorDiv.style.fontWeight = '600';
              errorDiv.style.fontSize = '1.2rem';
              errorDiv.style.textAlign = 'center';
              errorDiv.style.padding = '2rem';
              errorDiv.textContent = 'PDF-bestand niet gevonden of kan niet geladen worden.';
              e.currentTarget.parentNode?.appendChild(errorDiv);
            }}
          />
        </div>
      ) : (
        <p>PDF niet gevonden.</p>
      )}
    </div>
  );
};

export default MercuriosityDetail;
