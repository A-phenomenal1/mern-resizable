import React from "react";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  paddingTop: "2em",
  justifyContent: "center",
  alignItems: "center",
  border: "solid 5px #fff",
  boxShadow: "inset 0 0 30px #000000",
  borderRadius: "15px",
  background: "#F4FFE8",
  overflow: "hidden",
};

function ResizableComp(props) {
  return (
    <div>
      <Resizable
        style={style}
        defaultSize={{
          width: props.width,
          height: props.height,
          resizeRatio: 2,
          maxWidth: "300px",
          maxHeight: "400px",
        }}
      >
        <div className="heading">{props.children}</div>
      </Resizable>
    </div>
  );
}

export default ResizableComp;
