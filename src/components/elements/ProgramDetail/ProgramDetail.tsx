import * as styles from './ProgramDetail.css';
import { Overview } from './Overview/Overview';
import { IntroImage } from './IntroImage/IntroImage';
import { ProgramDesc } from './ProgramDesc/ProgramDesc';
import { ProgramContent } from './ProgramContent/ProgramContent';
import { GroupDesc } from './GroupDesc/GroupDesc';
import { Response } from '../../../types/api/program';

type Props = {
  data: Response | undefined;
};

export const ProgramDetail: React.FC<Props> = ({ data }) => (
  <div className={styles.container}>
    <Overview data={data} />
    <IntroImage data={data} />
    <ProgramDesc data={data} />
    <ProgramContent data={data} />
    {data ? <GroupDesc uuid={data.group.uuid} /> : null}
  </div>
);
