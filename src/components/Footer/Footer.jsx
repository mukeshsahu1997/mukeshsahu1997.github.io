import style from "./footer.css";
import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  return (
    <>
      <div className="fotter">
        <h2>
          {" "}
          <Typewriter
            words={["Made with 💗 by Mukesh Sahu"]}
            loop={5000000000}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </h2>
      </div>
    </>
  );
};
export default Footer;
