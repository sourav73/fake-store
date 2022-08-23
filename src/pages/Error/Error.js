import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
  const attributionStyle = {
    textDecoration: 'none',
    color: '#ccc',
    textAlign: 'center',
  };
  return (
    <Container
      className="max-width d-flex align-items-center justify-content-center position-relative flex-column"
      style={{ height: '90vh' }}
    >
      <img src="./images/error.jpg" alt="Error" />
      <a
        href="https://www.freepik.com/vectors/404-page"
        style={attributionStyle}
      >
        404 page vector created by pikisuperstar - www.freepik.com
      </a>
      <Link to="/" className="mt-3">
        Go Home
      </Link>
    </Container>
  );
};

export default Error;
