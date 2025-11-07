import styles from "../styles/Form.module.css";
import About from "./About";
import List from "./List";

export default function Form({ data, setData }) {
  return (
    <div className={styles.wrapper}>
      <About data={data} setData={setData} />
      {Object.keys(data.iterable).map((val) => {
        return <List key={val} title={val} data={data} setData={setData} />;
      })}
    </div>
  );
}
