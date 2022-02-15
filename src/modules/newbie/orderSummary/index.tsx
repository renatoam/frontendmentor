import OS from "./components/osWrapper";

export default function OrderSummary() {
  return (
    <OS>
      <OS.Image />
      <OS.Title />
      <OS.Text />
      <OS.Plans />
      <OS.Payment />
      <OS.Cancel />
    </OS>
  );
}
