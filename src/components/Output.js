import React from 'react';
const Output = ({ output, hasError }) => {
  return (
    <div className="output">
      <textarea
        className="output-box"
        value={hasError ? '' : output}
        readOnly={true}
        placeholder="Compiled output will be shown here"
      />
    </div>
  );
};
export default Output;
