import { useRef } from 'react'
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";
import {
  useModal,
  useOverlay,
  usePreventScroll,
} from "@react-aria/overlays";

export default function Modal(props) {
  const { children, title } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef();
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      style={{
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 100,
      }}
      {...underlayProps}
    >
      <FocusScope autoFocus contain restoreFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={{
            background: "white",
            color: "black",
            padding: 30,
          }}
        >
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
          {children}
        </div>
      </FocusScope>
    </div>
  );
}
