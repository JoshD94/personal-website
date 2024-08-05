import React from "react";

function Level({ level }) {
  const colors = {
    1: "#922929",
    2: "#E34F4F",
    3: "#DC894D",
    4: "#D0D929",
    5: "#4AE884",
  };
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <div
        className="star"
        style={{ background: i < level ? colors[i + 1] : "#FFFFFF00" }}
      ></div>
    );
  }
  return <div className="star-div">{stars.map((star) => star)}</div>;
}

export default Level;
