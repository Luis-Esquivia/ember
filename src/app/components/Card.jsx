'use client'
import Image from "next/image";
import styles from "../stylesheet/components/Card.module.css";
import { usePathname } from 'next/navigation'

export default function CardSignUp() {
  const router = usePathname();
  const isSignUpPage = router === '/sign-up';
  const sliderInfoTitle = isSignUpPage ? 'Speady, Easy and Fast' : 'Get Better with Money';
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
      {isSignUpPage ? (
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
      ) : (
        <div className={styles.card_banner__sign_in}>
         <Image
          src="/revenue.svg"
          alt="Ember logo"
          width={370}
          height={285}
        />   
        </div>
      )}
      <div className={`${styles.container__slider_info} ${isSignUpPage ? styles['container__slider_info--sign-up'] : styles['container__slider_info--sign-in']}`}>
        <h3>{sliderInfoTitle}</h3>
        <p className={styles.slider_info__text}>
          Overpay help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a $20 bonus when you receive qualifying direct deposits
        </p>
      </div>
    </div>
  );
}
