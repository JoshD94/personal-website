import React from "react";

function Trim() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Team: <span className="goto-general-2">Investment Team</span>
        </div>
        <div>
          Company:{" "}
          <span className="goto-general-2">Trimegah Asset Management</span>
        </div>
        <div>
          Date: <span className="goto-general-2">July 2023 - August 2023</span>
        </div>
        <div>
          Location: <span className="goto-general-2"> Jakarta, Indonesia</span>
        </div>
      </div>

      <div className="goto-body">
        <img
          src={require("../../images/trim-2.jpg")}
          alt="GoTo"
          className="goto-image"
        />
        <div className="goto-caption">Photo with the investment team!</div>
        <div className="goto-intro"> My contributions to the team:</div>
        <ul className="goto-li">
          <li>
            <span className="goto-light-blue">
              Researched internet and technology sectors
            </span>{" "}
            broker reports and news
          </li>
          <li>
            {" "}
            <span className="goto-light-blue">
              Developed a stock simulation program
            </span>{" "}
            using historical data to plot stock prices of certain key features
          </li>
          <li>
            {" "}
            <span className="goto-light-blue">
              Attended broker meetings
            </span>{" "}
            and learned about stock updates
          </li>
        </ul>
        <div className="goto-intro">Read about my experience:</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;In my time at Trimegah Asset Management, I
          managed to combine my interests in data science with a new field for
          myself: finance. With this opportunity to work with one of the leaders
          of the industry, I focused on trying to learn as much as possible
          while also helping to automate some aspects of their work. My main
          task was to research the internet and technology sector in Indonesia,
          a sector that is a combination of both stable investments like
          internet companies and providers, to the more volatile ones that
          include many tech startups emerging in the country. I enjoyed
          researching this sector because it related to my interests and it was
          my ground zero to start learning more about the market. Besides the
          internet and technology sector, I also worked close with my mentor and
          attended team meetings and broker meetings where they exchanged
          information. Here, I learned a bit about the commodity market in
          Indonesia, a market dominated by coal and oil, metals, and other
          natural resources from the land. <br></br>&ensp;&ensp;&ensp;&ensp;My
          highlight of this internship was when I worked on a stock simulation
          program that uses historical indexes to calculate and visualize the
          outcomes of investing in certain stocks in the past. I faced a couple
          difficulties here, including the fact that the Indonesian stock market
          is relatively messy and needed a lot of data cleaning, and also the
          fact that our market was quite young and only had around 20 years of
          relevant data to work with. However, despite the challenges I managed
          to developed and maintain this project that was very useful for
          testing which characteristics of the investments that generated the
          most profit. For example, testing what level of liquidity or stock
          split actions will be an indicator of a healthy stock, specific to the
          Indonesian market.
          <img
            src={require("../../images/trim-1.jpg")}
            alt="GoTo"
            className="goto-image"
          />
          <div className="goto-caption">Last day on the job!</div>
          <br></br>
          &ensp;&ensp;&ensp;&ensp;This internship experience at Trimegah Asset
          Mangement was a very fulfilling experience where I learned a lot about
          the workplace in the finance industry, how to analyze the market, and
          how to apply data science into this field. I want to thank the
          everyone for welcoming me into the team and I look forward to applying
          this newfound knowledge into my future endeavours!
        </div>
      </div>
    </div>
  );
}

export default Trim;
