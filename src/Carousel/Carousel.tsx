import {
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
import { sliderImgs } from '../Data/slider';

import { ReactComponent as SvgChevronLeft } from '../img/ChevronLeft.svg';
import { ReactComponent as SvgChevronRight } from '../img/ChevronRight.svg';

export const Carousel: React.FC = () => {
  const [translate, setTranslate] = useState({
    pixels: 0,
    sliderId: 1,
  });

  const handleForward = () => {
    return (translate.pixels > -2080)
      ? setTranslate({
        pixels: translate.pixels - 1040,
        sliderId: translate.sliderId + 1,
      })
      : setTranslate({
        pixels: 0,
        sliderId: 1,
      });
  };

  const handleBackward = () => {
    return (translate.pixels < 0)
      ? setTranslate({
        pixels: translate.pixels + 1040,
        sliderId: translate.sliderId - 1,
      })
      : setTranslate({
        pixels: -2080,
        sliderId: 3,
      });
  };

  const handleSliderChoose = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    const dataAttribute = event.currentTarget.getAttribute('data-px');

    if (dataAttribute) {
      setTranslate({
        pixels: +(dataAttribute),
        sliderId: id,
      });
    }
  };

  const pixelCalculation = (id: number) => {
    let px = 0;

    switch (id) {
      case 1:
        px = 0;
        break;

      case 2:
        px = -1040;
        break;

      case 3:
        px = -2080;
        break;

      default:
        break;
    }

    return String(px);
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
          >
            <SvgChevronLeft className="chevron" />
          </button>
          <button
            className="carousel__button carousel__button--forward"
            type="button"
            aria-label="carousel forward button"
            onClick={handleForward}
          >
            <SvgChevronRight className="chevron" />
          </button>
        </div>

        <div className="carousel__container">
          <ul className="carousel__list">
            {sliderImgs.map(slider => (
              <li
                key={slider.id}
                className="carousel__item"
                style={{ transform: `translate(${translate.pixels}px)` }}
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

        <div className="carousel__pagination">
          <ul className="carousel__indicators">
            {sliderImgs.map(slider => (
              <li
                key={slider.id}
                className="carousel__indicator"
              >
                <button
                  type="button"
                  aria-label="slider choose button"
                  className={classNames(
                    'carousel__rectangle',
                    { active: translate.sliderId === slider.id },
                  )}
                  data-px={pixelCalculation(slider.id)}
                  onClick={(e) => handleSliderChoose(e, slider.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
