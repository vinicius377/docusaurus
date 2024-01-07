import { useState } from "react";
import styles from "./styles.module.css";

export default function Radio({ title, name, onChecked }) {

    return (
    <label className={styles.label}>
      <input
        name={name}
        onChange={(e) => onChecked(title)}
        type="radio"
        className={styles.checkbox}
      />
      <span className={styles.span}>{title || ""}</span>
    </label>
  );
}
