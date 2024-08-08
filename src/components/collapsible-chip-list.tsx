import ExpandCollapseButton from "./expand-collapse-button";
import { useMemo, useState } from "react";
import Chip from "./chip";

type Props = {
  maxItems: number;
  texts: Array<string>;
};

export default function CollapsableChipList(props: Props) {
  const { texts, maxItems } = props;
  const [isShowAllTechOpen, setIShowAllTechOpen] = useState(false);

  const filteredTexts = useMemo(() => {
    return isShowAllTechOpen ? texts : texts.slice(0, maxItems);
  }, [texts, isShowAllTechOpen, maxItems]);

  function handleOnPressShowAllTech() {
    setIShowAllTechOpen(!isShowAllTechOpen);
  }

  return (
    <div className="flex flex-row flex-wrap items-center">
      {filteredTexts.map((text) => (
        <Chip key={text} text={text} />
      ))}
      {maxItems < texts.length && (
        <ExpandCollapseButton
          show={isShowAllTechOpen}
          onPress={handleOnPressShowAllTech}
        />
      )}
    </div>
  );
}
