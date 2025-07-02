import React from "react";
import styled from "styled-components";
import { boxShadow, transition } from "../../assets/styling";
import { Link } from "react-router-dom";

// Define Curiosity type to match the JSON structure
export type Mercuriosity = {
  id: string;
  title: string;
  description: string;
  pdf: string;
  year: number;
  month: string;
};

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  min-width: 180px;
  background: var(--white);
  border-radius: 1rem;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  ${boxShadow}
  ${transition}
  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 8px 32px 0px rgba(0,0,0,0.25);
  }
`;
const PreviewDiv = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 210/297; /* A4 aspect ratio portrait */
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* No padding, so preview touches card border */
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const MTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;
const MText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  flex: 1 1 0;
  color: #444;
`;



import { Document, Page, pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
import { useRef, useEffect, useState } from "react";
const PDFPreview: React.FC<{ pdf: string }> = ({ pdf }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState<number>(210);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setPageWidth(Math.max(120, Math.min(width, 400)));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
      <Document file={pdf} loading={null} error={<span style={{color: 'red'}}>PDF niet gevonden</span>} noData={<span style={{color: 'red'}}>Geen PDF</span>}>
        <Page
          pageNumber={1}
          width={pageWidth}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
};

const MercuriositiesList: React.FC<{ curiosities: Mercuriosity[] }> = ({ curiosities }) => (
  <div style={{
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    width: "100%"
  }}>
    {curiosities.map((item) => (
      <Card key={item.id} to={`/mercuriosity/${item.id}`}>
        <PreviewDiv>
          <PDFPreview pdf={item.pdf} />
        </PreviewDiv>
        <TextDiv>
          <MTitle>{item.title}</MTitle>
          <MText>{item.description}</MText>
          <MText style={{ fontSize: "0.95rem", color: "var(--green)", marginTop: "0.5rem" }}>{item.month} {item.year}</MText>
        </TextDiv>
      </Card>
    ))}
  </div>
);

export default MercuriositiesList;
