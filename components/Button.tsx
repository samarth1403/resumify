import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

const Button = ({
  className,
  href,
  children,
  onClick,
}: {
  className?: string;
  href?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const classes = `button relative inline-flex items-center justify-center ${className}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <Link href={href!} className={classes}>
      <span className={spanClasses}>{children}</span>
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
