import c from "classnames";
import Link from "next/link";
import T from "prop-types";
import s from "./link-button.module.css";

export default function LinkButton({
  children,
  className,
  href,
  rel,
  symbol,
  title,
}) {
  /**
   * Allows for the unicode symbols rendered before the text.
   * See: https://unicode-table.com/en/#2740
   */

  const style = {
    "--symbol": `"${symbol}"`,
  };

  const linkClass = c(s.link, className);

  return (
    <Link href={href}>
      <a className={linkClass} rel={rel} style={style} title={title}>
        {children}
      </a>
    </Link>
  );
}

LinkButton.defaultProps = {
  className: "",
  rel: "",
};

LinkButton.propTypes = {
  children: T.node.isRequired,
  className: T.string,
  href: T.string.isRequired,
  rel: T.string,
  symbol: T.string.isRequired,
  title: T.string.isRequired,
};
