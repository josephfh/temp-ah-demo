export const Button = ({
  className,
  title,
}: {
  className: string;
  title: string;
}): JSX.Element => {
  return <span className={className}>{title}</span>;
};
