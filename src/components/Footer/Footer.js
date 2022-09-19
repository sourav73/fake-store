import React from 'react';
import styles from './Footer.module.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="max-width">
        <div className="footer-content d-flex align-items-center justify-content-between flex-column flex-sm-row text-center text-sm-start">
          <p className="mb-3 mb-sm-0">©2022 Fake Store | All rights reserved</p>
          <div className={styles.links}>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Brands</Link>
              </li>
            </ul>
            <div className={styles.socials}>
              <Link to="#">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="#">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
