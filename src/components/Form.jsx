import styles from "../styles/Form.module.css";
import About from "./About";

export default function Form() {
  return (
    <div className={styles.wrapper}>
      <About />
      <About />
      <About />
    </div>
  );
}
