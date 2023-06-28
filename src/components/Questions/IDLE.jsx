import React, { useState } from "react";

const IDLE = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleRunCode = () => {
    const output = document.getElementById("output-object");
    output.data = "data:text/html;charset=utf-8," + encodeURIComponent(code);
  };

  return (
    <div>
      <textarea value={code} onChange={handleCodeChange} placeholder="Enter your code here" rows={15} cols={104} />
      <div className="d-flex justify-content-end">
        <button className="modalBtn mt-2 px-5 py-2" onClick={handleRunCode}>
          Run
        </button>
      </div>

      <object className="mt-3" id="output-object" type="text/html" width="100%" height="400px"></object>
    </div>
  );
};

export default IDLE;
