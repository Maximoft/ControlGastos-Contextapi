import { formatCurrency } from "../helpers";

type AmountDisplayProps = {
  label: string;
  amount: number;
}


export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (

    <p className=" text-2xl text-sky-800 font-medium">
      {label}: {' '}
      <span className="font-semibold text-black">{ formatCurrency(amount) }</span>

    </p>
  )
}
