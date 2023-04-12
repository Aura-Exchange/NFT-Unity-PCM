import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>

          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={660}
              height={660}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  NFT Unity Crew
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://twitter.com/NFtunity707"
                  target="_blank"
                >
                  NFT Unity
                </Link>{" "}
                private collection marketplace. Built by <b>Aura</b>,
                powered by <b>thirdweb</b>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/mint">
                  Mint Access Pass
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://discord.gg/9RMDbPTRWf"
                  target="_blank"
                >
                  Discord
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
