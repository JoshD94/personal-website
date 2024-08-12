import React from "react";
import RightChevron from "./RightChevron";
import Goto from "./pages/Goto";
import Trim from "./pages/Trim";

function Info(props) {
  const data = {
    "Data Science Intern (KYC Identity Team)": {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Data Science Intern (KYC Identity Team)
          <RightChevron /> GoTo Company
        </div>
      ),
      page: <Goto id="content" />,
    },
    "Research Analyst Intern": {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Research Analyst Intern
          <RightChevron /> Trimegah Asset Management
        </div>
      ),
      page: <Trim id="content" />,
    },
  };
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  function returnView(page) {
    document.getElementById("info-div-body").scrollBy(0, -10000);
    return page;
  }
  return (
    <div className="info-div" id="info-div">
      <div className="info-div-header">
        {props.title !== "" ? <div>{data[props.title].path}</div> : null}
      </div>
      <div className="info-div-body" id="info-div-body">
        <div className="number-column">
          {numbers.map((n) => (
            <div className="number">{n}</div>
          ))}
        </div>
        {props.title !== "" ? returnView(data[props.title].page) : null}
      </div>
    </div>
  );
}

export default Info;
