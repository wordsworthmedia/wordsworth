
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import axios from "axios";
import { HashLink } from "react-router-hash-link";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Site Map";
const useTitle = "Useful Links";
const socialTitle = "Social Media";



const siteList = [
    {
        text: 'Popular Categories',
        link: '/#category',
    },
    {
        text: 'Courses',
        link: '/#courses',
    },
    {
        text: 'Instructors ',
        link: '/#instructor',
    },
    {
        text: 'Student Feed Back',
        link: '/#feedback',
    },
    
]

const useList = [
    {
        text: 'About Us',
        link: '/about',
    },
    {
        text: 'Testimonials',
        link: '/#testimonials',
    },
    {
        text: 'Terms & Conditions',
        link: '#',
    },
    {
        text: 'Contact Us',
        link: '/contact',
    },
    
]

const socialList = [
    {
        text: 'Facebook',
        link: 'https://www.facebook.com/WordsWorth.99',
    },
    
    {
        text: 'Instagram',
        link: 'https://www.instagram.com/wordsworth_academy?igsh=dzBpZWdxdnpoeGIw&utm_source=qr',
    },
    {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/company/wordsworth-edtech/',
    },
    {
        text: 'Whatsapp',
        link: 'https://wa.link/con324',
    },
]





const Footer = () => {
   
    const [email,setEmail] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [isShown, setIsShown] = useState(false);
  
    const handleSubmit = event => {
        event.preventDefault();
        setButtonDisabled(true);
        setIsShown(true);
        const response = axios.post('https://wordsworthacademy.com/mail2.php?email='+email);
        console.log(response);
    }
    return (
        <div className="news-footer-wrap">
            <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>
            
            <div className="news-letter">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="news-title">
                            <h3>{newsTitle}</h3>
                        </div>
                        <div className="news-form">
                            <form onSubmit={handleSubmit}>
                                <div className="nf-list">
                                    <input type="email" name="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}/>
                                    <input type="submit" name="submit" value="Subscribe Now" disabled={buttonDisabled}/>
                                </div>
                            </form>
                            {isShown && <div className="tw-bg-[#26c976]" >
                                <p style={{fontSize:"12px"}}>Welcome aboard! You’re officially on our list and we’ll be in touch with exciting updates and insights soon!"</p>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="footer-top padding-tb pt-0">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-3 row-cols-1 justify-content-center">
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{siteTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {siteList.map((val, i) => (
                                                        <li key={i}><HashLink to={val.link}>{val.text}</HashLink></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{useTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {useList.map((val, i) => (
                                                        <li key={i}><HashLink to={val.link}>{val.text}</HashLink></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{socialTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {socialList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <div className="container">
                        <div className="section-wrapper">
                            <p>&copy; 2024 <Link to="/">WordsWorth Academy</Link> </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;