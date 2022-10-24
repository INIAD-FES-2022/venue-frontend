import * as styles from './ProgramDetail.css';
import { useFetchProgram } from '../../../hooks/api/useFetchProgram';
import { Overview } from './Overview/Overview';
import { IntroImage } from './IntroImage/IntroImage';
import { ProgramDesc } from './ProgramDesc/ProgramDesc';
import { ProgramContent } from './ProgramContent/ProgramContent';
import { GroupDesc } from './GroupDesc/GroupDesc';

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
      <ProgramContent data={data} />
      {data ? <GroupDesc uuid={data.group.uuid} /> : null}
    </div>
  );
};
