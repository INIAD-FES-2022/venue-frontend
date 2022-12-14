import { Response } from '../../../../types/api/program';
import * as common from '../common.css';

export const ProgramDesc = ({ data }: { data: Response | undefined }) => {
  if (data) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>企画説明</h2>
        <div className={common.frame}>
          <h3 className={common.headline3}>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    );
  }

  return null;
};
