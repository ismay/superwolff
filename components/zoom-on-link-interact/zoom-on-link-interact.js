import T from "prop-types";
import s from "./zoom-on-link-interact.module.css";

export default function ZoomOnLinkInteract({ children }) {
  return (
    <div className={s.container}>
      <div className={s.zoom}>{children}</div>
    </div>
  );
}

ZoomOnLinkInteract.propTypes = {
  children: T.node.isRequired,
};
