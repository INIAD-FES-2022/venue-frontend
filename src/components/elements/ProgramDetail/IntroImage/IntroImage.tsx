import { useEffect, useState, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Response } from '../../../../types/api/program';
import { useElementRect } from '../../../../hooks/useElementRect';
import * as styles from './IntroImage.css';
import * as common from '../common.css';

const settingInit: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
};

export const IntroImage = ({ data }: { data: Response | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useElementRect(ref, ['resize']);
  const [sliderSetting, setSliderSetting] = useState<Settings>(settingInit);

  useEffect(() => {
    if (rect?.width) {
      const divNum = 250;
      const displayNum = Math.floor(rect.width / divNum);
      const setting = data
        ? {
            ...settingInit,
            slidesToShow: Math.min(displayNum, data.images.length),
          }
        : {
            ...settingInit,
            slidesToShow: displayNum,
          };
      setSliderSetting(setting);
    }
  }, [rect?.width, data]);

  /* eslint-disable */
  return (
    <div className={common.container}>
      <div className={styles.sliderWrapper} ref={ref}>
        <Slider {...sliderSetting}>
          {data?.images.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <img src={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
