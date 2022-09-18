import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Slider, { Settings } from 'react-slick';
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

const imageWidth = 400;
const imageHeight = (imageWidth / 16) * 9;

export const IntroImage = ({ data }: { data: Response | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useElementRect(ref, ['resize']);
  const [sliderSetting, setSliderSetting] = useState<Settings>(settingInit);

  useEffect(() => {
    if (rect?.width) {
      let displayNum = Math.floor(rect.width / imageWidth);
      displayNum = Math.max(1, displayNum);
      const newSetting = data
        ? {
            ...sliderSetting,
            slidesToShow: Math.min(displayNum, data.images.length),
          }
        : {
            ...sliderSetting,
            slidesToShow: displayNum,
          };
      setSliderSetting(newSetting);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [data, rect?.width]);

  /* eslint-disable */
  return (
    <div className={common.container}>
      <div className={styles.sliderWrapper} ref={ref}>
        <Slider {...sliderSetting}>
          {data?.images.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <div className={styles.imageWrapper}>
                <Image src={image} width={imageWidth} height={imageHeight} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
