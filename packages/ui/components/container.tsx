import React from 'react';

export const Container = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}): JSX.Element => {
  return <div className={className}>{children}</div>;
};
