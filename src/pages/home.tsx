import { HOME_NAVIGATION_OPTIONS } from "../constants/navigation";
import IconButton from "../components/icon-button";
import Avatar from "../components/avatar";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Avatar imageUrl="/profile_picture.png" />
      <p className="text-4xl font-bold mb-2 text-neutral-700 mt-10">
        Osvaldo Colina
      </p>
      <p className="text-xl font-medium mb-6 text-neutral-600">
        Software Engineer
      </p>
      <div className="flex flex-row gap-x-4">
        {HOME_NAVIGATION_OPTIONS.map((navItem) => (
          <IconButton
            key={navItem.key}
            iconKey={navItem.key}
            target={navItem.target}
          />
        ))}
      </div>
    </div>
  );
}
