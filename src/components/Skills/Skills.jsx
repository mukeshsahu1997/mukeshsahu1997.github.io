import style from "./Skills.css";
import hurokuicon from "./hurokuicon.png";
import logo512 from "./logo512.png";
import mongodblogo from "./mongodblogo.png";
import nodejsicon from "./nodejsicon.png";
import netly from "./netly.png";
import hticon from "./hticon.png";
import csspn from "./csspn.png";
import js from "./js.png";
import nextjs from "./nextjs.png";
import reduxlog from "./reduxlog.png";
const Skills = () => {
  return (
    <div id="skils">
      <h1 className="heading">Skills</h1>
      <div className="outerskilob">
        <img src={hticon} alt="" className="iconpngs" />
        <img src={csspn} alt="" className="iconpngs" />
        <img src={js} alt="" className="iconpngs" />
        <img src={logo512} alt="" className="iconpngs" />
        <img src={reduxlog} alt="" className="iconpngs" />

        <img src={nextjs} alt="" className="iconpngs" />
        {/* <img src={mongodblogo} alt="" className="iconpngs"/> */}
        <img src={nodejsicon} alt="" className="iconpngs" />
        <img src={hurokuicon} alt="" className="iconpngs" />
        <img src={netly} alt="" className="iconpngs" />
      </div>
    </div>
  );
};

export default Skills;
