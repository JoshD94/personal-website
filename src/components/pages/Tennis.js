import React from "react";
import tennis1 from "../../videos/tennis-1.mp4";
import tennis2 from "../../videos/tennis-2.mp4";
import tennis3 from "../../videos/tennis-3.mp4";

function Basketball() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Hobby #2: <span className="goto-general-2">Tennis</span>
        </div>
      </div>

      <div className="goto-body">
        <video className="basketball-video-2" controls>
          <source src={tennis3} type="video/mp4" />
        </video>
        <div className="goto-caption">Some shots with my brother</div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;Tennis runs in the family! From both my
          grandparents, to my cousins, everyone can play tennis. I started
          learning when I started primary school, but I improved a lot during
          covid because I rallied against a wall during lockdown. Tennis is an
          all-rounded sport, meaning it demands both physical but also mental
          strength to compete. Besides that, it trains all parts of your body,
          both upper-body strength and your legs. At university, I am currently
          teaching my friend to play tennis and you can see his progress in the
          first video below!
          <video className="tennis-video" autoPlay loop muted>
            <source src={tennis1} type="video/mp4" />
          </video>
          <video className="tennis-video" autoPlay loop muted>
            <source src={tennis2} type="video/mp4" />
          </video>
          <div className="goto-caption">Good rallies with friends</div>
          &ensp;&ensp;&ensp;&ensp;Despite playing for nearly a decade, I've
          never really entered the competitive realm of tennis. I have
          participated in some competitions and got 2nd place, but I prefer the
          more casual side of tennis. Tennis also has a very nice learning curve
          and I encourage anyone to learn how to play! I hope I will be able to
          play tennis until I'm old, and pass on the tennis genes to my children
          as well :D
        </div>
      </div>
    </div>
  );
}

export default Basketball;
