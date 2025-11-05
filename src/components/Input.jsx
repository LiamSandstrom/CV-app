import styles from "../styles/Input.module.css"

export default function Input({label = "(label)", type = "text", placeholder = label}){
    const id = crypto.randomUUID();

    return(
        <div className={styles.wrapper}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} />
        </div>
    )

}