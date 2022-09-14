import './Sponsored.css'

type bannerItem = {
    name: string; //名前
    url: string; //URL
    img: string; //バナー画像
}
export const Sponsored = () => {
    const sponsorsList: bannerItem[] = [
        {name: 'Rakuten', url: 'https://www.rakuten.co.jp/', img: 'https://r.r10s.jp/com/img/thumb/logo/logo_rakuten_25th.svg'},
        {name: 'Google', url: 'https://www.google.com/?hl=ja', img: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'},
        {name: 'Fujitsu', url: 'https://www.fujitsu.com/jp/', img: 'https://www.fmworld.net/images/common/fj/imgv4/common/fujitsu/symbolmark.gif'}
    ];//協賛のリスト

    return (
        <div>
            <h2 className='sectionTitle'>ご協賛</h2>
            {sponsorsList.map((sponsor: bannerItem) => {
                return(
                    <a href={sponsor.url} target="_brank"><img src={sponsor.img} /></a>
                )
            })}
        </div>
    );
}

export default Sponsored;