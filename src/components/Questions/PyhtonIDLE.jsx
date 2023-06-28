import React, { useState } from 'react';
import { Sk } from 'skulpt';
import { SkulptInteractiveShell } from 'skulpt-interactive-shell';

const PythonCompiler = () => {
  const [code, setCode] = useState('');

  Sk.configure({
    output: (text) => {
      console.log(text);
    },
    read: (filename) => {
      throw new Error(`File reading not supported: ${filename}`);
    },
  });

  const executePythonCode = () => {
    Sk.misceval.asyncToPromise(() => {
      return SkulptInteractiveShell.execute(code);
    });
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={executePythonCode}>Execute</button>
    </div>
  );
};

export default PythonCompiler;