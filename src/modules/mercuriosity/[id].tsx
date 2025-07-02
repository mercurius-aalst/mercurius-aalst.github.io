import React from "react";
import { useParams, Link } from "react-router-dom";

// Example mapping from id to PDF file path
const pdfMap: Record<string, string> = {
  "1": "/pdfs/curiosity1.pdf",
  "2": "/pdfs/curiosity2.pdf",
  // Add more mappings as needed
};

const MercuriosityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pdfUrl = id ? pdfMap[id] : undefined;

  return (
    <div className="mercuriosity-detail">
      <Link to="/mercuriosity">← Back to list</Link>
      <h1>Curiosity {id}</h1>
      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title={`Curiosity PDF ${id}`}
          width="100%"
          height="800px"
          style={{ border: "none" }}
        />
      ) : (
        <p>PDF not found.</p>
      )}
    </div>
  );
};

export default MercuriosityDetail;
