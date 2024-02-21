import Image from "next/image";
import styles from "../stylesheet/components/SocialLogin.module.css";
import { usePathname } from 'next/navigation'

export default function SocialLoging() {
  const router = usePathname();
  const isSignUpPage = router === '/sign-up';
  const buttonText = isSignUpPage ? 'Sign Up' : 'Sign In';

  return (
    <div className={`${styles.container} ${isSignUpPage ? styles['container--sign-up'] : styles['container--sign-in']}`}>
      <button className={styles.button}>
        <Image
          src="/Google.svg"
          alt="Ember logo"
          width={28}
          height={28}
          priority
        />
        {buttonText} with Google
      </button>
      <button className={styles.button}>
        <Image
          src="/Apple.svg"
          alt="Ember logo"
          width={28}
          height={28}
          priority
        />
        {buttonText} with Appel
      </button>
    </div>
  );
}
