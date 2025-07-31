import styles from "./TextImg.module.scss";

function TextImg({
  title,
  subtitle,
  text,
  imageUrl,
  imageAlt,
  link,
  linkLabel,
  imagePosition = "left",
}) {
  return (
    <section className={`${styles.section} ${styles[imagePosition]}`}>
      <img src={imageUrl} alt={imageAlt} className={styles.image} />
      <div className={styles.textContent}>
        {subtitle && <h3>{subtitle}</h3>}
        {title && <h2>{title}</h2>}
        {text && <p>{text}</p>}
        {link && linkLabel && (
          <a href={link}>
            {linkLabel} <img src="/assets/arrow.svg" alt="Arrow" />
          </a>
        )}
      </div>
    </section>
  );
}

export default TextImg;
