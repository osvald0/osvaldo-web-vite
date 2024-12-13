import type { EducationItem } from "../types/education";

type Props = {
  data: EducationItem;
};

export default function EducationBox(props: Props) {
  const { data } = props;
  const time = `${data.dateFrom} - ${data.dateTo || "Present"}`;

  return (
    <div className="mb-8">
      <p className="text-md text-neutral-700 mb-1">{data.degree}</p>
      <p className="text-xs text-neutral-500 mb-4">{time}</p>
      {data.description.map((descriptionItem) => (
        <p key={data.institution}>{descriptionItem}</p>
      ))}
    </div>
  );
}
