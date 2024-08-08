import CollapsableCommaList from "./collapsible-comma-list";
import type { SkillItem } from "../types/skill";

type Props = {
  maxItems: number;
  data: SkillItem;
};

export default function SkillRow(props: Props) {
  const { data, maxItems } = props;

  return (
    <div className="flex flex-row mb-4">
      <p className="font-medium mr-2 text-lg -mt-[3px]">{data.level}:</p>
      <div className="flex flex-row items-start flex-wrap">
        <CollapsableCommaList maxItems={maxItems} texts={data.skills} />
      </div>
    </div>
  );
}
