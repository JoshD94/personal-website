import React from "react";
import basketball1 from "../../videos/basketball-1.mp4";
import basketball2 from "../../videos/basketball-2.mp4";
import basketball3 from "../../videos/basketball-3.mp4";
import basketball4 from "../../videos/basketball-4.mp4";
import basketball5 from "../../videos/basketball-5.mp4";

function Basketball() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Hobby #1: <span className="goto-general-2">Basketball</span>
        </div>
      </div>

      <div className="goto-body">
        <video className="tennis-video" autoPlay loop muted>
          <source src={basketball2} type="video/mp4" />
        </video>
        <video className="tennis-video" autoPlay loop muted>
          <source src={basketball3} type="video/mp4" />
        </video>

        <div className="goto-caption">Some clips of me practicing!</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;I started playing basketball in the summer of
          2022 when I met a couple friends that played basketball. After trying
          to play with them I learned that basketball was a challenging sport
          which pushed me to seriously learn it. I enjoyed the learning curve
          for basketball in the past 2 years and I hope to continue playing
          until I finished university!
          <video className="basketball-video-2" controls>
            <source src={basketball5} type="video/mp4" />
          </video>
          <div className="goto-caption">
            One on one with my brother (I'm in black)
          </div>
          &ensp;&ensp;&ensp;&ensp;Learning basketball helped me make many close
          friends, building friendships that lasted even off the court. I also
          stayed active and kept myself fit because I play a good amount of
          basketball in my free time. Following the recent Olympics and the NBA
          has also become one of my favorite past times because I can watch the
          greats play the game and learn from them.
          <br></br>
          <video className="tennis-video" autoPlay loop muted>
            <source src={basketball1} type="video/mp4" />
          </video>
          <video className="tennis-video" autoPlay loop muted>
            <source src={basketball4} type="video/mp4" />
          </video>
          <div className="goto-caption">Working on my one-dribble jumpshot</div>
        </div>
      </div>
    </div>
  );
}

export default Basketball;
