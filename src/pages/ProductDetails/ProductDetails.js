import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Row, Container, Col } from 'react-bootstrap';
import { fetchProduct, removeProduct } from '../../store/slices/products';
import { addedToCart } from '../../store/slices/cart';
const ProductDetails = () => {
  const { id } = useParams();
  const { singleProduct, error, loading } = useSelector(
    (store) => store.products
  );
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(removeProduct(singleProduct));
    dispatch(fetchProduct(id));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addedToCart({ product: singleProduct, quantity }));
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  return (
    <Container className="max-width">
      <Row>
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
            <p>{singleProduct.title}</p>
            <p>{singleProduct.price} $</p>
            <form onSubmit={handleSubmit}>
              <button
                type="button"
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : quantity)
                }
              >
                -
              </button>
              <input type="number" min="1" max="10" readOnly value={quantity} />
              <button
                type="button"
                onClick={() =>
                  setQuantity(quantity < 10 ? quantity + 1 : quantity)
                }
              >
                +
              </button>
              <button type="submit" className="btn-grad2">
                Add to cart
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
