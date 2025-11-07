import styles from "../styles/List.module.css";
import Job from "./Job";

export default function List({ title, maxItems = 3, data, setData }) {
  function addItem() {
    if (data.iterable[title].length === maxItems) return;
    setData({
      ...data,
      iterable: {
        ...data.iterable,
        [title]: [
          ...data.iterable[title],
          {
            id: crypto.randomUUID(),
            title: "",
            startYear: "",
            endYear: "",
            info: "",
          },
        ],
      },
    });
  }

  function removeItem(index) {
    setData({
      ...data,
      iterable: {
        ...data.iterable,
        [title]: data.iterable[title].filter((_, i) => i !== index),
      },
    });
  }

  return (
    <div className={styles.wrapper + " section"}>
      <div className={styles.row}>
        <h2>{title}</h2>
        <button
          disabled={data.iterable[title].length === maxItems ? true : false}
          onClick={addItem}
        >
          +
        </button>
      </div>
      {data.iterable[title].length > 0 ? (
        <div className={styles.content}>
          {data.iterable[title].map((val, index) => (
            <div className={styles.entry} key={val.id}>
              {Object.entries(val).map(([key]) =>
                key !== "id" ? (
                  <Job
                    key={key}
                    label={key}
                    title={title}
                    index={index}
                    data={data}
                    setData={setData}
                  />
                ) : null
              )}
              <button onClick={() => removeItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
