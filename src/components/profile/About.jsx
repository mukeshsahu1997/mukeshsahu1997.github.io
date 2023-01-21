import "./About.css";
import abn from "./abn.png";
import Skills from "../Skills/Skills";
import devim from "./devim.png";

const About = () => {
  return (
    <div id="about">
      <div className="aboutediv">
        <h1 className="aboutme">Aboute me</h1>
        <img className="abn" src={devim} alt="" />
        <h2 className="myname">I'm Mukesh Sahu</h2>
        <h3 className="desc">
          Aspiring full Stack MERN Developer. I have a passion to create useful
          projects and systems which can contribute in everyone's wellbeing. I
          go to full extent in execution. I love to make projects which are
          helpful for masses and serve as a great helpful entity.
        </h3>
        <Skills />
      </div>
    </div>
  );
};

export default About;
