import Project6a from "../images/project6a.png";
import Project6b from "../images/project6b.png";
import Project6c from "../images/project6c.png";
import Project6d from "../images/project6d.png";
import { Link } from "react-router-dom";



const Project6 = () => {
    return <div className="container">
        <h1>Other Stuff!!</h1>
        <p>Github page: <a href="https://github.com/markruth2nd/Password-Generator-">25 mini Projects</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project6a} />
        <img className="project-images"
        src={Project6b} />
        <img className="project-images"
        src={Project6c} />
        <img className="project-images"
        src={Project6d} />
        </div>
        </div>
}

export default Project6;