import React from 'react';
import Error from './Error';

const Input = ({ input, handleInputChange, errorMsg }) => {
  return (
    <div className="input">
      <textarea
        className="input-box"
        placeholder="Write code here"
        value={input}
        onChange={handleInputChange}
      />
      {errorMsg && (
        <div className="error">
          <Error errorMsg={errorMsg} />
        </div>
      )}
    </div>
  );
};

export default Input;
