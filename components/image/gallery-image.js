import { useButton } from "@react-aria/button";
import { OverlayContainer } from "@react-aria/overlays";
import { useOverlayTriggerState } from "@react-stately/overlays";
import Image from "next/image";
import T from "prop-types";
import { useRef } from "react";
import Modal from "../image-modal";
import calculateSizes from "./gallery-sizes";

export default function GalleryImage({
  alt,
  amount,
  blurDataURL,
  height,
  index,
  src,
  width,
}) {
  const sizes = calculateSizes({ amount, index });
  const state = useOverlayTriggerState({});
  const openButtonRef = useRef();
  const closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  return (
    <>
      <div {...openButtonProps} ref={openButtonRef}>
        <Image
          alt={alt}
          blurDataURL={blurDataURL}
          height={height}
          layout="responsive"
          placeholder={blurDataURL ? "blur" : undefined}
          sizes={sizes}
          src={src}
          width={width}
        />
      </div>
      {state.isOpen && (
        <OverlayContainer>
          <Modal
            isDismissable
            isOpen
            onClose={state.close}
            title="Enter your name"
          >
            <form style={{ display: "flex", flexDirection: "column" }}>
              <label>
                First Name: <input placeholder="John" />
              </label>
              <label>
                Last Name: <input placeholder="Smith" />
              </label>
              <button
                {...closeButtonProps}
                ref={closeButtonRef}
                style={{ marginTop: 10 }}
              >
                Submit
              </button>
            </form>
          </Modal>
        </OverlayContainer>
      )}
    </>
  );
}

GalleryImage.defaultProps = {
  blurDataURL: "",
};

GalleryImage.propTypes = {
  alt: T.string.isRequired,
  amount: T.number.isRequired,
  blurDataURL: T.string,
  height: T.number.isRequired,
  index: T.number.isRequired,
  src: T.string.isRequired,
  width: T.number.isRequired,
};
