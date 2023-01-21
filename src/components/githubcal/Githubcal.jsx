import GitHubCalendar from "react-github-calendar";
import style from "./Gitcal.css";

export const Githubcal = () => {
  return (
    <div className="caleboady">
      <div>
        <GitHubCalendar username="mukeshsahu1997" />
      </div>
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=mukeshsahu1997&show_icons=true&locale=en&border_radius=2&theme=light"
          alt="mukeshsahu1997"
        />
      </div>
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=mukeshsahu1997&show_icons=true&locale=en&border_radius=2&theme=light"
          alt="mukeshsahu1997"
        />
      </div>
      <div>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=mukeshsahu1997&show_icons=true&locale=en&border_radius=2&theme=light"
          alt="mukeshsahu1997"
        />
      </div>
    </div>
  );
};
