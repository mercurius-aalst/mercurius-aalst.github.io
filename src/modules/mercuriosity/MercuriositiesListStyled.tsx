import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Curiosity } from "./list";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #181818;
  border-radius: 1rem;
  box-shadow: 0 2px 16px #0008;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s;
  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 4px 24px #000a;
  }
`;
const PreviewDiv = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 1rem 0.5rem 1rem;
`;
const Desc = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 1rem 1rem 1rem;
  color: #ccc;
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

const MercuriositiesList: React.FC<{ curiosities: Curiosity[] }> = ({ curiosities }) => (
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
        <Title>{item.title}</Title>
        <Desc>{item.description}</Desc>
      </Card>
    ))}
  </div>
);

export default MercuriositiesList;
