import Project2a from "../images/project2a.png";
import Project2b from "../images/project2b.png";
import { Link } from "react-router-dom";



const Project2 = () => {
    return <div className="container">
        <h1>Code Quiz</h1>
        <p>Github page: <a href="https://github.com/markruth2nd/Code-Quiz">Code Quiz</a></p>
        <p>Deployed Link: <a href="https://markruth2nd.github.io/Code-Quiz/">Code Quiz</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project2a} />
        <img className="project-images"
        src={Project2b} />
        </div>
        </div>
}

export default Project2;