import React from "react";

function Nosrc(props) {
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
          d="M8.02388 5.92809L3.66657 10.2854L3.04785 9.66668L7.71452 5.00001L8.33324 5.00001L12.9999 9.66668L12.3812 10.2854L8.02388 5.92809Z"
          fill="#C5C5C5"
        />
      </svg>
      <div className="src-text">{props.text}</div>
    </div>
  );
}
export default Nosrc;
