import './sponcered.css'

const list: string[] = ['one', 'two', 'three'];//協賛のリスト

export const Sponcer = () => {

    return (//classNameは暫定
        <div>
            <h2 className="sectionTitle">ご協賛</h2>
            <a>
                <img className="banner" />
            </a>    
        </div>
    )//協賛の数によってバナー増やすかんじにしたい
}