"use client";
import Image from "next/image";
import styles from "../stylesheet/signup.module.css";
import SocialLoging from "../components/SocialLogin";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";

export default function signUp() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => props.updateAction(data)

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
        <h2>Sign up for an account.</h2>
        <p className={styles.subtitle}>Send, spend and save smarter</p>
        <SocialLoging />
        <div className={styles.login_email}>    
          <hr className={styles.login_email__line}/>
          <span className={styles.login_email__text}>or with e-main</span>     
          <hr className={styles.login_email__line}/> 
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputs__responsive}>
            <div className={styles.input__container}>
              <TextInput
                id="first_name"
                name="first_name"
                placeholder="First name"
                text="First name"
                srOnly={true}
                register={register("first_name", {
                  required: true,
                  maxLength: 20,
                })}
                errors={errors}
              />
              
            </div>
            <div className={styles.input__container}>
              <TextInput
                id="last_name"
                name="last_name"
                placeholder="Last name"
                text="Last name"
                srOnly={true}
                minLength={6}
                register={register("last_name", {
                  required: true,
                  maxLength: 20,
                })}
                errors={errors}
              />
            </div>
          </div>
          <div className={styles.input__container}>
            <TextInput
              id="email"
              name="email"
              placeholder="Email"
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
          <div
            className={`${styles.terms__container} ${styles["terms__container--responsive"]}`}
          >
            <p className={styles.terms}>
              <span className={styles.terms__span}>
                By creating an account, you agreeing to our
              </span>
              Privacy Policy, and Electronics Communication Policy.
            </p>
          </div>

          <button type="submit" className={styles.button}>
            Sing Up
          </button>
        </form>
        <div className={`${styles.terms__container}`}>
          <p className={styles.terms}>
            <span className={styles.terms__span}>
              By creating an account, you agreeing to our &nbsp; 
            </span>
             Privacy Policy, and Electronics Communication Policy.
          </p>
        </div>
      </div>
    </main>
  );
}