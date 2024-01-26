import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Header from '../components/Header';
import ListItem from "../components/ListItem";
import Card from "../components/Card";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <ListItem title="Mens Section"/>
            <ListItem title="Womes Section"/>
        </div>
    );
}

export default Home;