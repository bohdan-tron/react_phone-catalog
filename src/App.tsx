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

            <div className="prodslider">
              <ul className="prodslider__list">
                <li className="prodslider__item">
                  <div className="card">
                    <img
                      src="img/phones/motorola-atrix-4g.0.jpg"
                      alt="product"
                      className="card__image"
                    />
                    <p className="card__name">
                      Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
                    </p>
                    <h2 className="card__discount-price">$799</h2>
                    <p className="card__price">$899</p>
                    <hr />
                    <p className="card__screen">
                      Screen
                      <span className="card__screen-spec">5.8” OLED</span>
                    </p>
                    <p className="card__capacity">
                      Capacity
                      <span className="card__capacity-spec">64 GB</span>
                    </p>
                    <p className="card__ram">
                      RAM
                      <span className="card__ram-spec">4 GB</span>
                    </p>

                    <div className="card__buttons">
                      <button
                        type="button"
                        className="card__add"
                      >
                        Add to cart
                      </button>
                      <button
                        type="button"
                        className="card__fav"
                      >
                        <SvgFavsUnfilled />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
