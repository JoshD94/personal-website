import React from "react";
import File from "./File";
import Item from "./Item";
import Src from "./Src";
import Nosrc from "./Nosrc";

function Header({ openFileFunction }) {
  const projects = [
    {
      title: "Edukasih",
      description: "A book donation mobile app prototype",
      filetype: "edukasih",
    },
    {
      title: "SWA UniApp",
      description: "A college application tracker",
      filetype: "swa",
    },
    {
      title: "BRBcounter",
      description: "A mobile app to calculate your Big Red Bucks",
      filetype: "brb",
    },
    {
      title: "Spotipick",
      description: "A spotify recommender website built with react  ",
      filetype: "spotify",
    },
  ];
  const internships = [
    {
      title: "Data Science Intern (KYC Identity Team)",
      description: "GoTo Company",
      filetype: "goto",
    },
    {
      title: "Research Analyst Intern",
      description: "Trimegah Asset Management",
      filetype: "trim",
    },
  ];
  const programming_languages = [
    { name: "Python", level: 5 },
    { name: "Java", level: 4 },
    { name: "JavaScript", level: 5 },
    { name: "CSS", level: 4 },
    { name: "HTML", level: 5 },
    { name: "SQL", level: 3 },
    { name: "PHP", level: 2 },
    { name: "Swift", level: 3 },
    { name: "Kotlin", level: 2 },
  ];
  const activities = [
    {
      title: "Cornell Computer Reuse Association",
      description: "Fixing computers for donation",
      filetype: "ccra",
    },
    {
      title: "Indonesian Association at Cornell",
      description: "Organizing social and cultural events",
      filetype: "iac",
    },
    {
      title: "TEDxYouth@SWA (Speaker/Coach)",
      description: "TedTalk on emerging technologies",
      filetype: "tedx",
    },
  ];
  const hobbies = [
    {
      title: "Basketball",
      description: "Pickup games with friends",
      filetype: "basketball",
    },
    {
      title: "Tennis",
      description: "My family sport",
      filetype: "tennis",
    },
    {
      title: "Piano",
      description: "Covering my favorite songs",
      filetype: "piano",
    },
    {
      title: "Google Reviewing",
      description: "A level 6 local guide in my free time",
      filetype: "review",
    },
    {
      title: "Learning Languages",
      description: "Japanese and Korean!",
      filetype: "language",
    },
  ];

  const [showProjects, setShowProjects] = React.useState(true);
  const [showInternships, setShowInternships] = React.useState(true);
  const [showLanguages, setShowLanguages] = React.useState(true);
  const [showActivities, setShowActivities] = React.useState(true);
  const [showHobbies, setShowHobbies] = React.useState(true);

  function sendToApp(file) {
    openFileFunction(file);
  }

  return (
    <div className="header" id="header">
      <div className="title">Hi! I'm Joshua Dirga</div>
      <div className="subtitle">
        A software engineer eager to learn and build useful solutions. Currently
        a sophomore at Cornell University.
      </div>

      <div className="dropdown-div">
        <div
          className="resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1kmCDxLorwSFpaZdFwrv-PmkSRMAXD9MU/view"
            )
          }
        >
          {<p className="braces">{"{"}&nbsp;</p>}View My Full Resume
          {<p className="braces">&nbsp;{"}"}</p>}
        </div>

        <div className="dropdown-div">
          <div onClickCapture={() => setShowInternships(!showInternships)}>
            {showInternships ? (
              <Src text={"internships"} />
            ) : (
              <Nosrc text={"internships"} />
            )}
          </div>
          {showInternships ? (
            <div className="files">
              <div className="file-div">
                {internships.map((f) => (
                  <div onClick={() => sendToApp(f.title)}>
                    <File
                      key={f.title}
                      text={f.title}
                      description={f.description}
                      filetype={f.filetype}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {
        //TODO: add hobbies page and links to linked in and github at the bottom and contacts
        //TODO: add details afterwards
        //TODO: add animation to dropdown
        //TODO: add bio like picture, age, etc
      }
      <div className="dropdown-div">
        <div onClickCapture={() => setShowProjects(!showProjects)}>
          {showProjects ? (
            <Src text={"projects"} />
          ) : (
            <Nosrc text={"projects"} />
          )}
        </div>
        {showProjects ? (
          <div className="files">
            <div className="file-div">
              {projects.map((f) => (
                <File
                  key={f.title}
                  text={f.title}
                  description={f.description}
                  filetype={f.filetype}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div className="dropdown-div">
        <div onClickCapture={() => setShowLanguages(!showLanguages)}>
          {showLanguages ? (
            <Src text={"technical-skills"} />
          ) : (
            <Nosrc text={"technical-skills"} />
          )}
        </div>
        {showLanguages ? (
          <div className="files">
            <div className="file-div">
              {programming_languages.map((f) => (
                <Item key={f.title} name={f.name} level={f.level} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="dropdown-div">
        <div onClickCapture={() => setShowActivities(!showActivities)}>
          {showActivities ? (
            <Src text={"activities"} />
          ) : (
            <Nosrc text={"activities"} />
          )}
        </div>
        {showActivities ? (
          <div className="files">
            <div className="file-div">
              {activities.map((f) => (
                <File
                  key={f.title}
                  text={f.title}
                  description={f.description}
                  filetype={f.filetype}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="dropdown-div">
        <div onClickCapture={() => setShowHobbies(!showHobbies)}>
          {showHobbies ? <Src text={"hobbies"} /> : <Nosrc text={"hobbies"} />}
        </div>
        {showHobbies ? (
          <div className="files">
            <div className="file-div">
              {hobbies.map((f) => (
                <div onClick={() => sendToApp(f.title)}>
                  <File
                    key={f.title}
                    text={f.title}
                    description={f.description}
                    filetype={f.filetype}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="footer">
        Joshua Dirga 2024
        <br></br>
        This website was heavily inspired by{" "}
        <img
          src={require("../images/vscode.png")}
          className="vscode"
          alt="VS Code"
        ></img>
        VS Code
      </div>
    </div>
  );
}

export default Header;
