import style from "./Project.css";
import Projectcard from "./projectcard/Projectcard";
import proim from "./proim.png";

import crc from "./images/crc.png";
import nrd1 from "./images/nrd1.png";
import nrd2 from "./images/nrd2.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="porjectbody">
        <h1 className="aboutme">Projects...</h1>

        <div className="procards">
          <Projectcard
            image={nrd2}
            heading="Nordstrom.com Clone (Group Project)"
            desc="This app is a E-commerce responcive website for fashion and lifestyle products with various filters."
            llink="https://nord-ecommerce-website.netlify.app/"
            gitlink="https://github.com/nsalunkhe/spiteful-bed-9674"
            reactlog="true"
            reduxlog="true"
          />
          <Projectcard
            image={crc}
            heading="EspnCrickinfo.com Clone (Group Project)"
            desc="A Website to Find Live Cricket Scores, Match updates, etc"
            llink="https://deft-starlight-51e03b.netlify.app/"
            gitlink="https://github.com/SanketPaharia/ESPN-Cricinfo_Clone"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
