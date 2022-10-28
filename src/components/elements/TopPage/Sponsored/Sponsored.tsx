import { AddBanner } from './AddBanner';

export const Sponsored = () => {
  const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT ?? '';
  type BannerItem = {
    // name: string; // 名前
    url: string; // URL
    img: string; // バナー画像
  };
  const sponsorsList: BannerItem[] = [
    {
      url: 'https://www.apire.net/',
      img: `${API_ROOT}image/アピレ.png`,
    },
    // {
    //   url: 'https://goo.gl/maps/Yye178BUSuZnPNPf9',
    //   img: API_ROOT+'/sponsors/',
    // },
    {
      url: 'https://www.akabane.ed.jp/',
      img: `${API_ROOT}image/赤羽幼稚園・赤羽こども園.png`,
    },
    {
      url: 'https://www.co-yard.com/',
      img: `${API_ROOT}image/カレッジヤード.jpg`,
    },
    {
      url: 'https://www.maeno-yakkyoku.co.jp/shoplist/%e8%b5%a4%e7%be%bd%e6%9c%ac%e5%ba%97/',
      img: `${API_ROOT}image/マエノ薬局.jpg`,
    },
    {
      url: 'https://www.mast-kiya.net/',
      img: `${API_ROOT}image/シャーメゾンショップ 有限会社喜屋.png`,
    },
    {
      url: 'https://goo.gl/maps/WKgjX4LFbEB6uYdG7',
      img: `${API_ROOT}image/食事処 三忠.png`,
    },
    {
      url: 'https://www.johokubank.jp/',
      img: `${API_ROOT}image/城北信用金庫.jpg`,
    },
    {
      url: 'http://www.c21daikei.co.jp/',
      img: `${API_ROOT}image/センチュリー21 大恵商事.jpg`,
    },
    {
      url: 'https://www.next-gears.net/',
      img: `${API_ROOT}image/ネクストギアーズ.png`,
    },
    {
      url: 'https://twitter.com/bp1_akabane',
      img: `${API_ROOT}image/ブックスページワン イトーヨーカドー赤羽店.svg`,
    },
    {
      url: 'https://goo.gl/maps/n5NCcZ6RuNzmxJou6',
      img: `${API_ROOT}image/ベンディカ.jpg`,
    },
    {
      url: 'http://www.machi-kita.jp/',
      img: `${API_ROOT}image/まちづくり北株式会社.jpg`,
    },
    {
      url: 'https://mangetutanuki.com/aeaefa/',
      img: `${API_ROOT}image/手打ら〜めん満月.jpg`,
    },
  ]; // 協賛のリスト

  return <AddBanner sponsors={sponsorsList} />;
};
