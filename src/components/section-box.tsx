type Props = {
  title: string;
};

export default function SectionBox(props: Props) {
  const { title } = props;

  return (
    <div className="flex flex-row items-center mb-5">
      <p className="text-2xl font-bold mr-1">{title}</p>
      <div className="bg-neutral-700 h-[2px] w-full mt-3" />
    </div>
  );
}
