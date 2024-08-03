import "./body.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faXmark,faMicrophone,faCamera} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom";

const Body = () => {
    return(
        <div className="google">
            <div className="content">
                <h1 className="ga">G</h1>
                <h1 className="oa">o</h1>
                <h1 className="ob">o</h1>
                <h1 className="gb">g</h1>
                <h1 className="la">l</h1>
                <h1 className="ea">e</h1>
            </div>
            <div className="search">
                <div className="searchBody">
                    <div className="searchItem">
                        <span className="searchIcon">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </span>
                        <input type="text" className="searchInput"/>
                        <span className="xIcon">
                             <FontAwesomeIcon icon={faXmark}/>
                        </span>
                        <img alt="voice" className="voiceIcon"
                             src="data:image/png;base64,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"/>
                        <img alt="camera" className="cameraIcon"
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAA9lBMVEX///9ChfTpQjX6uwU0qFM9g/TB0Pr6uQDpPzLpPi/87u3wk43ynJfoIAD6wED96MP97tCJr/gfePQ3gPT4ysjrVEjoNybv9P7K2ftUkPXZ5Pz+9un52df63d0qfPPrXlXsYF7+8dv7ymhWlfb6xldwoPb5+v/mAADS3/zl7f0npUvj8OWStPj++/WsyPmBqPf81o2k0q72vrvvhH5itncTo0LR6NZGrmGbu/lpmfXNupn8z3b82Zj947Vyi8jlsD76viyam7HCqIVYiuP83qWGl8CnoZLTrWvMq3p/ksbktlesoqTu5dntbWW83sSAxI70rKiOyZs7xqwiAAAGnklEQVR4nO2bbVfaSBSACZJY0FphlBCUWIWkhJcgAgJLW+3W7kt3Rfn/f2YTZCuZzEwmJpOEc+7zGeM8Z+69mbkzyeUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDuYSpmIYqY9sjdQkypEtHbaIwuPZegSEWSoaY8tLOZMlskysjzbtUBTJER2caZGq6U9unBYc0qQueiGlfb4wmD2GC7O3OxUoCm0hNmkjbRDgVZvUhNmMzXNnQk0k1aVt9KmnPYgeZnpzCBbBxqy0x4lH4yqvDU10k4sBKx5JdhFkiqDLC4ETFNVrfr/WNaMy0WSdftym7N+P20Rta7MeoOBsYUUmDAvIO23qy0W15+/OEapqah1ezDXUKWib8Pp4qTN17t9D/etxcPxWToqtV5TQoh77D5k9G3Pg+tztPiQgk69p8kRTFyQ9Pv+nt9ncZywimprEU3WNt/vcBtX5+gh0dSxBjrHuyQY/Qfu8uJzdZmcS3vOn+ZMZPQH2eYosVCrabFMiwv6/ifJZm///kMyLm0tcB3Jj/zjLk2b+jy2eXFlJGKgOTZJRJoavL4PBfr+F8WmJfyFY3Ks70Pa/P2TYnMtWqbGs74PhSz9c59O2jgvGPKIIqBrtEBbiA00YqdC11EUGbny9afz3idNzReRLpbhDzKEmj1biYT978N1a4+gI7QG1HwTIyPDrsfx6LOHK9/sCM0atYe7IKkXW9Po8vreZyMwayy8HyZLsxh38v2HI8xmvyVuxYnX5XhdXBtsbvaPhJUA3zGFXI65MXm28JaB/b1rUVsbdYBNzDz23tdxC5uahSgZvDALaOb3r7GkuRJVAbD1sizi0Oj4CJMRVQHa3mKGygJ6kv2FN2laojYC2A5TTO/7M1bORL02vTKypIj4J1/SkRFzoP/B8+JMTiaWNRnOMciEB2RyVk2xHZSaxfWKzbCMqvQM7WVTrRllm2Mpl1kZdWY4G9FfDQKEjFmgTkZlTKWJsL4UQpodEGzZlHG2pYSuFEIB24ZMylgDcrdQ1g3m32VRxjKoh86VJusPMyijDhgH6BXWFa3syZjsywCVHr0KJCejo1d0hkxAR1qW6buHpGTahtbcgp7IgccejCtaScmYqhdqrChBtzQYl5qSkuHFJHSk8amZ07bcWZPhOMOhb1OzJtPjuW9GuwqYMRmuU0/qdeCMyTDvNP9KGloHIWMybZ47D9Sk8XYBU5cJLMxrGZ1SnI/vPXfQUpdh39DeUKHIXF61trnaCRnazPTPvKR8czOaTMaIVgAyhsVzUwgxd2jZwaTc4vBG2a58rDXjuL6JemmPkhOOpNmVlHHjLHgLkHqUlc5PPJRoPwwszs6+Oe0PtU4eTy9eOX1s0H6oBpWADHxCd3JaffdK9fSc+st6QEMDpf/NmSOTf4UlY9rsVlMGvgbkl3F2m6wmoIgz97CEkVEHFdrnwMyGZmKEkcmpZdIhgFvIsvF9VigZJ2805L84KGvx3up6M+FkcmatrHk+FpIRkga19HN/TUgZ90SzrElo06DWkaQNlCyky5rQMo5O2zaa2pqmYbczo/ImGbdBbdVrDnWL3pt26S6HLstuN57BBvEmGT66w3HnhenTMhEdcTLL8aRT2DCZPN3G9mA6omS6w8KksMVkuozpyQwEyXRXBYxOQbwNLnMSy1P7w2nHZzMVHmlemWL+Jpan3vpdnEgbi64CXpl89TCOh/ZXBBfHRnSgNT56ZR6p++YQECfGDTTBU4PJFGNJmiHRxakBgrOm9OiRyVcPYpiapwlRptAZRn82i9LIK1M8jV4CumOazFMMI2bx7JQwb9ZEftXQZcZxjJgBVs7y76r0dhMn6ck0sKTJF6ujiHOTXpjlnqvvcJvHm0hVoEstAKu4Bk3j/NSbNK5NfnRz3igFQH/kkCzTEf7WzJUOsDhzq0A1fzE6YPNMt1kWyC/NgvhdDV4C1mWgGET1I71OUJJmshJ/Mls6fO+TcX3YsGRyQ9LUJLBsdmhcEG3YMGWIJWAi+P2/4eY9XgMiypCWmuJ3ABsO/VkTTcZvM3lK7CrDCH/ZRJVxi8CWTqeQnIu73gxpEyST667WOm6raVIYJ9DOeKUxKobLm0AZV2c1nk6n46fVMOHbMqXDfKjJ4ZBxdG5vl8vbhBJ/m9LzRTVEHeCSSZHzgzx/jc66TK5081j8xDk7mZdxdUbFT1zTswMy7pWNZ8fH4T2bT7sg41JqnNw8H7JhbQEAAAAAAAAAAAAAAAAAAAAAAAAAAACAHeQ/IDPgG4oGB6oAAAAASUVORK5CYII="/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <div className="buttonItems">
                    <button className="buttona">Google Search</button>
                    <Link to="https://doodles.google/">
                        <button className="buttonb">I'm Feeling Lucky</button>
                    </Link>
                </div>
            </div>
            <div className="desc">
                <div className="descItem">
                    <h4>Google offered:</h4>
                    <Link to="" className="lang">
                        <h5>हिन्दी</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>বাংলা</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>తెలుగు</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>मराठी</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>தமிழ்</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>ગુજરાતી</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>ಕನ್ನಡ</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>മലയാളം</h5>
                    </Link>
                    <Link to="" className="lang">
                        <h5>ਪੰਜਾਬੀ</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Body;