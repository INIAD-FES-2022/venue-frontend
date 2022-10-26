import { style } from '@vanilla-extract/css';
import React from 'react';
import * as styles from './Committee.css';

export const Committee: React.FC = () => (
  <div>
    <h2 className={styles.sitTle}>INIAD-FESについて</h2>
    <div className={styles.containers}>
      <h2 className={styles.title}>概要</h2>
      <div className={styles.captions}>
        <p>
          INIAD-FES実行委員会は、東洋大学
          情報連携学部(INIAD)の学生による、大学祭を企画・運営する組織です。
        </p>
      </div>
      <h2 className={styles.title}>委員長挨拶</h2>
      <div className={styles.captions}>
        <p>
          未曾有の脅威を前に、社会が変わり始めてから2年と半年程が経ちました。
          憧れの学生生活は想像していたものと随分違っていて、卒業式や入学式は小さな教室で行われ、授業はもっと小さな液晶の中で繰り広げられました。
        </p>
        <p>
          そして、当然大学祭も対面での開催を断念することを余儀なくされます。キャンパスでの活気ある大学祭を夢見て実行委員になった僕は当然肩を落としましたが、それでも先輩方は諦めませんでした。学部設立の2017年から続いてきたINIAD-FESの歴史を途切れさせないために、オンライン開催を決定した先輩方の決意が、画面の向こうからでも伝わってきたことを覚えています。こうして、INIAD-FESはオンライン開催へと形を変えて、2年の歴史を紡いできました。
        </p>
        <p>
          そして、あの脅威が少しずつ下火になる中で、社会は再び変革の時を迎えます。奇しくも僕たち第6回INIAD-FES実行委員会は、ここで多くの「節目」と出会うことになりました。やっと目処が立ってきた対面開催と、これまでノウハウを培ってきたオンライン開催。新たに東洋大学赤羽台キャンパスに新たに移転してきたライフデザイン学部との出会い。今までのINIADに対し、新たなカリキュラムを提示するINIAD2.0への変化。この状況に対し、僕たちは第6回INIAD-FESで一つの答えを提示します。急激に流れ込んできた外国の文化との融合によって「節目」を迎えた大正時代をなぞらえて表現する僕たちの新たな折衷を、対面、オンラインの両方でお楽しみください。
          憧れの学生生活は想像していたものと随分違っていて、卒業式や入学式は小さな教室で行われ、授業はもっと小さな液晶の中で繰り広げられました。そして、当然大学祭も対面での開催を断念することを余儀なくされます。キャンパスでの活気ある大学祭を夢見て実行委員になった僕は当然肩を落としましたが、それでも先輩方は諦めませんでした。学部設立の2017年から続いてきたINIAD-FESの歴史を途切れさせないために、オンライン開催を決定した先輩方の決意が、画面の向こうからでも伝わってきたことを覚えています。こうして、INIAD-FESはオンライン開催へと形を変えて、2年の歴史を紡いできました。
        </p>
        <p>INIAD-FES実行委員会 委員長 西浦佑泰</p>
      </div>

      <div className={styles.roster}>
        <h2 className={styles.title}>第6回INIAD-FES 実行委員会 委員紹介</h2>

        <div className={styles.captions}>
          <p>委員長西浦佑泰</p>
          <p>副委員長真弓愛理</p>
          <p>企画部</p>
          <p>部長佐藤蒼巴</p>
          <p>内山泰秀</p>
          <p>チーム1</p>
          <p>松本和也内田達己</p>
          <p>内田祥太郎 片岡莉那</p>
          <p>関颯眞山越瞭旬</p>
          <div>チーム 2</div>
          <div>リーダー 中島健吾</div>
          <div>閩崎叶夢濱本陸</div>
          <div>植智佳子藤田稀星</div>
          <div>井上旭</div>
          <div>チーム 3</div>
          <div>リーダー河嵜尊地</div>
          <div>山形龍ノ介 余助拓樹</div>
          <div>荻野海羽 織田悠希</div>
          <div>宮坂知希</div>
          <div>システム部</div>
          <p>部長松本直人</p>
          <p>副部長小擇颯介</p>
          <p>落合奎太 佐藤良樹</p>
          <p>永塚拓歩 星野爽香</p>
          <p>新谷陽 宇野颯人</p>
          <p>江口裕樹木村怜裕</p>
          <p>富田秀築中田知希</p>
          <p>名取悠希 花田美生</p>
          <p>村野塁十</p>
          <div>デザイン部</div>
          部長﨑山彩音
          <div>映像課</div>
          <p>課長大久保将真</p>
          <p>鈴木俊豪原光向</p>
          <p>秋中光 鈴木優比</p>
          <p>前田泉希宮崎航河</p>
          <div>デザイン課</div>
          <p>課長河西柊美</p>
          <p>髙橋知愛石渡悠</p>
          <p>初川晃太朗 宮内河武</p>
          <p>初川晃太朗 宮内河武</p>
          <div>対外部</div>
          部長山田祐生
          <div>広報課</div>
          <p>課長 佐藈碧</p>
          <p>末川愛梨佐相春樹</p>
          <p>柴田栞央</p>
          <div>サークル課</div>
          <p>課長小川凛</p>
          <p>大矢幹太 坂本隼平</p>
          <p>西海颯真</p>
          <div>渉外課</div>
          <p>課長森美咲希</p>
          <p>玉俊弥石川大樹</p>
          <p>安藤純一郎水野凜</p>
          <p>山崎洋平</p>
          <div>経理部</div>
          <p>部長柳井優希</p>
          <p>佐藤寧央立花悠汰</p>
          <p>淺井馨河野浩喜</p>
          <p>戸田みずき 坂本海晴</p>
        </div>
      </div>
    </div>
  </div>
);
