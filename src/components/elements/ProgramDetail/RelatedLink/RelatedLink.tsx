import * as common from '../common.css';

export const RelatedLink = ({ links }: { links: string[] }) => {
  if (links.length) {
    return (
      <div className={common.container}>
        <h2 className={common.caption}>関連リンク</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};
