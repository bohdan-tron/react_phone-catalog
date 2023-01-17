import { ReactComponent as SvgLogo } from '../img/logo.svg';
import { ReactComponent as SvgChevronUp } from '../img/ChevronUp.svg';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <a href="/" className="logo">
        <SvgLogo />
      </a>

      <ul className="footer__list">
        <li className="footer__item">
          <a
            href="/"
            className="footer__link"
          >
            Github
          </a>
        </li>
        <li className="footer__item">
          <a
            href="/"
            className="footer__link"
          >
            Contacts
          </a>
        </li>
        <li className="footer__item">
          <a
            href="/"
            className="footer__link"
          >
            Rights
          </a>
        </li>
      </ul>

      <div className="footer__back-content">
        <span className="footer__back-text">Back to top</span>
        <a
          href="#header"
          className="footer__back-button"
        >
          <SvgChevronUp className="footer__chevron" />
        </a>
      </div>
    </div>
  </footer>
);
