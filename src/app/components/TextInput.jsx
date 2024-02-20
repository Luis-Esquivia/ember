"use client";
import React, { useState } from "react";
import styles from "../stylesheet/components/TextInput.module.css";

export default function TextInput({
  srOnly,
  id,
  text,
  type = "text",
  minLength,
  register,
  errors,
  ...props
}) {
  const _type = type === "password" ? "password" : "text";
  const hasError = errors && errors[id]?.type === "required";

  return (
    <>
      <label htmlFor={id} className={srOnly ? styles["sr-only"] : ""}>
        {text}
      </label>
      <div className={styles.inputContainer}>
        <input
          id={id}
          type={_type}
          {...register}
          {...props}
          className={`${styles.input} ${hasError ? styles.error : ""}`}
        />
        {hasError && (
          <span className={styles.alert} role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </svg>
            {`${text} is required`}
          </span>
        )}
      </div>
    </>
  );
}
