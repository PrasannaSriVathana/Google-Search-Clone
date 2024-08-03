import "./navbar.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlask} from "@fortawesome/free-solid-svg-icons"



const Navbar  = () => {

    return(
        <div className="page">
            <div className="navbarContainer">
                <div className="navbar">
                    <div className="navContainer">
                        <Link to="https://mail.google.com/mail/u/0/#inbox" className="gmail">
                            <span className="gmail">Gmail</span>
                        </Link>
                        <Link
                            to="https://mail.google.com/mail/u/0/#inbox" className="images">
                            <span className="image">Images</span>
                        </Link>
                        <Link to="https://labs.google.com/search" className="searchLab">
                            <FontAwesomeIcon icon={faFlask}/>
                        </Link>
                        <button className="gridButton">
                            <img alt="account" className="gridButtonImage"
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEUAAAD////V1dXY2NghISGAgIB8fHwdHR0kJCTq6ur7+/vb29v4+Pjh4eHx8fHn5+exsbFRUVFpaWlMTEzMzMxAQECjo6OYmJgMDAxHR0e9vb1xcXE7OztdXV2Li4s2NjYrKysWFhbW8J66AAADe0lEQVR4nO2cbbOaMBCFE1CQd0FEfEP6//9kAZ32NpslZ7BWe2fP52z2SSIz7mGJ0lqnp3OoOG2COtZWZc2u5aLaY5PZo+I62LDJ2vNpTKa0jip20F2VlWrLL2RSuLVFpc5k0QiVs8v9pUtKZz84o1RDo/KbOywfoAL3MHUgsxdAlIpIWAdErbXykNnp9Gck6rxoKcpXW2jcyZg92iNRx9wIw5Jt1Roa1xmz+/wT9EV9YoQhP5UhGQi1XgQVeougAoESKIESKIESKIESKIESKIESqG8NFXwi1LKdWi2DWivAPVHUQCkuSNStMMKwZAdVQ+OIA3ZFoq5mVAIlq1VeAsOobQatxbRFdIyspcyVRrwg06gY5HLkBlU0Ctkqb7QXXT6hCms6u9snVJXF/9P1D1ey0+R56mz2oWg7ashN2s4efGm1PIdHpJu1M4Px16umkXnic8pM4+vLZhVslF/YtumuPGOjknsyxca+UQKFSqBQCRQqgUIlUKgECpVAobpDxZnHiXlpPilKuKiE+WM4iU+WpL+hDuVtxWhzKxumBcCv9j0X1u8rn0FqytuGDdt1DyjPVVjuLXWDjp013MG2mMRVMK7qESpytwAcLYcB1JX0Hb0u3O+e20grqBQjr821D0QpeoLIS/rr4hYAoOyzFH4ZlMxTDTTOrJewFoC9uRYsWfPaFgDz/P5uC8A38qcESqAESqAESqAESqAESqAESqDeDfWPSyykwZ/uVNIjUaQFADyWzyzbP9DgqBXUYbDQCjJPD7SCYsg0u5idGBoyzUxXZFDh/m6mzSZ7sXcx2ezL2PmEdDZ70XNRhfXDiO12rKO66kurdznOX11YR3Wzr+jZ3RdzmEu26x7fYg1KZyxrBmk6DDbKm7GsU9bo/sOy/jQJFCqBQiVQqAQKlUChEihUAoXq0VLJdznOtVRGfEtl9GxLZTZbjr2n+fS0Av42E8XOwuRs+88KtukChV9raeMAiiVamKENza9s/SY7DPUbXNPPbJJ/5ecEpIgFk73Un9osawFYf6Y/9R87eQIlUAIlUAIlUAIlUAIlUAIlUO5xxuzO7yKeg3plCwApRsHm94WX9+VHJIq0AKCX973ymkPSAoBdc+gpaEsXXghJX9KDF0Lq3D2st/iey76byYEHJH/mklGHUfjUJaPPXMfKRrW7RdexhsFpdJV/AtI+TxV2wW19AAAAAElFTkSuQmCC"/>
                        </button>
                        <Link
                            to="https://accounts.google.com/SignOutOptions?hl=en&continue=https://www.google.co.in/&ec=GBRAmgQ">
                            <button className="accButton">
                                <img className="acc1" alt="account1"
                                     src="https://lh3.googleusercontent.com/-fVaMAjufToI/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkm6U4z8AePrz5ofrqeLQTC0405txw/photo.jpg?sz=46"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Navbar;