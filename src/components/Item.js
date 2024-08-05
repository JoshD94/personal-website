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
