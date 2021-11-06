import React from "react";
import Image from "next/image";
import styles from "./Currency.module.css";
import nok from "../../public/nok.png";
function Currency() {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <Image src={nok} alt="Picture of the author" width={50} height={1} />
        <div>
          <p className={styles.shortCurrency}>USD</p>
          <p className={styles.longCurrency}>Amerikan Doları</p>
        </div>
      </div>
      <div className={styles.inner}>
        <div>
          <p className={styles.buy}>ALIŞ</p>
          <p className={styles.price}>5.4512</p>
        </div>
        <div>
          <p className={styles.buy}>SATIŞ</p>
          <p className={styles.price}>5.4512</p>
        </div>
      </div>
    </div>
  );
}

export default Currency;
