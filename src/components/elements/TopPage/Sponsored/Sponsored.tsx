import { AddBanner } from './AddBanner';

export const Sponsored = () => {
  type BannerItem = {
    name: string; // 名前
    url: string; // URL
    img: string; // バナー画像
  };
  const sponsorsList: BannerItem[] = [
    {
      name: 'Rakuten',
      url: 'https://www.rakuten.co.jp/',
      img: 'https://r.r10s.jp/com/img/thumb/logo/logo_rakuten_25th.svg',
    },
    {
      name: 'Google',
      url: 'https://www.google.com/?hl=ja',
      img: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    },
    {
      name: 'Fujitsu',
      url: 'https://www.fujitsu.com/jp/',
      img: 'https://www.fmworld.net/images/common/fj/imgv4/common/fujitsu/symbolmark.gif',
    },
  ]; // 協賛のリスト

  return (
    <div>
      <AddBanner sponsors={sponsorsList} />
    </div>
  );
};
