import styles from "./Banner.module.scss";
function Banner() {
  return (
    <section className={styles.banner}>
      <img
        src="/assets/banner.png"
        alt="Web Banner"
        className={styles.bannerImage}
      />
    </section>
  );
}

export default Banner;
