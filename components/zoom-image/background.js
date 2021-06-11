/* eslint-disable react/jsx-props-no-spreading */

import { useButton } from "@react-aria/button";
import useLayoutEffect from "@react-hook/passive-layout-effect";
import usePrevious from "@react-hook/previous";
import c from "classnames";
import T from "prop-types";
import { useRef, useState } from "react";
import s from "./background.module.css";

export default function Background({ onPress, zoomed }) {
  const ref = useRef();
  const { buttonProps } = useButton(
    { elementType: "div", isDisabled: !zoomed, onPress },
    ref
  );
  const prevZoomed = usePrevious(zoomed);
  const [isUnzooming, setIsUnzooming] = useState(false);

  useLayoutEffect(() => {
    if (prevZoomed && !zoomed) {
      setIsUnzooming(true);
    }
  }, [prevZoomed, zoomed]);

  const handleTransitionEnd = () => {
    if (!zoomed) {
      setIsUnzooming(false);
    }
  };

  const backgroundClass = c(s.unzoomed, {
    [s.unzooming]: isUnzooming,
    [s.zoomed]: zoomed,
  });

  return (
    <div
      {...buttonProps}
      className={backgroundClass}
      onTransitionEnd={handleTransitionEnd}
    />
  );
}

Background.propTypes = {
  onPress: T.func.isRequired,
  zoomed: T.bool.isRequired,
};
