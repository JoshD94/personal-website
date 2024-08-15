import React from "react";
import ccra from "../images/ccra.png";
import brb from "../images/brb.png";
import spotify from "../images/spotify.png";
import edukasih from "../images/edukasih.png";
import swa from "../images/swa.png";
import goto from "../images/goto.png";
import trim from "../images/trim.png";
import iac from "../images/iac.png";
import tedx from "../images/tedx.png";
import basketball from "../images/basketball.png";
import piano from "../images/piano.png";
import tennis from "../images/tennis.png";
import language from "../images/language.png";
import review from "../images/review.png";

function File(file) {
  const images = {
    brb: brb,
    spotify: spotify,
    edukasih: edukasih,
    swa: swa,
    goto: goto,
    trim: trim,
    ccra: ccra,
    iac: iac,
    tedx: tedx,
    basketball: basketball,
    piano: piano,
    tennis: tennis,
    language: language,
    review: review,
  };

  return (
    <div className="file">
      <img
        src={images[file.filetype]}
        alt={file.filetype}
        className="filetype-image"
      />
      <div className="file-header">
        <div className="file-title">{file.text}</div>

        <div className="file-description">{file.description}</div>
      </div>
    </div>
  );
}

export default File;
