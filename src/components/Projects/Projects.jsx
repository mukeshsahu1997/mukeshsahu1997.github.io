import style from "./Project.css";
import Projectcard from "./projectcard/Projectcard";
import proim from "./proim.png";

import crc from "./images/crc.png"
import nrd1 from "./images/nrd1.png"
import nrd2 from "./images/nrd2.png"

const Projects = () => {
  return (
    <div id="projects">
      <div className="porjectbody">
      <h1 className="aboutme">Projects...</h1>
        <div className="headbody">
          <img src={proim} alt="" className="imgani" />
          <h1 className="imgdata">
            👨‍💻My projects make use of a vast variety of latest technology tools.
            My best experience is to create NodeJS Backend Projects and React
            Project. Below are some of my projects....
          </h1>
        </div>
        <div className="procards">
          <Projectcard
          image={nrd2}
          heading="Nordstrom.com Clone"
         // desc="Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, our nutritional data is curated from verified, accurate sources."
          llink="https://nord-ecommerce-website.netlify.app/"
          gitlink="https://github.com/nsalunkhe/spiteful-bed-9674"
          reactlog="true"
          />
          <Projectcard image={crc}
          heading="EspnCrickinfo.com Clone"
          //desc="Sense is a shopping website that has emerging designers and streetwear brands for both men and women with global shipping."
          llink="https://deft-starlight-51e03b.netlify.app/"
          gitlink="https://github.com/SanketPaharia/ESPN-Cricinfo_Clone"
         
          />
          {/* <Projectcard
          image={bathandbody}
          heading="Bath&BodyWorks.com Clone"
          desc="Bath&BodyWorks is a shopping website that has Products Loke Soaps, Room Freshners,Candals ,Body Spress and so more For all type of coustomer."
          llink="https://guileless-longma-a0b1d8.netlify.app/index.html"
          gitlink="https://github.com/HARSHAL-AP/unwieldy-sponge-3549"
          />
          <Projectcard
          image={farfetch}
          heading="Farfetch.com Clone"
          desc="Farfetch is Ecommerce web interface for luxerious fassion, garment products and brands."
          llink="https://illustrious-crostata-a644a9.netlify.app"
          gitlink="https://github.com/HARSHAL-AP/projectunit3_farfetch.com"
          /> */}
        </div>
      </div>
    </div>
  );
};
export default Projects;
