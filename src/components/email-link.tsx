type Props = {
  email: string;
  label?: string;
};

export default function EmailLink(props: Props) {
  const { email, label } = props;
  return (
    <a className="contact-text" href={`mailto:${email}`}>
      {label || email}
    </a>
  );
}
