import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="loadingSection">
      <div>
        <Spinner animation="border" variant="success" className="spinner" />
      </div>
    </div>
  );
};

export default Loading;
