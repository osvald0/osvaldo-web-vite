import ExpandCollapseButton from "./expand-collapse-button";
import { Fragment, useMemo, useState } from "react";

type Props = {
  maxItems: number;
  texts: Array<string>;
};

export default function CollapsableCommaList(props: Props) {
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
      {filteredTexts.map((text, index) => (
        <Fragment key={text}>
          <p className="">{text}</p>
          {index !== filteredTexts.length - 1 ? (
            <p className="mr-1">,</p>
          ) : (
            index === texts.length - 1 && texts.length <= maxItems && <p>.</p>
          )}
        </Fragment>
      ))}
      {maxItems < texts.length && (
        <ExpandCollapseButton
          className="ml-2"
          show={isShowAllTechOpen}
          onPress={handleOnPressShowAllTech}
        />
      )}
    </div>
  );
}
