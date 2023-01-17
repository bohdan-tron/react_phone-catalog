import './App.scss';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import { ReactComponent as SvgChevronLeft } from './img/ChevronLeft.svg';
import { ReactComponent as SvgChevronRight } from './img/ChevronRight.svg';

const App = () => {
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
