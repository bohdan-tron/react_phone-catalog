import './App.scss';
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Carousel />

      <Footer />
    </div>
  );
};

export default App;
