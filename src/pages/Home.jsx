import Hero from "../components/Hero";
import Partners from "../components/Partners";
import TextImg from "../components/TextImg";
import styles from "./Home.module.scss";
function Home() {
  return (
    <>
      <Hero
        title={
          <>
            Explorez le <span className={styles.textColor}>Web</span> sous
            toutes ses facettes
          </>
        }
        description="Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe."
        primaryButtonLabel="Découvrir les articles"
        secondaryButtonLabel="S'abonner à la newsletter"
        onPrimaryClick={() => console.log("Articles clicked")}
        onSecondaryClick={() => console.log("Newsletter clicked")}
        bannerImageUrl="/assets/banner.png"
        bannerAlt="Banner Image"
      />
      <Partners />
      <TextImg
        title={
          <>
            <span className={styles.textColor}>Apprenez</span> et{" "}
            <span className={styles.textColor}>progressez</span>
          </>
        }
        subtitle="Des ressources pour tous les niveaux"
        text="Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement."
        imageUrl="/assets/imgRight.png"
        imageAlt="Image Left"
        link="#"
        linkLabel="Explorer les ressources"
        imagePosition="right"
      />
      <TextImg
        title={
          <>
            Restez informé des dernières{" "}
            <span className={styles.textColor}>tendances</span>
          </>
        }
        subtitle="Le web, un écosystème en constante évolution"
        text="Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !"
        imageUrl="/assets/imgLeft.png"
        imageAlt="Image Left"
        link="#"
        linkLabel="Explorer les ressources"
        imagePosition="left"
      />
    </>
  );
}

export default Home;
