import './App.scss';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import { ReactComponent as SvgChevronLeft } from './img/ChevronLeft.svg';
import { ReactComponent as SvgChevronRight } from './img/ChevronRight.svg';
import { ReactComponent as SvgFavsUnfilled } from './img/FavsUnfilled.svg';
// import { getProducts } from './utils/fetchData';

const App = () => {
  // const fetchProducts = async () => {
  //   try {
  //     const resp = await getProducts();
  //     console.log(resp);
  //   } catch (error) {
  //     throw new Error();
  //   }
  // };

  // fetchProducts();

  return (
    <div className="App">

      <Header />

      <Carousel />

      <section className="hot">
        <div className="hot__hat">
          <div className="hot__hat-content">
            <h1 className="hot__title">Hot prices</h1>
            <div className="hot__buttons">
              <button
                type="button"
                className="hot__backward"
                aria-label="hot button backward"
              >
                <SvgChevronLeft className="chevron" />
              </button>
              <button
                type="button"
                className="hot__forward"
                aria-label="hot button forward"
              >
                <SvgChevronRight className="chevron" />
              </button>
            </div>
          </div>

          <div className="prodslider">
            <ul className="prodslider__list">
              <li className="prodslider__item">
                <div className="card">
                  <img
                    src="img/products/motorola-atrix-4g.0.jpg"
                    alt="mobile-img"
                    className="card__image"
                  />
                  <p className="card__name">
                    Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
                  </p>
                  <div className="card__price-content">
                    <h2 className="card__discount-price">
                      $799
                      <span className="card__price">$899</span>
                    </h2>
                  </div>

                  <div className="card__specs">
                    <p className="card__spec-left">
                      Screen
                      <span className="card__spec-right">5.8” OLED</span>
                    </p>
                    <p className="card__spec-left">
                      Capacity
                      <span className="card__spec-right">64 GB</span>
                    </p>
                    <p className="card__spec-left">
                      RAM
                      <span className="card__spec-right">4 GB</span>
                    </p>
                  </div>

                  <div className="card__buttons">
                    <button
                      type="button"
                      className="card__button card__button--add"
                    >
                      Add to cart
                    </button>
                    <button
                      type="button"
                      className="card__button card__button--fav"
                    >
                      <SvgFavsUnfilled />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
