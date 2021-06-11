/* eslint-disable react/jsx-props-no-spreading */

import { useToggleButton } from "@react-aria/button";
import T from "prop-types";
import { useRef } from "react";

export default function Toggle({ children, isPressed, onPress }) {
  const ref = useRef();
  const { buttonProps } = useToggleButton(
    {
      elementType: "div",
      onPress,
    },
    { isSelected: isPressed },
    ref
  );

  return (
    <div {...buttonProps} ref={ref}>
      {children}
    </div>
  );
}

Toggle.propTypes = {
  children: T.node.isRequired,
  isPressed: T.bool.isRequired,
  onPress: T.func.isRequired,
};
