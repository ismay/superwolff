import T from "prop-types";
import s from "./footer-button.module.css";
import LinkButton from "./link-button";

export default function FooterButton({ children, href, rel, symbol, title }) {
  return (
    <LinkButton
      className={s.link}
      href={href}
      rel={rel}
      symbol={symbol}
      title={title}
    >
      {children}
    </LinkButton>
  );
}

FooterButton.defaultProps = {
  rel: "",
};

FooterButton.propTypes = {
  children: T.node.isRequired,
  href: T.string.isRequired,
  rel: T.string,
  symbol: T.string.isRequired,
  title: T.string.isRequired,
};
