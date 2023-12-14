import React, { useRef, useState } from "react";
//import arrowUp from "../assets/arrowUp.svg";
//import arrowDown from "../assets/arrowDown.svg";
import "../style/Collapsible.css";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef();
  if (contentRef.current);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapsible">
      <button onClick={toggle}>{props.label}</button>

      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
