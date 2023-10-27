import react from React
import Intro from "../components/Intro";
import Main from "./Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Header from "../components/Header";


export default function Home(){
    return (
        <div>
          <Header toggleMenu={toggleMenu} />
          <Intro />
          <Main />
          {/* Conditional rendering of the navigation links */}
          <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
            <a className="nav-link contact" href="#">
              Contact
            </a>
            <a className="nav-link about" href="#">
              About
            </a>
          </nav>
        </div>
      );
}