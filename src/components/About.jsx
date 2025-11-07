import Input from "./Input.jsx";
export default function About({ data, setData }) {
  return (
    <div className="section">
      <h2>Personal details</h2>
      {Object.keys(data.personalDetails).map((item) => {
        return <Input key={item} label={item} data={data} setData={setData} />;
      })}
    </div>
  );
}
