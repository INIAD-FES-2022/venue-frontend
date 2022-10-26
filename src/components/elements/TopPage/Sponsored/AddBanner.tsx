import { sponsoredStyle } from './Sponsored.css';

type BannerItem = {
  // name: string; // 名前
  url: string; // URL
  img: string; // バナー画像
};

type Props = {
  sponsors: BannerItem[]; // スポンサー
};

export const AddBanner: React.FC<Props> = (props) => {
  const { sponsors } = props;

  return (
    <div className={`${sponsoredStyle.container}`}>
      {sponsors.map((sponsorsList, index) => (
        <a
          href={sponsorsList.url}
          target="_blank"
          rel="noreferrer"
          key={index}
          className={sponsoredStyle.banner}
        >
          <img src={sponsorsList.img} className={`${sponsoredStyle.logo}`} />
        </a>
      ))}
    </div>
  );
};
