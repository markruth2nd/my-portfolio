import Project5a from "../images/project5a.png";
import { Link } from "react-router-dom";



const Project5 = () => {
    return <div className="container">
        <h1>Pre work Study Guide</h1>
        <p>Github page: <a href="https://github.com/markruth2nd/prework-study-guide">Pre work Study Guide</a></p>
        <p>Deployed Link: <a href="https://markruth2nd.github.io/prework-study-guide/">South Pre work Study Guide</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project5a} />
        </div>
        </div>
}

export default Project5;