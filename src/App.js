import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import About from "./components/profile/About";
import Projects from "./components/Projects/Projects";
import Contactme from "./components/Contactme/Contact";
import Footer from "./components/Footer/Footer";
import { Githubcal } from "./components/githubcal/Githubcal";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Projects />
      <Githubcal />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
