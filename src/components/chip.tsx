type Props = {
  text: string;
};

export default function Chip(props: Props) {
  const { text } = props;

  return (
    <div
      key={text}
      className="flex flex-row items-center justify-center m-1 px-3 py-0.5 rounded-xl bg-gray-200"
    >
      <p className="text-sm">{text}</p>
    </div>
  );
}
