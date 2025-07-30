import styles from "./TextImgLeft.module.scss";
function TextImgLeft() {
  return (
    <section className={styles.sectionImgLeft}>
      <img
        src="/assets/imgLeft.png"
        alt="Image Left"
        className={styles.imageLeft}
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
export default TextImgLeft;
