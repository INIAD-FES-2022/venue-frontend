import { BiLink } from 'react-icons/bi';
import { Response } from '../../../../types/api/program';
import { EmbedPlayer } from '../EmbedPlayer/EmbedPlayer';
import * as common from '../common.css';
import * as styles from './ProgramContent.css';

export const ProgramContent = ({ data }: { data: Response | undefined }) => {
  if (!data) return null;
  if (!data.streamingUrl && !data.place && !data.relatedUrl.length) return null;

  return (
    <div className={common.container}>
      <h2 className={common.caption}>企画へ</h2>
      <div className={common.frame}>
        {data.streamingUrl ? (
          <>
            <h3 className={common.headline3}>YouTubeLive</h3>
            <EmbedPlayer url={data.streamingUrl} />
          </>
        ) : null}
        {data.isFace2face ? (
          <>
            <h3 className={common.headline3}>対面</h3>
            <p
              className={styles.place}
            >{`会場は${data.place}を予定しています。`}</p>
          </>
        ) : null}
        {data.relatedUrl.length > 0 ? (
          <>
            <h3 className={common.headline3}>関連リンク</h3>
            <ul>
              {data.relatedUrl.map((link, index) => (
                <li key={index}>
                  <a href={link} className={common.withIcon}>
                    <BiLink size={16} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};
