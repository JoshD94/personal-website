import React from "react";
import RightChevron from "./RightChevron";
import Goto from "./pages/Goto";
import Trim from "./pages/Trim";
import Basketball from "./pages/Basketball";
import Tennis from "./pages/Tennis";
import Piano from "./pages/Piano";
import Review from "./pages/Review";
import Language from "./pages/Language";

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
    Basketball: {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Hobbies
          <RightChevron />
          Basketball
        </div>
      ),
      page: <Basketball id="content" />,
    },
    Tennis: {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Hobbies
          <RightChevron />
          Tennis
        </div>
      ),
      page: <Tennis id="content" />,
    },
    Piano: {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Hobbies
          <RightChevron />
          Piano
        </div>
      ),
      page: <Piano id="content" />,
    },
    "Google Reviewing": {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Hobbies
          <RightChevron />
          Google Reviewing
        </div>
      ),
      page: <Review id="content" />,
    },
    "Learning Languages": {
      path: (
        <div className="src-bar">
          src
          <RightChevron />
          Hobbies
          <RightChevron />
          Learning Languages
        </div>
      ),
      page: <Language id="content" />,
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
