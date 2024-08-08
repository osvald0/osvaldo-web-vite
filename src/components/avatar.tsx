type Props = {
  imageUrl: string;
  size?: string;
};

export default function Avatar(props: Props) {
  const { imageUrl } = props;

  return (
    <div className="flex flex-row w-60">
      <img className="rounded-full" src={imageUrl} alt="profile" />
    </div>
  );
}
