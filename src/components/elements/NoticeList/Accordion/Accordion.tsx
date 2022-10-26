import Image from 'next/image';
import { useState } from 'react';
import * as styles from './Accordion.css';

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
          <Image
            src="/accordion_arrow.svg"
            alt="arrow"
            className={`${styles.openArrow} ${
              !isOpen ? '' : styles.closeArrow
            }`}
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={`${styles.content} ${isOpen ? '' : styles.closeStyle}`}>
        {children}
      </div>
    </div>
  );
};
