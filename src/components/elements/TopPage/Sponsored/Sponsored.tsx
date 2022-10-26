import { AddBanner } from './AddBanner';

export const Sponsored = () => {
  type BannerItem = {
    // name: string; // 名前
    url: string; // URL
    img: string; // バナー画像
  };
  const sponsorsList: BannerItem[] = [
    {
      url: 'https://www.apire.net/',
      img: '/sponsors/アピレ.png',
    },
    // {
    //   url: 'https://goo.gl/maps/Yye178BUSuZnPNPf9',
    //   img: '/sponsors/',
    // },
    {
      url: 'https://www.akabane.ed.jp/',
      img: '/sponsors/赤羽幼稚園・赤羽こども園.png',
    },
    {
      url: 'https://www.co-yard.com/',
      img: '/sponsors/カレッジヤード.jpg',
    },
    {
      url: 'https://www.maeno-yakkyoku.co.jp/shoplist/%e8%b5%a4%e7%be%bd%e6%9c%ac%e5%ba%97/',
      img: '/sponsors/マエノ薬局.jpg',
    },
    {
      url: 'https://www.mast-kiya.net/',
      img: '/sponsors/シャーメゾンショップ 有限会社喜屋.png',
    },
    {
      url: 'https://goo.gl/maps/WKgjX4LFbEB6uYdG7',
      img: '/sponsors/食事処 三忠.png',
    },
    {
      url: 'https://www.johokubank.jp/',
      img: '/sponsors/城北信用金庫.jpg',
    },
    {
      url: 'http://www.c21daikei.co.jp/',
      img: '/sponsors/センチュリー21 大恵商事.jpg',
    },
    {
      url: 'https://www.next-gears.net/',
      img: '/sponsors/ネクストギアーズ.png',
    },
    {
      url: 'https://twitter.com/bp1_akabane',
      img: '/sponsors/ブックスページワン.jpeg',
    },
    {
      url: 'https://goo.gl/maps/n5NCcZ6RuNzmxJou6',
      img: '/sponsors/ベンディカ.jpg',
    },
    {
      url: 'http://www.machi-kita.jp/',
      img: '/sponsors/まちづくり北株式会社.jpg',
    },
    {
      url: 'https://mangetutanuki.com/aeaefa/',
      img: '/sponsors/手打ら〜めん満月.jpg',
    },
  ]; // 協賛のリスト

  return <AddBanner sponsors={sponsorsList} />;
};
