import styles from "../styles/Preview.module.css";
import addressIcon from "../assets/address.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import html2pdf from "html2pdf.js";

export default function Preview({ data }) {
  function savePdf() {
    const element = document.querySelector(".pdf");
    html2pdf()
      .set({
        margin: 0,
        filename: "document.pdf",
        jsPDF: {
          unit: "px",
          format: [320, 520],
          orientation: "portrait",
        },
        html2canvas: { scale: 2 },
      })
      .from(element)
      .save();
  }

  return (
    <div>
      <div className={styles.wrapper + " pdf"}>
        <div className={styles.header}>
          <h2>{data.personalDetails.name}</h2>
          <div className={styles.details}>
            {data.personalDetails.address != "" ? (
              <div className={styles.row}>
                <p>{data.personalDetails.address}</p>
                <img src={addressIcon} alt="address icon" />
              </div>
            ) : null}
            {data.personalDetails.email != "" ? (
              <div className={styles.row}>
                <p>{data.personalDetails.email}</p>
                <img src={emailIcon} alt="email icon" />
              </div>
            ) : null}
            {data.personalDetails.phoneNumber != "" ? (
              <div className={styles.row}>
                <p>{data.personalDetails.phoneNumber}</p>
                <img src={phoneIcon} alt="phone icon" />
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.list}>
          {data.iterable.job.length > 0 ? <h3>Jobs</h3> : null}
          {Object.entries(data.iterable.job).map(
            ([i, job]) => (
              console.log(i),
              (
                <div className="job" key={job.id}>
                  <h4>{job.title}</h4>
                  <p>
                    {job.startYear} - {job.endYear}
                  </p>
                  <p>{job.info}</p>
                </div>
              )
            )
          )}
        </div>
        <div className={styles.list}>
          {data.iterable.education.length > 0 ? <h3>Education</h3> : null}
          {Object.entries(data.iterable.education).map(
            ([i, edu]) => (
              console.log(i),
              (
                <div className="edu" key={edu.id}>
                  <h4>{edu.title}</h4>
                  <p>
                    {edu.startYear} - {edu.endYear}
                  </p>
                  <p>{edu.info}</p>
                </div>
              )
            )
          )}
        </div>
      </div>
      <button onClick={savePdf} className={styles.save}>
        Save
      </button>
    </div>
  );
}
