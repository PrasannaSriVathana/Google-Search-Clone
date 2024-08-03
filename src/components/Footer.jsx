import "./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="container1">
                <h5 className="india">India</h5>
            </div>
            <div className="foot">
                <div className="container2">
                    <a className="info" href="">About</a>
                    <a className="info" href="">Advertising</a>
                    <a className="info" href="">Business</a>
                    <a className="info" href="">How Search Works</a>
                </div>
                <div className="container3">
                    <a className="info" href="">Privacy</a>
                    <a className="info" href="">Terms</a>
                    <a className="info" href="">Settings</a>
                </div>
            </div>

        </div>
    );
}

export default Footer;