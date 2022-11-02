import { BiLink } from 'react-icons/bi';
import { useFetchGroup } from '../../../../hooks/api/useFetchGroup';
import * as common from '../common.css';

export const GroupDesc = ({ uuid }: { uuid: string }) => {
  const { data } = useFetchGroup(uuid);
  const rem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);

  if (data) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>団体説明</h2>
        <div className={common.frame}>
          <h3 className={common.headline3}>{data.name}</h3>
          <p className="mb-5">{data.description}</p>
          <h3 className={common.headline3}>ロゴ</h3>
          <div className="flex w-full items-center justify-center">
            <img src={data.logo} alt="logo" className="h-36 w-36 rounded-xl" />
          </div>
          {data.homepage ? (
            <a href={data.homepage} className={common.withIcon}>
              <BiLink size={rem} />
              {data.homepage}
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  return null;
};
