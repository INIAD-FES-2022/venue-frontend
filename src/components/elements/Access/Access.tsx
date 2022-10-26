import { accessStyle } from './Access.css';

export const Access: React.FC = () => (
  <div className={accessStyle.wrapper}>
    <h2 className={accessStyle.sectionTitle}>アクセス</h2>
    <div className={accessStyle.contents}>
      <p>〒115-8650</p>
      <p>東京都北区赤羽台1-7-11 INIAD HUB-1</p>
      <br />
      <p>※お車での来場はできません。公共交通機関をご利用ください。</p>
      <img
        className={accessStyle.img}
        src="./map.png"
        alt="赤羽駅西口から徒歩10分"
      />
    </div>
  </div>
);
