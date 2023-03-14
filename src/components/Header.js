import { Link } from "react-router-dom"



const Header = () => {
    return <header className="header">
            <Link className="navText" to="home"> Home</Link>
            <Link className="navText" to="contact"> Contact</Link>
            <Link className="navText" to="project"> Project</Link>
        </header>
}

export default Header;