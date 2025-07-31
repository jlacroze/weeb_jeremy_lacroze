import styles from "./Partners.module.scss";

function Partners({ title, partners = [] }) {
  return (
    <section className={styles.sectionPartners}>
      {title && <h2 className={styles.partnersTitle}>{title}</h2>}
      <ul className={styles.partnersList}>
        {partners.map((partner, index) => (
          <li key={index}>
            <img src={partner.logo} alt={partner.alt || partner.name} />
            <span>{partner.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Partners;
