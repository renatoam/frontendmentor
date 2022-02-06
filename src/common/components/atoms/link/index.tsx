import NextLink, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface ILinkProps extends LinkProps {
  children: ReactNode;
}

export default function Link({ href, children, ...props }: ILinkProps) {
  return (
    <NextLink href={href} {...props}>
      <a>{children}</a>
    </NextLink>
  );
}
