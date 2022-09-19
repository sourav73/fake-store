import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomCard.module.scss';

const CustomCard = (props) => {
  const { id, title, price, category, image: imageSrc } = props.productInfo;
  return (
    <div className={styles.card}>
      <div className="d-flex flex-column justify-content-between align-items-center h-100">
        <div className={styles.productInfo}>
          <img className={styles.cardImg} src={imageSrc} alt={title} />
          <Link to={`/products/${id}`} className={styles.title}>
            {title}
          </Link>
          <small className={styles.category}>{category}</small>
        </div>
        <div className="pricing">
          <p className={styles.price}>{price} $</p>
          <Link to={`/products/${id}`} className="btn-grad mt-3">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
