

const Home = ({name, title}) => {
    return <div>
        Home
        <div>
        <section className="archer">
            <img src="https://cdn.shopify.com/s/files/1/0567/0567/9555/products/ARCHER-AGSA-SterlingArcher-28-Close_900x.jpg?v=1642604917" alt="Archer"/>
        </section>
        <section>
            <h1>My Name is {name}</h1>
            <p>Title: {title}</p>
        </section>
    </div> 
    </div>
}

export default Home

