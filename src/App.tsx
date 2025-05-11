import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    </Router>
  );
};

export default App;
