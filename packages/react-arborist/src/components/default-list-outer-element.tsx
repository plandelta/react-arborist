import { forwardRef } from "react";
import { useTreeApi } from "../context";
import { Cursor } from "./cursor";

export const DefaultListOuterElement = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function DefaultListOuter(props, ref) {
  const { children, ...rest } = props;
  const tree = useTreeApi();

  return (
    <div
      ref={ref}
      {...rest}
      onClick={(e) => {
        if (e.currentTarget === e.target) tree.deselectAll();
      }}
    >
      <DropContainer />
      {children}
    </div>
  );
});

const DropContainer = () => {
  const tree = useTreeApi();
  return (
    <div
      style={{
        height: tree.visibleNodes.length * tree.rowHeight,
        width: "100%",
        position: "absolute",
        left: "0",
        right: "0",
      }}
    >
      <Cursor />
    </div>
  );
};
