import * as styles from './Attention.css';
import { url } from '../../../util/config';

const AttentionLogo = ({ path }: { path: string }) => (
  <div className={styles.attentionIcon}>
    <img src={url(path)} alt="logo" />
  </div>
);

export const Attention: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.attention}>
      <AttentionLogo path="/car1.png" />
      <ul>
        <li>お車でのご来場は出来ません。</li>
        <li>公共交通機関をご利用ください。</li>
      </ul>
      <AttentionLogo path="/info.png" />
      <ul>
        <li>
          大学祭に関するお問い合わせは、INIAD-FES実行委員会の公式SNSまたは電子メールまでお願いします。
        </li>
        <li>
          東洋大学ならびに情報連携学部、ライフデザイン学部への電話、電子メールでのお問い合わせはご遠慮ください。
        </li>
      </ul>
      <AttentionLogo path="/covid.png" />
      <ul>
        <li>感染症対策にご理解とご協力をお願いします。</li>
      </ul>
    </div>
  </div>
);
