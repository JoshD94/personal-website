import React from "react";
import Item from "../Item";
import language1 from "../../images/duolingo.jpg";

function Language() {
  const languages = [
    {
      proficiency: "Native",
      name: "English",
      level: 5,
    },
    {
      proficiency: "Native",
      name: "Bahasa (Indonesian)",
      level: 5,
    },
    {
      proficiency: "Intermediate",
      name: "中文 (Mandarin)",
      level: 3,
    },
    {
      proficiency: "Intermediate",
      name: "日本語 (Japanese)",
      level: 3,
    },
    {
      proficiency: "Beginner",
      name: "한국어 (Korean)",
      level: 1,
    },
  ];

  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Hobby #5: <span className="goto-general-2">Learning Languages</span>
        </div>
      </div>

      <div className="goto-body">
        <img
          className="language-image"
          src={language1}
          alt="my duolingo streak"
        />
        <div className="goto-caption">My streak as of August 12, 2024</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;I grew up bilingual in English and Indonesian,
          and I studied Mandarin since kindergarten. This gave me the weird
          ability to think in multiple languages, for example: I thought and
          spoke mostly English, I could only remember the colors of the rainbow
          in Mandarin as a child, and I only knew the name of my chores in
          Indonesian. It was an interesting experience knowing a couple
          languages growing up and I think it helped me approach problems from
          different angles. <br></br>
          <div className="language-div">
            {languages.map((f) => (
              <Item key={f.name} name={f.name} level={f.level} />
            ))}
          </div>
          &ensp;&ensp;&ensp;&ensp;Besides my three languages, I started learning
          Japanese on my own in high school. Japanese was the first language I
          learned that did not use the Latin Alphabet, instead it had three
          distinct scripts: Hiragana (The main script to spell out words),
          Katakana (The script to spell out foreign words), and Kanji (Chinese
          characters). At first, it took me one to two months learning these
          scripts, but afterwards I was amazed how I could spend 2 months
          learning and be able to understand these once-gibberish scripts. Kanji
          was a bit easier since I knew some Mandarin, but the grammar was the
          most challenging part of learning Japanese, because it is known to
          have the opposite grammar to english.
          <br></br>
          <div>
            <br></br>
            <span style={{ color: "#80ff80" }}>
              Hi! I'm Joshua, look forward to working with you!
            </span>
            <span style={{ color: "#ff5972" }}>
              <br></br>
              Halo, nama saya Joshua, semoga kita bisa bekerja sama...
            </span>
            <span style={{ color: "#fcff59" }}>
              <br></br>
              您好，我叫林瑞键，很高兴认识你！
            </span>
            <span style={{ color: "#fdbdff" }}>
              <br></br>
              初めまして！ジョシュアと申します。よろしくお願いします！
            </span>
            <span style={{ color: "#57b6ff" }}>
              <br></br>안녕하세요! 만나서 반가워요！
            </span>
          </div>
          <br></br>&ensp;&ensp;&ensp;&ensp; The fifth language I'm currently
          learning is Korean. Thankfully Korean only has one script (Hangul) and
          has similar grammar to Japanese. I started learning Korean because I
          wanted to be able to talk to my Korean friends at university and I
          have a personal goal to be able to speak all the major East-Asian
          languages (Mandarin, Korean, Japanese). I mostly spend 5 minutes a day
          learning on Duolingo, but besides that, I try as much as possible to
          immerse myself in content from the language. For example, my google
          assistant is set to Japanese, and most of my Youtube and X (Twitter)
          content are in Japanese while I was studying Japanese. I think
          learning languages is a very productive hobby and I plan to continue
          learning languages for a long time!
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Language;
