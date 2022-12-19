import React from "react";
import style from "./contact.css";

function Contactme() {
  return (
    <div id="contactme">
      <div className="contactbiody">
        <h2 className="mm">Contact me...</h2>
        <h1 className="mmyname">Mukesh Sahu</h1>
        <h3 className="mmyno">+91-9372-09-7841</h3>
        <div>
          <a href="https://github.com/mukeshsahu1997" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mukesh-sahu-96444522b/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:sahumukesh095@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
