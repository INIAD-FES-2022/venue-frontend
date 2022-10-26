import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useFetchAllPrograms } from '../../../../hooks/api/useFetchAllPrograms';
import { useElementRect } from '../../../../hooks/useElementRect';
import * as styles from './TopPageProgramIntroduction.css';

const DummyItem = () => (
  <div className={styles.sliderItem}>
    <div className={styles.dummyImage}> </div>
    <div className={styles.dummyTitle}> </div>
  </div>
);

const sliderSettingInit = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
};

export const TopPageProgramIntroduction = () => {
  const { data, isLoading, isError } = useFetchAllPrograms();
  const sliderRef = useRef(null);
  const rect = useElementRect<HTMLDivElement>(sliderRef, ['resize']);
  const [sliderSetting, setSliderSetting] = useState<Settings | undefined>(
    undefined,
  );

  useEffect(() => {
    if (rect?.width) {
      const divNum = 250;
      const displayNum = Math.floor(rect.width / divNum);
      const setting = data
        ? {
            ...sliderSettingInit,
            slidesToShow: Math.min(displayNum, data.length),
          }
        : {
            ...sliderSettingInit,
            slidesToShow: displayNum,
          };
      setSliderSetting(setting);
    }
  }, [rect?.width, data]);

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper} ref={sliderRef}>
        {(() => {
          let result;
          if (sliderSetting) {
            if (isLoading) {
              result = (
                /* eslint-disable */
                <Slider {...sliderSetting} className={styles.slider}>
                  {[...Array(sliderSetting.slidesToShow).keys()].map((i) => (
                    <DummyItem key={i} />
                  ))}
                </Slider>
              );
            } else if (isError) {
              result = <p>Error</p>;
            } else if (data) {
              result = (
                <Slider {...sliderSetting} className={styles.slider}>
                  {data.map((program) => {
                    return (
                      <Link
                        key={program.uuid}
                        href={`./program/${program.uuid}`}
                      >
                        <a>
                          <div className={styles.sliderItem}>
                            <img
                              src={program.thumbnail}
                              alt={program.title}
                              className={styles.thumbnail}
                            />
                            <h3 className={styles.title}>{program.title}</h3>
                            <p className={styles.groupName}>
                              {program.group.name}
                            </p>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </Slider>
              );
              /* eslint-enable */
            }
          }

          return result;
        })()}
      </div>
      <Link href="/program/">
        <button type="button" className={`${styles.browseMore}`}>
          &gt; もっと見る &lt;
        </button>
      </Link>
    </div>
  );
};
