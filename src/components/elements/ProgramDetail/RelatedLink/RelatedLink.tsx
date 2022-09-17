import * as styles from './RelatedLink.css';

export const RelatedLink = ({ links }: { links: string[] }) => {
  if (links.length) {
    return (
      <div className={styles.relatedLink}>
        <h2 className={styles.caption}>関連リンク</h2>
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
