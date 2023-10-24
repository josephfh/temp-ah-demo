import clsx from 'clsx';
import { Logo } from './logo';

export const HeaderLogo = ({
  className,
  logoClassName,
  title,
  useH1 = false,
}: {
  className: string;
  logoClassName: string;
  title: string;
  useH1?: boolean;
}): JSX.Element => {
  const TitleTag = useH1 ? 'h1' : 'div';
  return (
    <span className={clsx(className)}>
      <Logo className={logoClassName} />
      <TitleTag>{title}</TitleTag>
    </span>
  );
};
