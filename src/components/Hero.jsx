import styles from "./Hero.module.scss";
function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>
        Explorez le <span className={styles.colorFont}>Web</span> sous toutes
        ses <span className={styles.underline}>facettes</span>
      </h1>
      <p className={styles.description}>
        Le monde du web évolue constamment, et nous sommes là pour vous guider à
        travers ses tendances, technologies et meilleures pratiques. Que vous
        soyez développeur, designer ou passionné du digital, notre blog vous
        offre du contenu de qualité pour rester à la pointe.
      </p>
      <div className={styles.btnContainer}>
        <button className={`${styles.button}`}>Découvrir les articles</button>
        <button className={`${styles.button} ${styles.buttonReverse}`}>
          S'abonner à la newsletter
        </button>
      </div>
    </section>
  );
}

export default Hero;
