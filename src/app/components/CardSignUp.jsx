import Image from "next/image";
import styles from "../stylesheet/components/CardSignUp.module.css";

export default function CardSignUp() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="Ember logo"
        width={190}
        height={55}
        priority
      />
      <div className={styles.card_banner}>
        <div className={styles.card_banner__text}>
          <p className={styles.card_banner__title}>Earnings</p>
          <p className={styles.card_banner__subtitle}>Total Expense</p>
          <p className={styles.card_banner__price}>$9589.59</p>
          <p className={styles.card_banner__paragraph}>
            Profit is 86% More Than Last Month
          </p>
        </div>
        <div className={styles.card_banner__img}>
          <Image
            src="/Group 7.svg"
            alt="Ember logo"
            width={185}
            height={185}
            priority
          />
        </div>
      </div>
      <div className={styles.container__slider_info}>
        <h3>Speady, Easy and Fast</h3>
        <p className={styles.slider_info__text}>
          Overpay help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a $20 bonus when you receive qualifying direct deposits
        </p>
      </div>
    </div>
  );
}
