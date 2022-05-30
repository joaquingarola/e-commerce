import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.css';

const Loader = () => {
  return(
    <div className='spinner-container'>
      <Spinner animation="border" role="status"  style={{ width: "5rem", height: "5rem" }}/>
    </div>
  );
}

export default Loader;
