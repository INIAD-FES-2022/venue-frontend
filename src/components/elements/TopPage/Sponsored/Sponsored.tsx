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
      img: `${API_ROOT}image/apre.png`,
    },
    // {
    //   url: 'https://goo.gl/maps/Yye178BUSuZnPNPf9',
    //   img: API_ROOT+'/sponsors/',
    // },
    {
      url: 'https://www.akabane.ed.jp/',
      img: `${API_ROOT}image/akabane-kindergarten.png`,
    },
    {
      url: 'https://www.co-yard.com/',
      img: `${API_ROOT}image/co-yard.jpg`,
    },
    {
      url: 'https://www.maeno-yakkyoku.co.jp/shoplist/%e8%b5%a4%e7%be%bd%e6%9c%ac%e5%ba%97/',
      img: `${API_ROOT}image/maeno-drug.jpg`,
    },
    {
      url: 'https://www.mast-kiya.net/',
      img: `${API_ROOT}image/shamaison_kiya.png`,
    },
    {
      url: 'https://goo.gl/maps/WKgjX4LFbEB6uYdG7',
      img: `${API_ROOT}image/sanchu.png`,
    },
    {
      url: 'https://www.johokubank.jp/',
      img: `${API_ROOT}image/johoku.jpg`,
    },
    {
      url: 'http://www.c21daikei.co.jp/',
      img: `${API_ROOT}image/c21_daikei.jpg`,
    },
    {
      url: 'https://www.next-gears.net/',
      img: `${API_ROOT}image/nextgears.png`,
    },
    {
      url: 'https://twitter.com/bp1_akabane',
      img: `${API_ROOT}image/bookspage1.svg`,
    },
    {
      url: 'https://goo.gl/maps/n5NCcZ6RuNzmxJou6',
      img: `${API_ROOT}image/bendika.jpg`,
    },
    {
      url: 'http://www.machi-kita.jp/',
      img: `${API_ROOT}image/machikita.png`,
    },
    {
      url: 'https://mangetutanuki.com/aeaefa/',
      img: `${API_ROOT}image/mangetsu.jpg`,
    },
  ]; // 協賛のリスト

  return <AddBanner sponsors={sponsorsList} />;
};
