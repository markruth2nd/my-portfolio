import Project4a from "../images/project4a.png";
import Project4b from "../images/project4b.png";



const Project4 = () => {
    return <div className="container">
        <h1>Bootstrap Portfolio</h1>
        <p>Github page: <a href="https://github.com/markruth2nd/Portfolio-using-Bootstrap">Bootstrap Portfolio</a></p>
        <p>Deployed Link: <a href="https://markruth2nd.github.io/Portfolio-using-Bootstrap/">Bootstrap Portfolio</a></p>
        <div className="projects">
        <img className="project-images"
        src={Project4a} alt="projectPic" />
        <img className="project-images"
        src={Project4b} alt="projectPic" />
        </div>
        </div>
}

export default Project4;