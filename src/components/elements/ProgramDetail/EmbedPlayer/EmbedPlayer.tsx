import * as styles from './EmbedPlayer.css';

export const EmbedPlayer = ({ url }: { url: string }) => {
  if (url) {
    return (
      <div className={styles.container}>
        <div className={styles.iframeWrapper}>
          <iframe
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        </div>
      </div>
    );
  }

  return null;
};
