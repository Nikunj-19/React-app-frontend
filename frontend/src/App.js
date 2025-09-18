import React, { useEffect, useState } from "react";
import { getMessage } from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getMessage().then((msg) => setMessage(msg));
  }, []);

  return (
    <div
      style={{
        textAlign: "center",  
        fontSize: "24px",
        backgroundColor: "black",
        color: "white",
        height: "100vh",   // full screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {message}
    </div>
  );
}

export default App;
