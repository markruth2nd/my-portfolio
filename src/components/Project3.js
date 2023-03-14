import Project3a from "../images/project3a.png";
import Project3b from "../images/project3b.png";
import { Link } from "react-router-dom";



const Project3 = () => {
    return <div className="container">
        <h1>Password Generator</h1>
        <p>Github page: <a href="https://github.com/markruth2nd/Password-Generator-">Password Generator</a></p>
        <p>Deployed Link: <a href="https://markruth2nd.github.io/Password-Generator-/ ">Password Generator</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project3a} />
        <img className="project-images"
        src={Project3b} />
        </div>
        </div>
}

export default Project3;