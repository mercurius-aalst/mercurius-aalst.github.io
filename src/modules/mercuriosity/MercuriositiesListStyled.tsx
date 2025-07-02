import React, { useEffect, useRef } from "react";
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
  padding-top: 52.34%;
  flex: 1 1 0;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

const PDFPreview: React.FC<{ pdf: string }> = ({ pdf }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let pdfjsLib: any;
    import("pdfjs-dist/build/pdf").then((lib) => {
      pdfjsLib = lib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
      pdfjsLib.getDocument(pdf).promise.then((doc: any) => {
        doc.getPage(1).then((page: any) => {
          const viewport = page.getViewport({ scale: 1 });
          const canvas = canvasRef.current;
          if (canvas) {
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const ctx = canvas.getContext("2d");
            if (ctx) page.render({ canvasContext: ctx, viewport });
          }
        });
      });
    });
  }, [pdf]);
  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
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
