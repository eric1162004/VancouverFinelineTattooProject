import Link from "next/link";
import Button from "./Button";

const LinkButton = ({ children, href, className }) => {
  return (
    <Link href={href} passHref>
      <Button className={className}>{children}</Button>
    </Link>
  );
};

export default LinkButton;
