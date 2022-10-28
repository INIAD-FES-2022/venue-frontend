import { accessStyle } from './Access.css';
import { Layout } from '../../layouts/Layout';

export const Access: React.FC = () => (
  <div className={accessStyle.contents}>
    <p>〒115-8650</p>
    <p>東京都北区赤羽台1-7-11 INIAD HUB-1</p>
    <br />
    <p>※お車での来場はできません。公共交通機関をご利用ください。</p>
    <p>WELLB HUB-2からの通り抜けはできません。</p>
    <img
      className={accessStyle.img}
      src="./map@0.5x@0.5x-8.png"
      alt="赤羽駅西口から徒歩10分"
    />
  </div>
);
