import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Row, Container, Col, Tabs, Tab } from 'react-bootstrap';
import { fetchProduct, removeProduct } from '../../store/slices/products';
import { addedToCart } from '../../store/slices/cart';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import styles from './ProductDetails.module.scss';
import FloatingForm from '../../components/FloatingForm/FloatingForm';
const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const { singleProduct, error, loading } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(removeProduct(singleProduct));
    dispatch(fetchProduct(id));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addedToCart({ product: singleProduct, quantity }));
  };
  return (
    <Container className="max-width">
      <Breadcrumb url={location} productName={singleProduct.title} />
      <Row className="mt-5">
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
        <Col sm={12} md={4}>
          <img src={singleProduct.image} alt={singleProduct.title} />
        </Col>
        <Col sm={12} md={8}>
          <div className="productInfo d-flex flex-column align-items-start">
            <h1 className={styles.productTitle}>{singleProduct.title}</h1>
            <p className={styles.productPrice}>
              Price: <span>{singleProduct.price} $</span>
            </p>
            {/* Cart quantity form starts */}
            <form onSubmit={handleSubmit} className={styles.quantityForm}>
              <div className={styles.quantityGroup}>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                >
                  -
                </button>
                <input type="text" min="1" max="10" readOnly value={quantity} />
                <button
                  type="button"
                  onClick={() =>
                    setQuantity(quantity < 10 ? quantity + 1 : quantity)
                  }
                >
                  +
                </button>
              </div>
              <button type="submit" className={`${styles.submitBtn} btn-grad2`}>
                Add to cart
              </button>
            </form>
            {/* Cart quantity form ends */}
            {/* Tabs starts */}
            <Tabs defaultActiveKey="description" className={styles.tab}>
              <Tab eventKey="description" title="Description">
                <p className={styles.descriptionText}>
                  {singleProduct.description}
                </p>
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <form action="">
                  <FloatingForm type="text" label="Title" name="title" />
                  <FloatingForm
                    type="textarea"
                    label="Review"
                    className="mt-4"
                  />
                  <button type="submit" className="btn-grad mt-3">
                    Write Review
                  </button>
                </form>
                <div className="userReviews mt-3">
                  <p>There are no reviews yet. Write a review</p>
                </div>
              </Tab>
            </Tabs>
            {/* Tabs ends */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
