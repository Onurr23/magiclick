import React from "react";
import Image from "next/image";
import styles from "./Currency.module.css";
import nok from "../../public/nok.png";
import usd from "../../public/usd.png";
import dkk from "../../public/dkk.png";
import gbp from "../../public/gbp.png";
import eur from "../../public/eur.png";
import jpy from "../../public/yen.png";
function Currency({ value }) {
  console.log(value);
  const renderCurrencyFullName = () => {
    if (value[0] === "USD") {
      return <p className={styles.longCurrency}>Amerikan Doları</p>;
    } else if (value[0] === "NOK") {
      return <p className={styles.longCurrency}>Norveç Kronu</p>;
    } else if (value[0] === "DKK") {
      return <p className={styles.longCurrency}>Danimarka Kronu</p>;
    } else if (value[0] === "JPY") {
      return <p className={styles.longCurrency}>Japon Yeni</p>;
    } else if (value[0] === "GBP") {
      return <p className={styles.longCurrency}>İngiliz Sterlini</p>;
    } else if (value[0] === "EUR") {
      return <p className={styles.longCurrency}>Avrupa Para Birimi</p>;
    }
  };

  const renderFlag = () => {
    if (value[0] === "USD") {
      return usd;
    } else if (value[0] === "NOK") {
      return nok;
    } else if (value[0] === "DKK") {
      return dkk;
    } else if (value[0] === "JPY") {
      return jpy;
    } else if (value[0] === "GBP") {
      return gbp;
    } else if (value[0] === "EUR") {
      return eur;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <Image
          src={renderFlag()}
          alt="Picture of the author"
          width={50}
          height={1}
        />
        <div>
          <p className={styles.shortCurrency}>{value[0]}</p>
          {renderCurrencyFullName()}
        </div>
      </div>
      <div className={styles.inner}>
        <div>
          <p className={styles.buy}>ALIŞ</p>
          <p className={styles.price}>{value[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default Currency;
