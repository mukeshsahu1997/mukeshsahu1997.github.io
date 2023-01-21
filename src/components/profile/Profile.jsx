import avtar3 from "./avtar3.png";
import "./Profile.css";
import res1 from "../Download/res1.pdf";
import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <div id="home">
      {" "}
      <div className="profilebody">
        <div className="profilecard">
          <div className="avtardiv">
            <img src={avtar3} alt="" />
          </div>
          <div className="avtarifo">
            <h2 className="hithere">HI There!👋</h2>
            <h2 className="nametag">
              I'M <span>Mukesh Sahu</span>
            </h2>
            <h3 className="jobs">
              {" "}
              <Typewriter
                options={{
                  strings: ["Full Stack Developer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <a href="https://github.com/mukeshsahu1997" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mukesh-sahu-96444522b/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <button className="resumebtn">
              <a href={res1} download>
                Resume <i class="fa-regular fa-circle-down"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
