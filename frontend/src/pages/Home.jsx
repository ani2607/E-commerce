import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ListItem from "../components/ListItem";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <ListItem title="Mens Section"/>
            <ListItem title="Womens Section"/>
        </div>
    );
}

export default Home;