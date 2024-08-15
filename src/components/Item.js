import React from "react";
import Level from "./Level";
import java from "../images/java.png";
import js from "../images/js.png";
import python from "../images/python.png";
import sql from "../images/sql.png";
import html from "../images/html.png";
import css from "../images/css.png";
import php from "../images/php.png";
import swift from "../images/swift.png";
import kotlin from "../images/kotlin.png";
import english from "../images/english.png";
import indonesian from "../images/indonesian.png";
import chinese from "../images/chinese.png";
import japanese from "../images/japanese.png";
import korean from "../images/korean.png";

function Item(file) {
  const images = {
    Java: java,
    JavaScript: js,
    Python: python,
    SQL: sql,
    HTML: html,
    CSS: css,
    PHP: php,
    Swift: swift,
    Kotlin: kotlin,
    English: english,
    "Bahasa (Indonesian)": indonesian,
    "中文 (Mandarin)": chinese,
    "日本語 (Japanese)": japanese,
    "한국어 (Korean)": korean,
  };

  return (
    <div className="item">
      <img src={images[file.name]} alt={file.name} className="item-image" />
      <div className="item-title">{file.name}</div>
      <div className="item-level">
        <Level level={file.level} />
      </div>
    </div>
  );
}

export default Item;
