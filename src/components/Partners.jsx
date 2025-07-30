import styles from "./Partners.module.scss";
function Partners() {
  return (
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
  );
}

export default Partners;
