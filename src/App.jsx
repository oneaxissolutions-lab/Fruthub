import React from "react";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "80px", marginBottom: "20px" }}></div>

      <h1 style={{ margin: "0 0 10px 0", fontWeight: "500" }}>
        Website Not Available
      </h1>

      <p style={{ margin: 0, opacity: 0.7, fontSize: "14px" }}>
        This site is currently disabled.
      </p>
    </div>
  );
};

export default App;