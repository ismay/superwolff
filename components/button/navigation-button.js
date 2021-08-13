import c from "classnames";
import T from "prop-types";
import LinkButton from "./link-button";
import s from "./navigation-button.module.css";

export default function NavigationButton({
  children,
  href,
  isActive,
  symbol,
  title,
}) {
  const linkClass = c(s.link, {
    [s.active]: isActive,
  });

  return (
    <LinkButton className={linkClass} href={href} symbol={symbol} title={title}>
      {children}
    </LinkButton>
  );
}

NavigationButton.defaultProps = {
  isActive: false,
};

NavigationButton.propTypes = {
  children: T.node.isRequired,
  href: T.string.isRequired,
  isActive: T.bool,
  symbol: T.string.isRequired,
  title: T.string.isRequired,
};
