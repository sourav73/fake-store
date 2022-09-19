import {
  faBars,
  faSearch,
  faCartShopping,
  faX,
  faUser,
  faArrowRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const categories = [
    {
      category: 'All Categories',
      url: '/products'
    },
    {
      category: "men's clothing",
      url: "/products/category/men's clothing"
    },
    {
      category: "women's clothing",
      url: "/products/category/women's clothing"
    },
    {
      category: 'electronics',
      url: '/products/category/electronics'
    },
    {
      category: 'jewelery',
      url: '/products/category/jewelery'
    }
  ];
  const { cart } = useSelector((store) => store.cart);
  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Hiding scroll when navbar is open
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  return (
    <header className={styles.header}>
      {/* Navbar for large screen */}
      <nav className={`${styles.lgNav} max-width`}>
        <Link to={'/'} className={styles.navBrand}>
          Fake Store
        </Link>
        <ul className={styles.mainNav}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.url}>{category.category}</Link>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center">
          {/* Search form for large screen */}
          <form
            className={`${styles.searchFormLG} d-flex align-items-center`}
            onSubmit={handleSubmit}
          >
            <input type="search" name="search" placeholder="Search product" />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </button>
          </form>
          {/* User icon section starts*/}
          <div>
            {isLogged ? (
              <Link to="/profile" title="My Account" className="ms-3">
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </Link>
            ) : (
              <Link to="/user_auth" title="Login/Signup" className="ms-3">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  className={styles.icon}
                />
              </Link>
            )}
            <Link to="/cart" className="ms-3 position-relative">
              <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
              <span className={styles.cartValue}>{cart.length}</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles.burger} ms-3`}
            >
              <FontAwesomeIcon
                icon={isOpen ? faX : faBars}
                className={`${styles.icon}`}
              />
            </button>
          </div>
          {/* User icon section ends */}
        </div>
      </nav>
      {/* Navbar for smaller screens */}
      <div
        className={`${styles.mobileNavClose} ${isOpen ? `${styles.show}` : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <nav className={`${styles.mobileNav} ${isOpen ? `${styles.show}` : ''}`}>
        <form action="" className={styles.searchFormSM}>
          <input type="search" name="search" placeholder="Search product" />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </button>
        </form>
        <ul className={styles.mainNavSM}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={category.url} onClick={closeNav}>
                {category.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
