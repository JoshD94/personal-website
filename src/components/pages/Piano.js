import React from "react";
import piano1 from "../../videos/piano-1.mp4";
import piano2 from "../../videos/piano-2.mp4";

function Piano() {
  return (
    <div className="goto-div">
      <div className="goto-general">
        <div>
          Hobby #3: <span className="goto-general-2">Piano</span>
        </div>
      </div>

      <div className="goto-body">
        <video className="basketball-video-2" controls>
          <source src={piano2} type="video/mp4" />
        </video>
        <div className="goto-caption">
          Practicising my cover of 群青 (Gunjou) by YOASOBI
        </div>

        <div className="goto-essay">
          &ensp;&ensp;&ensp;&ensp;I was introduced to the piano when I was in
          Kindergarten, learning classical pieces. However, I did not develop a
          passion for playing the piano until I learned how to play pop, and
          even more when I stepped into the world of jazz. Around the beginning
          of high school, I quit classical piano and started studying pop piano.
          Slowly, my teacher introduced me to jazz and I've been hooked ever
          since. It took me 3-4 years to be able to play by ear, a skill I am
          very proud of today. My favorite genre is genre is now jazz fusion, a
          combination of pop and some light jazz. I found that Jpop has the most
          jazz-fusion artists and this also led to my interests in learning new
          languages.
          <video className="basketball-video-2" controls>
            <source src={piano1} type="video/mp4" />
          </video>
          <div className="goto-caption">
            Performing a cover of "Equal" by Official 髭男dism with my friend
          </div>
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

export default Piano;
