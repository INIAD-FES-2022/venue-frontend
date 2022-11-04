import React from 'react';
import * as styles from './Committee.css';
import { url } from '../../../util/config';

export const Committee: React.FC = () => (
  <div>
    <div className={styles.containers}>
      <h2 className={styles.title}>概要</h2>
      <div className={styles.captions}>
        <p>
          INIAD-FES実行委員会は、東洋大学情報連携学部(INIAD)の学生による、大学祭を企画・運営する組織です。
        </p>
      </div>
      <h2 className={styles.title}>委員長挨拶</h2>
      <div className={styles.captions}>
        <p className="pb-6">
          未曾有の脅威を前に、社会が変わり始めてから2年と半年程が経ちました。
          憧れの学生生活は想像していたものと随分違っていて、卒業式や入学式は小さな教室で行われ、授業はもっと小さな液晶の中で繰り広げられました。
        </p>
        <p className="pb-6">
          当然大学祭も対面での開催を断念することを余儀なくされます。キャンパスでの活気ある大学祭を夢見て実行委員になった僕は当然肩を落としましたが、それでも先輩方は諦めませんでした。学部設立の2017年から続いてきたINIAD-FESの歴史を途切れさせないために、オンライン開催を決定した先輩方の決意が、画面の向こうからでも伝わってきたことを覚えています。こうして、INIAD-FESはオンライン開催へと形を変えて、2年の歴史を紡いできました。
        </p>
        <p className="pb-6">
          あの脅威が少しずつ下火になる中で、社会は再び変革の時を迎えます。奇しくも僕たち第6回INIAD-FES実行委員会は、ここで多くの「節目」と出会うことになりました。やっと目処が立ってきた対面開催と、これまでノウハウを培ってきたオンライン開催。新たに東洋大学赤羽台キャンパスに移転してきたライフデザイン学部との出会い。今までのINIADに対し、新たなカリキュラムを提示するINIAD2.0への変化。この状況に対し、僕たちは第6回INIAD-FESで一つの答えを提示します。急激に流れ込んできた外国の文化との融合によって「節目」を迎えた大正時代をなぞらえて表現する僕たちの新たな折衷を、対面、オンラインの両方でお楽しみください。
        </p>
        <p className="pb-6">INIAD-FES実行委員会 委員長 西浦佑泰</p>
      </div>

      <div className={styles.roster}>
        <h2 className={styles.title}>第6回INIAD-FES 実行委員会 委員紹介</h2>

        <img src={url('/router.png')} />
      </div>
    </div>
  </div>
);
