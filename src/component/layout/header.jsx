import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/images/logo/Wordsworth.png";
import India from "../../assets/images/icon/india.png";
import US from "../../assets/images/icon/united-states.png";
import UK from "../../assets/images/icon/united-kingdom.png";
const phoneNumber = "+91 8971459282";

let socialList = [
  {
    iconName: "icofont-facebook",
    siteLink:
      "https://www.facebook.com/WordsWorth.99",
  },
  {
    iconName: "icofont-instagram",
    siteLink:
      "https://www.instagram.com/wordsworth_academy?igsh=dzBpZWdxdnpoeGIw&utm_source=qr",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "https://www.linkedin.com/company/wordsworth-edtech/",
  },
  {
    iconName: "icofont-whatsapp",
    siteLink: "https://wa.link/con324",
  },
];

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFiexd, setHeaderFiexd] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFiexd(true);
    } else {
      setHeaderFiexd(false);
    }
  });

  return (
    <header
      className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}
    >
      <div className={`header-top ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call" style={{color:'#f16126'}}></i> <span>{phoneNumber}</span>
              </li>
              <li className="tw-flex tw-gap-2">
               
                <img src={India} width="20" height="20"></img>
                <img src={US} width="20" height="20"></img>
                <img src={UK} width="20" height="20"></img>
                
              </li>
            </ul>

            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on : </p>
              </li>
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.siteLink}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo tw-flex tw-flex-row tw-w-[20%] tw-items-center tw-justify-left">
              <div><Link to="/">
                <img src={Logo} className="md:tw-w-[90px] tw-w-[75px]" />
              </Link>
              </div>
              <div>
                <p className="tw-text-xl tw-font-bold lg:tw-block tw-hidden tw-mb-0">WORDSWORTH</p>
              </div>
              
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li className="menu-item-has-children">
                    <HashLink to="/#courses">Courses</HashLink>
                    
                  </li>
                  <li className="menu-item-has-children">
                  <HashLink to="/#blog">Blog</HashLink>
                   
                  </li>
                  {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/instructor">Instructor</NavLink></li>
                                            <li><NavLink to="/shop">Shop Page</NavLink></li>
                                            <li><NavLink to="/shop-single">Shop Details Page</NavLink></li>
                                            <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul>
                                    </li> */}
                                    
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              {/* <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link> */}
              <Link to="/signup" className="signup rounded">
                <i className="icofont-users"></i> <span>Enroll Now</span>{" "}
              </Link>

              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className="ellepsis-bar d-lg-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
