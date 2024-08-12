import React from "react";
import { useEffect } from "react";

function Goto() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Team:{" "}
          <span className="goto-general-2">KYC Identity Team (Backend)</span>
        </div>
        <div>
          Company: <span className="goto-general-2">GoTo Financial</span>
        </div>
        <div>
          Date: <span className="goto-general-2">May 2024 - August 2024</span>
        </div>
        <div>
          Location: <span className="goto-general-2"> Jakarta, Indonesia</span>
        </div>
      </div>

      <div className="goto-body">
        <img
          src={require("../../images/Goto-7.jpg")}
          alt="GoTo"
          className="goto-image"
        />
        <div className="goto-caption">Photo on orientation day!</div>
        <div className="goto-intro"> My contributions to the team:</div>
        <ul className="goto-li">
          <li>
            <span className="goto-light-blue">
              Monitored daily steganography injections
            </span>{" "}
            from production
          </li>
          <li>
            {" "}
            <span className="goto-light-blue">Led testing</span> of the ISO
            project as a white-hat attacker
          </li>
          <li>
            {" "}
            <span className="goto-light-blue">Presented case studies</span> on
            backend model benchmarks
          </li>
          <li>
            <span className="goto-light-blue">Prepared datasets</span> for
            backend model training
          </li>
        </ul>
        <div className="goto-intro">Read about my experience:</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;I really enjoyed my time at GoTo Financial
          working as a data science intern. As a member of the backend team, I
          worked closely with the backend lead, Jerron, to prepare the backend
          model for ISO level 2 certification. Although the aim of the project
          is simple: to create a model that can differentiate real users from
          fake users/attackers, this task demanded hours of fine tuning and
          testing to achieve a high accuracy score. Here I not only assisted
          Jerron in preparing the datasets and benchmarking the backend models,
          I also prepared case studies for our daily standups on the ISO
          project, detailing the strengths and more importantly the weaknesses
          in our models.{" "}
          <img
            src={require("../../images/Goto-1.jpg")}
            alt="GoTo"
            className="goto-image"
          />
          <div className="goto-caption">Photo with the backend team</div>
          <br></br>&ensp;&ensp;&ensp;&ensp;The most fun task I worked on in the
          KYC team is becoming a white-hat attacker to try and pin point our
          models' weaknesses. With my persistent efforts, I managed to find
          multiple weaknesses in our models each week, prompting both the
          frontend and backend team to go through multiple iterations to perfect
          their models against all possible cases. Furthermore, I was also
          tasked with monitoring injections from production, to keep a blocklist
          updated to deter attackers. <br></br>
          &ensp;&ensp;&ensp;&ensp;My experience working under Zhitao (Team lead)
          was a very fulfilling one, allowing me to get a taste of a number of
          fields such as machine learning and even some aspects of cyber
          security. Working with a small focused team pushed me to learn a lot
          and pick up many skills along the way. I am grateful for this
          opportunity to work with such a great team and I look forward to
          applying everything I learnt in the industry!
        </div>
        <img
          src={require("../../images/Goto-4.jpg")}
          alt="GoTo"
          className="goto-image"
        />
        <div className="goto-caption">Onboarding photo!</div>
      </div>
    </div>
  );
}

export default Goto;
