import React from "react";
import food1 from "../../images/food-1.jpeg";
import food2 from "../../images/food-2.jpeg";
import food3 from "../../images/food-3.jpeg";
import food4 from "../../images/food-4.jpeg";
import food5 from "../../images/food-5.jpeg";
import food6 from "../../images/food-6.jpeg";
import food7 from "../../images/food-7.jpeg";
import food8 from "../../images/food-8.jpeg";
import food9 from "../../images/food-9.jpeg";
import food10 from "../../images/food-10.jpeg";
import food11 from "../../images/food-11.jpeg";
import food12 from "../../images/food-12.jpeg";
import food13 from "../../images/food-13.jpeg";
import food14 from "../../images/food-14.jpeg";
import food15 from "../../images/food-15.jpeg";
import food16 from "../../images/food-16.jpeg";

function Review() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Hobby #4: <span className="goto-general-2">Google Reviewing</span>
        </div>
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.google.com/maps/contrib/106804264514246325022/reviews/@-7.3239142,113.262719,6z/data=!3m1!4b1!4m3!8m2!3m1!1e1?entry=ttu"
          )
        }
        className="resume"
      >
        {<p className="braces">{"{"}&nbsp;</p>}My Google Reviews Page
        {<p className="braces">&nbsp;{"}"}</p>}
      </div>
      <div className="goto-body">
        <div className="food-collage">
          <img className="food-image" src={food2} alt="food2" />
          <img className="food-image" src={food8} alt="food8" />
          <img className="food-image" src={food15} alt="food15" />

          <img className="food-image" src={food4} alt="food4" />
          <img className="food-image" src={food13} alt="food13" />
          <img className="food-image" src={food1} alt="food1" />
          <img className="food-image" src={food16} alt="food16" />
          <img className="food-image" src={food12} alt="food12" />

          <img className="food-image" src={food2} alt="food2" />
          <img className="food-image" src={food8} alt="food8" />
          <img className="food-image" src={food15} alt="food15" />
        </div>

        <div className="goto-caption">A few of my highlights!</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;I recently started reviewing on Google Maps
          and I've gotten thousands of views. As a person, I really like to
          collect and organize things, so reviewing and recording all my past
          food stops became a fun pastime. Besides it being a personal hobby, I
          also enjoy helping my favorite restaurants out by giving them a good
          review. I try to be as honest as possible in my reviews, and I try to
          convice others to support the local businesses. Also, I hope people
          can find some good recommendations from my reviews!
          <div className="food-collage">
            <img className="food-image-2" src={food7} alt="food7" />
            <img className="food-image-2" src={food9} alt="food9" />
            <img className="food-image-2" src={food10} alt="food10" />

            <img className="food-image-2" src={food3} alt="food3" />
            <img className="food-image-2" src={food11} alt="food11" />
            <img className="food-image-2" src={food5} alt="food5" />
            <img className="food-image-2" src={food14} alt="food14" />
            <img className="food-image-2" src={food6} alt="food6" />

            <img className="food-image-2" src={food7} alt="food7" />
            <img className="food-image-2" src={food9} alt="food9" />
            <img className="food-image-2" src={food10} alt="food10" />
          </div>
          <div className="goto-caption">Some more good recommendations...</div>
          &ensp;&ensp;&ensp;&ensp;As I just started reviewing, I am still a
          level 6 local guide with around 10-20 reviews. As I explore more good
          spots, I hope to find more hidden gems and share them with the world.
          You can probably tell I love spicy food from the amount of red in my
          reviews, so if you have any good spicy food recommendations for me to
          try out, please let me know :D
        </div>
      </div>
    </div>
  );
}

export default Review;
