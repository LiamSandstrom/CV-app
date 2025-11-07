import styles from "../styles/Form.module.css";
import About from "./About.jsx";
import List from "./List.jsx";

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
