import styles from "./Hero.module.scss";

function Hero({
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryClick,
  onSecondaryClick,
  bannerImageUrl = "/assets/banner.png",
  bannerAlt = "Banner Image",
}) {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.btnContainer}>
        {primaryButtonLabel && (
          <button className={styles.button} onClick={onPrimaryClick}>
            {primaryButtonLabel}
          </button>
        )}
        {secondaryButtonLabel && (
          <button
            className={`${styles.button} ${styles.buttonReverse}`}
            onClick={onSecondaryClick}
          >
            {secondaryButtonLabel}
          </button>
        )}
      </div>
      {bannerImageUrl && (
        <div className={styles.banner}>
          <img
            src={bannerImageUrl}
            alt={bannerAlt}
            className={styles.bannerImage}
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
