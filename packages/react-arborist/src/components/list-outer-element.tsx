import { forwardRef } from "react";
import { useTreeApi } from "../context";
import { DefaultListOuterElement } from "./default-list-outer-element";

export const ListOuterElement = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function ListOuter(props, ref) {
  const tree = useTreeApi();
  const OuterElementType = tree.props.renderListOuterElement || DefaultListOuterElement;

  return (
    <OuterElementType
      {...props}
      ref={ref}
    />
  );
});
