import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ url, productName }) => {
  const urlArr = url.pathname.split('/').filter((link) => link !== '');
  return (
    <div className={styles.crubmContainer}>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        {urlArr.map((link, index, arr) => (
          <li key={index}>
            <Link
              to={`/${urlArr.slice(0, index + 1).join('/')}`}
              className={index === arr.length - 1 ? `${styles.disabled}` : null}
            >
              {index === arr.length - 1 && typeof parseInt(link) === 'number'
                ? productName
                : link}
              {/* {index === urlArr.length - 1
                ? typeof parseInt(link) === 'number'
                  ? productName
                  : link
                : link} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
