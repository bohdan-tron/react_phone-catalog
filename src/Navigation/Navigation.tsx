export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a
            href="/home"
            className="navigation__link"
          >
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a
            href="/phones"
            className="navigation__link"
          >
            Phones
          </a>
        </li>
        <li className="navigation__item">
          <a
            href="/tablets"
            className="navigation__link"
          >
            Tablets
          </a>
        </li>
        <li className="navigation__item">
          <a
            href="/accessories"
            className="navigation__link"
          >
            Accessories
          </a>
        </li>
      </ul>
    </div>
  );
};
