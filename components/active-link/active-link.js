import Link from "next/link";
import { useRouter } from "next/router";
import T from "prop-types";
import React, { Children } from "react";

export default function ActiveLink({ activeClassName, children, href }) {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const hasHrefMatch = asPath === href;

  console.log({ asPath, hasHrefMatch, href });

  const className = hasHrefMatch
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className,
      })}
    </Link>
  );
}

ActiveLink.propTypes = {
  activeClassName: T.string.isRequired,
  children: T.node.isRequired,
  href: T.string.isRequired,
};
