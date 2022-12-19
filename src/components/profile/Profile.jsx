import avtar3 from "./avtar3.png"
import "./Profile.css"

let arr=["FUll Stack Developer","Open Source Contrubution","MERN Stack Developer","Frontend Designer"]
const Profile=()=>{

    



return (
    <div id="home"> <div className="profilebody">
    <div className="profilecard">
        <div className="avtarifo">
            <h2 className="hithere">HI There!👋</h2>
            <h2 className="nametag">I'M <span>Mukesh Sahu</span></h2>
            <h3 className="jobs">FUll Stack Web Developer</h3>
            <a href="https://github.com/mukeshsahu1997" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mukesh-sahu-96444522b/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <button className="resumebtn"><a  href="https://drive.google.com/file/d/1K7bqiA4a6hpwjofKwoRWftWx1uenozY_/view?usp=sharing" download>Resume <i class="fa-regular fa-circle-down"></i></a></button>
        </div>
        
        <div className="avtardiv">
            <img src={avtar3} alt="" />
            
        </div>
    </div>
   </div>
   
   </div>
  
)



}
export default Profile