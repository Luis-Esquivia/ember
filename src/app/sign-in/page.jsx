"use client";
import Image from "next/image";
import styles from "../stylesheet/signIn.module.css";
import SocialLoging from "../components/SocialLogin";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";

export default function signIn() {
  const router = usePathname();
  const isSignUpPage = router === "/sign-up";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => props.updateAction(data);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          src="/Frame.svg"
          alt="Ember logo"
          width={135}
          height={54}
          priority
        />
        <h2>Sign In to Ember</h2>
        <p className={styles.subtitle}>Send, spend and save smarter</p>
        <SocialLoging />
        <div className={styles.login_email}>
          <hr className={styles.login_email__line} />
          <span className={styles.login_email__text}>or with e-main</span>
          <hr className={styles.login_email__line} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={isSignUpPage ? styles.form : styles["form--sign-in"]}
        >
          <div className={styles.input__container}>
            <TextInput
              id="email"
              name="email"
              placeholder="olivia@untitledui.com"
              text="Email"
              srOnly={true}
              register={register("email", { required: true })}
              errors={errors}
            />
          </div>
          <div className={styles.input__container}>
            <TextInput
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              text="Password"
              srOnly={true}
              register={register("password", { required: true, maxLength: 20 })}
              errors={errors}
            />
          </div>
          <div className={styles.items}>
            <label className={styles.items__remember}>
              <input type="radio" className={styles.items__remember_checkbox} />
              Remember me
            </label>
            <a href="/" className={styles.items__forgot_link}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className={styles.button}>
            Sing In
          </button>
        </form>
        <div className={`${styles.terms__container}`}>
          <span className={styles.terms__span}>
            Don’t have a account? &nbsp;
          </span>
          <a href="/sign-up" className={styles.terms__link}>
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
