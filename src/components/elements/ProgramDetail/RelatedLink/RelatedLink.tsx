import { BiLink } from 'react-icons/bi';
import * as common from '../common.css';

export const RelatedLink = ({ links }: { links: string[] }) => {
  const rem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);
  if (links.length) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>関連リンク</h2>
        <ul className={common.frame}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} className={common.withIcon}>
                <BiLink size={rem} />
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};
