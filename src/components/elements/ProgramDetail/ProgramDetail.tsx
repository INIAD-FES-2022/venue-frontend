import * as styles from './ProgramDetail.css';
import { useFetchProgram } from '../../../hooks/api/useFetchProgram';
import { Overview } from './Overview/Overview';
import { IntroImage } from './IntroImage/IntroImage';
import { ProgramDesc } from './ProgramDesc/ProgramDesc';
import { EmbedPlayer } from './EmbedPlayer/EmbedPlayer';
import { GroupDesc } from './GroupDesc/GroupDesc';
import { RelatedLink } from './RelatedLink/RelatedLink';

type Props = {
  uuid: string;
};

export const ProgramDetail: React.FC<Props> = ({ uuid }) => {
  const { data } = useFetchProgram(uuid);

  return (
    <div className={styles.container}>
      <Overview data={data} />
      <IntroImage data={data} />
      <ProgramDesc data={data} />
      {data ? <EmbedPlayer url={data.streamingUrl} /> : null}
      {data ? <GroupDesc uuid={data.group.uuid} /> : null}
      {data ? <RelatedLink links={data.relatedUrl} /> : null}
    </div>
  );
};
