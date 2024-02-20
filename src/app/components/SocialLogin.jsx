import Image from "next/image";
import styles from "../stylesheet/components/SocialLogin.module.css";

export default function SocialLoging() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <Image
          src="/Google.svg"
          alt="Ember logo"
          width={28}
          height={28}
          priority
        />
        Sign Up with Google
      </button>
      <button className={styles.button}>
        <Image
          src="/Apple.svg"
          alt="Ember logo"
          width={28}
          height={28}
          priority
        />
        Sign Up with Apple
      </button>
    </div>
  );
}
