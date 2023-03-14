import Archer from "../images/Archer.png";

const Home = ({name, title}) => {
    return <div>
        <header className="welcome">
                Welcome to my Portfolio
            </header >
            <h2 className="welcome2">Brand statement goes here</h2>
        <div className="homepage">
        <section>
            <img className="archer" src={Archer} alt="Archer"/>
        </section>
        <section className="myInfo">
            <h1>My Name is {name}</h1>
            <p>Title: {title}</p>
        </section>
    </div> 
    </div>
}

export default Home

