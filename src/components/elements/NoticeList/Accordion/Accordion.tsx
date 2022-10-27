import { useState } from 'react';
import * as styles from './Accordion.css';
import { url } from '../../../../util/config';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Accordion: React.FC<Props> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          className={styles.toggleButton}
        >
          <h2>{title}</h2>
          <img
            src={url('/accordion_arrow.svg')}
            alt="arrow"
            className={`${styles.openArrow} ${
              !isOpen ? '' : styles.closeArrow
            }`}
          />
        </button>
      </div>
      <div className={`${styles.content} ${isOpen ? '' : styles.closeStyle}`}>
        {children}
      </div>
    </div>
  );
};
