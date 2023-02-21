import { ReactComponent as SvgLogo } from '../img/logo.svg';
import { ReactComponent as SvgFavourites } from '../img/FavsUnfilled.svg';
import { ReactComponent as SvgCart } from '../img/ShoppingCart.svg';
import { ReactComponent as SvgSearch } from '../img/Search.svg';
import { Ellipse } from '../Ellipse/Ellipse';
import { Navigation } from '../Navigation/Navigation';

export const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__left">
          <a href="/" className="logo">
            <SvgLogo />
          </a>

          <Navigation />
        </div>

        <div className="header__right">
          <label className="header__search">
            <input
              type="text"
              className="header__input"
              placeholder="Search in phones..."
            />
            <div className="header__searchSVG">
              <SvgSearch />
            </div>
          </label>

          <a href="/favourites" className="header__favourites">
            <div className="header__count-content">
              <SvgFavourites />
              <Ellipse />
            </div>
          </a>

          <a href="/cart" className="header__cart">
            <div className="header__count-content">
              <SvgCart />
              <Ellipse />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
