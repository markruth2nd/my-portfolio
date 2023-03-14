import Project1a from "../images/project1a.png";
import Project1b from "../images/project1b.png";
import { Link } from "react-router-dom";



const Project1 = () => {
    return <div className="container
">
        <h1>South Park Fan Page</h1>
        <p>Github page: <a href="https://github.com/MarlenaDowner/South-Park-Fan-Page">South Park Fan Page</a></p>
        <p>Deployed Link: <a href="https://marlenadowner.github.io/South-Park-Fan-Page/">South Park Fan Page</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project1a} />
        <img className="project-images"
        src={Project1b} />
        </div>
        </div>
}

export default Project1;