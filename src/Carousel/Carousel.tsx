import { useEffect, useState } from 'react';
import { sliderImgs } from '../Data/slider';

export const Carousel: React.FC = () => {
  const [translate, setTranslate] = useState(0);

  const handleForward = () => {
    return (translate > -2080)
      ? setTranslate(translate - 1040)
      : setTranslate(0);
  };

  const handleBackward = () => {
    return (translate < 0)
      ? setTranslate(translate + 1040)
      : setTranslate(-2080);
  };

  useEffect(() => {
    const timeout = setTimeout(handleForward, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <div className="carousel__buttons">
          <button
            className="carousel__button carousel__button--backward"
            type="button"
            aria-label="carousel backward button"
            onClick={handleBackward}
          />
          <button
            className="carousel__button carousel__button--forward"
            type="button"
            aria-label="carousel forward button"
            onClick={handleForward}
          />
        </div>

        <div className="carousel__container">
          <ul className="carousel__list">
            {sliderImgs.map(slider => (
              <li
                key={slider.id}
                className="carousel__item"
                style={{ transform: `translate(${translate}px)` }}
              >
                <img
                  src={slider.path}
                  alt={slider.title}
                  className="carousel__picture"
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
