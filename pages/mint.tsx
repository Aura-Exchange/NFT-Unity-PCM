import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Earn.module.css";

export default function Stake() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {/* Top Section */}
            <h1 className={styles.h1}>NFT Unity Access Pass</h1>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/founder`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/Founder.png" alt="drop" width={200} height={200} />
                    <h2 className={styles.selectBoxTitle}>Founder Pass</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>

                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/executive`)}
                >
                    {/* Mint a new NFT */}
                    <Image src="/Executive.png" alt="drop" width={200} height={200} />
                    <h2 className={styles.selectBoxTitle}>Executive Pass</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>
            </div>
            <div className={styles.nftBoxGrid}>
                <div
                    className={styles.optionSelectBox}
                    role="button"
                    onClick={() => router.push(`/community`)}
                >
                    {/* Staking an NFT */}
                    <Image src="/Community.png" alt="token" width={150} height={150} />
                    <h2 className={styles.selectBoxTitle}>Community Pass</h2>
                    <p className={styles.selectBoxDescription}>
                    </p>
                </div>


            </div>

        </div>
    );
};