import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from './Homepage.module.scss';
import { fetchFeaturedProducts } from '../../store/slices/products';
import { useDispatch, useSelector } from 'react-redux';
import CustomCard from '../../components/Card/CustomCard';

const Homepage = () => {
  const { featuredProducts, error, loading } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (featuredProducts.length === 0) dispatch(fetchFeaturedProducts(8));
  }, []);
  return (
    <main className="max-width">
      {/* Sale banner section starts */}
      <section className={styles.sale}>
        <img src="./images/sale.jpg" alt="Sale" />
      </section>
      {/* Sale banner section ends */}
      {/* Slider section starts */}
      <section id="slider">
        <Carousel>
          <Carousel.Item className={`${styles.sliderItem} ${styles.clothes}`}>
            <div className={styles.sliderText}>
              <p>Fashion For Everyone</p>
              <small>Plenty of Products to chose from</small>
              <Link to="/#" className="btn-grad">
                Shop Now
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item className={`${styles.sliderItem} ${styles.jwellery}`}>
            <div className={styles.sliderText}>
              <p>Looking for accesories?</p>
              <small>Browse our categories now</small>
              <Link to="/#" className="btn-grad">
                Shop Now
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item
            className={`${styles.sliderItem} ${styles.electronics}`}
          >
            <div className={styles.sliderText}>
              <p>Need electronics?</p>
              <small>Look for your desired product</small>
              <Link to="/#" className="btn-grad">
                Shop Now
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Slider section ends */}
      {/* Featured Products starts */}
      <section id="featured-products" className="mt-5">
        <h5 className="heading">Featured Products</h5>
        <Container className="mt-5">
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
            {featuredProducts.map((product, index) => (
              <Col key={index} lg={3} md={4} sm={6} className="">
                <CustomCard productInfo={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* Featured Products ends */}
      {/* About us starts */}
      <section id="about-us" className="my-5">
        <Container>
          <h5 className="heading">Who We Are?</h5>
          <p className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eaque
            hic omnis perferendis modi eveniet cupiditate ipsa eligendi, amet
            aspernatur accusantium accusamus in blanditiis non provident. Aut,
            consequuntur sint harum sequi, labore laborum rem, quis est
            similique cum voluptates dolore incidunt recusandae ut facere illo
            officiis ullam magnam! Aut similique possimus inventore, doloremque
            accusantium nemo sit officiis sed nam adipisci ut expedita natus
            sint, ipsa quidem fugit iste itaque voluptatem! Modi voluptates,
            officiis eligendi possimus accusamus asperiores iusto tenetur
            ratione vel accusantium qui? Labore fugit vitae sit soluta
            reprehenderit amet iste, odit facilis magnam sapiente inventore,
            suscipit mollitia. Pariatur omnis nesciunt vitae excepturi
            recusandae quidem soluta quasi accusantium magni veritatis, quae
            architecto dolor quia atque distinctio. Praesentium adipisci officia
            eaque ab aperiam animi ea recusandae perferendis temporibus commodi
            assumenda quidem explicabo iste accusantium ipsa, alias ratione unde
            debitis maxime doloribus quae placeat dolores? Reiciendis sed fugiat
            in ipsam perferendis, assumenda exercitationem omnis aspernatur quam
            consectetur itaque praesentium dolore illum? Eveniet, maxime amet
            quo placeat tempora hic, rerum, beatae at fugit ipsam fuga aperiam.
            Quam necessitatibus error maiores molestias excepturi molestiae,
            temporibus cum eum incidunt? Asperiores eveniet iusto odit repellat
            cumque temporibus molestias possimus facere cupiditate aut, illum
            dicta et doloribus?
          </p>
        </Container>
      </section>
      {/* About us ends */}
    </main>
  );
};

export default Homepage;
