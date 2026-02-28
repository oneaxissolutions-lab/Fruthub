import React from "react";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#202124",
        color: "#e8eaed",
        fontFamily: "Roboto, Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "left", maxWidth: "420px" }}>
        
        {/* Broken file icon (Chrome style) */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9aa0a6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: "20px" }}
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="13" y2="17"/>
        </svg>

        <h2
          style={{
            fontWeight: 400,
            fontSize: "22px",
            margin: "0 0 10px 0",
          }}
        >
          This webpage is not available
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#9aa0a6",
            margin: 0,
          }}
        >
          ERR_CONNECTION_CLOSED
        </p>
      </div>
    </div>
  );
};

export default App;