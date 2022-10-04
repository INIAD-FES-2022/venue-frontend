import { Response } from '../../../../types/api/program';
import * as common from '../common.css';

export const ProgramDesc = ({ data }: { data: Response | undefined }) => {
  if (data) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>企画説明</h2>
        <p className={common.frame}>{data.description}</p>
      </div>
    );
  }

  return null;
};
