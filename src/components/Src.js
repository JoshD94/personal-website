import React from "react";

function Src(props) {
  return (
    <div className="src">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z"
          fill="#C5C5C5"
        />
      </svg>
      <div className="src-text">{props.text}</div>
    </div>
  );
}
export default Src;
