import React from "react";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "#e0e0e0",
        textAlign: "center",
      }}
    >
      {/* Sad file icon style */}
      <div
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          opacity: 0.8,
        }}
      >
        📄❌
      </div>

      <h2 style={{ fontWeight: "normal", marginBottom: "10px" }}>
        This webpage is not available
      </h2>

      <p style={{ fontSize: "13px", opacity: 0.6 }}>
        The site is currently disabled.
      </p>
    </div>
  );
};

export default App;