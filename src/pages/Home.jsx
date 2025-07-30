import styles from "./Home.module.scss";
function Home() {
  return (
    <>
      <section className={styles.homeSection}>
        <h1 className={styles.homeTitle}>
          Explorez le <span className={styles.colorFont}>Web</span> sous toutes
          ses <span className={styles.underline}>facettes</span>
        </h1>
        <p className={styles.description}>
          Le monde du web évolue constamment, et nous sommes là pour vous guider
          à travers ses tendances, technologies et meilleures pratiques. Que
          vous soyez développeur, designer ou passionné du digital, notre blog
          vous offre du contenu de qualité pour rester à la pointe.
        </p>
        <div className={styles.btnContainer}>
          <button className={`${styles.button}`}>Découvrir les articles</button>
          <button className={`${styles.button} ${styles.buttonReverse}`}>
            S'abonner à la newsletter
          </button>
        </div>
      </section>
      <section className={styles.homeBanner}>
        <img
          src="/assets/banner.png"
          alt="Web Banner"
          className={styles.bannerImage}
        />
      </section>
      <section className={styles.sectionPartners}>
        <h2 className={styles.partnersTitle}>Ils nous font confiance</h2>
        <ul className={styles.partnersList}>
          <li>
            <img src="/assets/partner1.png" alt="Partner 1" />
            <span>SmartFinder</span>
          </li>
          <li>
            <img src="/assets/partner2.png" alt="Partner 2" />
            <span>Zoomerr</span>
          </li>
          <li>
            <img src="/assets/partner3.png" alt="Partner 3" />
            <span>SHELLS</span>
          </li>
          <li>
            <img src="/assets/partner4.png" alt="Partner 4" />
            <span>WAVES</span>
          </li>
          <li>
            <img src="/assets/partner5.png" alt="Partner 5" />
            <span>ArtVenue</span>
          </li>
        </ul>
      </section>
      <section className={styles.sectionImgRight}>
        <img
          src="/assets/imgRight.png"
          alt="Image Right"
          className={styles.imageRight}
        />
        <div className={styles.textContent}>
          <h3>Des ressources pour tous les niveaux</h3>
          <h2>Apprenez et progressez</h2>
          <p>
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques pour apprendre efficacement.
          </p>
          <a href="#">Explorer les ressources</a>
        </div>
      </section>
      <section className={styles.sectionImgLeft}>
        <img
          src="/assets/imgLeft.png"
          alt="Image Left"
          className={styles.imageRight}
        />
        <div className={styles.textContent}>
          <h3>Des ressources pour tous les niveaux</h3>
          <h2>Apprenez et progressez</h2>
          <p>
            Que vous débutiez en développement web ou que vous soyez un expert
            cherchant à approfondir vos connaissances, nous vous proposons des
            tutoriels, guides et bonnes pratiques pour apprendre efficacement.
          </p>
          <a href="#">Explorer les ressources</a>
        </div>
      </section>
    </>
  );
}

export default Home;
