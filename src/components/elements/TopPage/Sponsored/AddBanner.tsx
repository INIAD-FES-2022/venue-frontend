import { sponsoredStyle } from './Sponsored.css';

type BannerItem = {
  name: string; // 名前
  url: string; // URL
  img: string; // バナー画像
};

type Props = {
  sponsors: BannerItem[]; // スポンサー
};

export const AddBanner: React.FC<Props> = (props) => {
  const { sponsors } = props;

  return (
    <div>
      <h2 className={sponsoredStyle.sectionTitle}>ご協賛</h2>
      {sponsors.map((sponsorsList, index) => (
        <div className={sponsoredStyle.banner} key={index}>
          <a
            href={sponsorsList.url}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <img src={sponsorsList.img} />
          </a>
        </div>
      ))}
    </div>
  );
};