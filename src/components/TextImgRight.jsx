import styles from "./TextImgRight.module.scss";
function TextImgRight() {
  return (
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
  );
}

export default TextImgRight;
