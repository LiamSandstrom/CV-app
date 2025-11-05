import Input from "./input";

export default function About() {
  return (
    <div className="section">
      <h2>Personal details</h2>
      <Input label="Name" />
      <Input label="Email" type="email" />
      <Input label="Phone number" type="tel" />
      <Input label="Address" />
    </div>
  );
}
