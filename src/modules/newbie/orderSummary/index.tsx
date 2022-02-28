import OS from "./components/osWrapper";

export default function OrderSummary() {
  return (
    <OS>
      <OS.Image />
      <OS.Content>
        <OS.Title />
        <OS.Text />
        <OS.Plans />
        <OS.Payment>Proceed to Payment</OS.Payment>
        <OS.Cancel variant="secondary">Cancel Order</OS.Cancel>
      </OS.Content>
    </OS>
  );
}
