import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchAllPrograms } from '../../../hooks/useFetchAllPrograms';
import { useElementRect } from '../../../hooks/useElementRect';
import * as styles from './TopPageProgramIntroduction.css';

export const TopPageProgramIntroduction = () => {
  const { data, isLoading, isError } = useFetchAllPrograms();
  const sliderRef = useRef(null);
  const { rect, updateRect } = useElementRect(sliderRef);
  const [sliderSetting, setSliderSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  });

  useEffect(() => {
    window.addEventListener('resize', updateRect);

    return () => {
      window.removeEventListener('resize', updateRect);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rect?.width && data) {
      const divNum = 300;
      setSliderSetting((s) => {
        const displayNum = Math.floor(rect.width / divNum);

        return {
          ...s,
          slidesToShow: Math.min(displayNum, data.length),
        };
      });
    }
  }, [rect?.width, data]);

  return (
    <div className={styles.container} ref={sliderRef}>
      <h2 className={styles.caption}>企画紹介</h2>
      {(() => {
        let result;
        if (isLoading) {
          result = <p>Now Loading...</p>;
        } else if (isError) {
          result = <p>Error</p>;
        } else if (data) {
          /* eslint-disable */
          result = (
            <Slider {...sliderSetting} className={styles.slider}>
              {data.map((program) => {
                return (
                  <div key={program.uuid} className={styles.sliderItem}>
                    <img
                      src={program.thumbnail}
                      alt={program.title}
                      className={styles.thumbnail}
                    />
                    <h3 className={styles.title}>{program.title}</h3>
                  </div>
                );
              })}
            </Slider>
          );
          /* eslint-enable */
        }

        return result;
      })()}
    </div>
  );
};
