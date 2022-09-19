import React, { useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomCard from '../../components/Card/CustomCard';
import { fetchProducts } from '../../store/slices/products';
import moment from 'moment';

const AllProducts = () => {
  const {
    list: products,
    error,
    loading,
    lastFetch
  } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
    if (diffInMinutes < 10) {
      return;
    } else {
      dispatch(fetchProducts());
    }
  }, []);
  return (
    <div>
      <Container className="max-width">
        <Row className="g-3">
          {loading && (
            <div className="text-center">
              <p>Fetching data from server, please wait</p>
              <img
                src="./images/loading/32x32.gif"
                alt="loading"
                className="w-auto"
              />
            </div>
          )}
          {error && <p>{error}</p>}
          {products &&
            products.map((product, index) => (
              <Col key={index} lg={3} md={4} sm={6}>
                <CustomCard productInfo={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
