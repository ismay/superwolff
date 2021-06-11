import T from "prop-types";
import React from "react";
import s from "./base.module.css";

const Base = React.forwardRef(({ children }, ref) => (
  <div ref={ref} className={s.base}>
    {children}
  </div>
));

Base.propTypes = {
  children: T.node.isRequired,
};

export default Base;
