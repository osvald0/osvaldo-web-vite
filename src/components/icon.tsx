import { MdOutlineLaptopChromebook } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { BsQuestion } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

type Props = {
  iconKey: string;
};

const IconsMap = new Map([
  ["github", BsGithub],
  ["about", SiAboutdotme],
  ["linkedIn", FaLinkedinIn],
  ["blog", MdOutlineLaptopChromebook],
  ["resume", GrDocumentUser],
]);

export default function Icon(props: Props) {
  const { iconKey } = props;
  const CurrentIcon = IconsMap.get(iconKey) || BsQuestion;
  return <CurrentIcon size={24} />;
}
