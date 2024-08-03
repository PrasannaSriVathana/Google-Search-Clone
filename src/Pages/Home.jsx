import "./home.css"
import Navbar from "../components/Navbar.jsx";
import Body from "../components/Body.jsx";
import Footer from "../components/Footer.jsx";

const Home =()=>{
    return(
        <div className="home">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default Home;

