import Image from 'next/image';
import { BiLink } from 'react-icons/bi';
import { useFetchGroup } from '../../../../hooks/api/useFetchGroup';
import * as styles from './GroupDesc.css';
import * as common from '../common.css';

export const GroupDesc = ({ uuid }: { uuid: string }) => {
  const { data } = useFetchGroup(uuid);
  const rem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);

  if (data) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>団体説明</h2>
        <div className={styles.description}>
          <div className={styles.info}>
            <Image
              src={data.logo}
              alt={data.name}
              height={rem * 2}
              width={rem * 2}
              className={styles.logo}
            />
            <p className={styles.name}>{data.name}</p>
          </div>
          <p>{data.description}</p>
        </div>
        {data.homepage ? (
          <a href={data.homepage} className={common.withIcon}>
            <BiLink size={rem} />
            {data.homepage}
          </a>
        ) : null}
      </div>
    );
  }

  return null;
};
