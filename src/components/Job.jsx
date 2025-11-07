import { useState } from "react";
import styles from "../styles/Input.module.css";

export default function Job({
  label = "(label)",
  title,
  index,
  placeholder = label,
  setData,
  data,
}) {
  const [id] = useState(crypto.randomUUID());

  function inputSetData(e) {
    const value = e.target.value;

    setData({
      ...data,
      iterable: {
        ...data.iterable,
        [title]: data.iterable[title].map((item, i) =>
          i === index ? { ...item, [label]: value } : item
        ),
      },
    });
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        value={data.iterable?.[title]?.[index]?.[label] ?? ""}
        onChange={inputSetData}
        id={id}
        type={label.includes("Year") ? "date" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
}
