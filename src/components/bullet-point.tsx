import { BsDot } from "react-icons/bs";

type Props = {
  text: string;
}

export default function BulletPoint(props: Props) {
  const { text } = props
  return (
    <div className="flex flex-row mb-2">
      <div className="-ml-1">
        <BsDot className="text-xl" />
      </div>
      <p className="">{text}</p>
    </div>
  )
}
