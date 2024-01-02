import { forwardRef } from "react";
import { useTreeApi } from "../context";
import { treeBlur } from "../state/focus-slice";
import { Cursor } from "./cursor";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";


export const ListOuterElement = forwardRef(function Outer(
  props: React.HTMLProps<HTMLDivElement>,
  ref
) {
  const { children, onScroll, ...rest } = props;
  const tree = useTreeApi();

  console.log('@@@ rest', rest);
  return (
    <>
      {/* <div
    // @ts-ignore-next-line
      ref={ref}
      {...rest}
        onClick={(e) => {
          if (e.currentTarget === e.target) tree.deselectAll();
        }}
      >
        <DropContainer />
        {children}
      </div> */}
      <ScrollAreaPrimitive.Root
        ref={ref as any}
        type="always"
        className="ScrollAreaRoot"
      >
        <ScrollAreaPrimitive.Viewport
          className="ScrollAreaViewport"
          onScroll={onScroll}
          style={rest.style}
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
        <ScrollAreaPrimitive.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
          <ScrollAreaPrimitive.Thumb className="ScrollAreaThumb" />
        </ScrollAreaPrimitive.Scrollbar>
        <ScrollAreaPrimitive.Corner className="ScrollAreaCorner" />
      </ScrollAreaPrimitive.Root>
    </>
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
