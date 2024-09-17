import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import axios from "axios";



const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
    {
        link: 'https://www.facebook.com/WordsWorth.99?mibextid=LQQJ4d&rdid=tnUMylTc5XuwkTQS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F976VdbtC8Ctx2n9a%2F%3Fmibextid%3DLQQJ4d',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
   
    {
        link: 'https://www.linkedin.com/company/wordsworth-edtech/',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: 'https://www.instagram.com/wordsworth_academy/?igsh=dzBpZWdxdnpoeGIw&utm_source=qr',
        iconName: 'icofont-instagram',
        className: 'instagram',
    }
]
    
const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Reading Comprehension & Writing',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Nisha Gowda',
        btnText: 'Enroll Now',
        def:'This is paragraph',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Mathematics',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Sonal Agarwal',
        btnText: 'Enroll Now',
        def:'This is paragraph',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Coding',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Ranjith',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Public Speaking',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Nisha Gowda',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Science',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Sonal Agarwal',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Essay Writing',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Anuja',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Afterschool Supplemental Courses',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Spoken English For Adults',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        btnText: 'Enroll Now',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Mentoring For Kids',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        
        btnText: 'Enroll Now',
    },
]

const SignupPage = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [course,setCourse] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setButtonDisabled(true);
        setIsShown(true);
        const response = axios.post('https://wordsworthacademy.com/mail.php?name='+name+'&email='+email+'&phone='+phone+'&course='+course);
        console.log(response);
    }

    return (
        <Fragment>
            <Header />
            <PageHeader title={'Book A Demo'} curPage={'Sign Up'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">Book A Demo</h3>
                        <form className="account-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="form-group">
                                <select onChange={(e) => setCourse(e.target.value)}>
                                {courseList.map((val, i) => (
                                    <option key={i}>{val.title}</option>
                                ))};
                                </select>
                                
                            </div>
                            <div className="form-group">
                                <button className="lab-btn" disabled={buttonDisabled}><span>{btnText}</span></button>
                            </div>
                            {isShown && <div className="tw-bg-[#26c976]" >
                                <p style={{fontSize:"12px"}}>Thank you! We've received your form and are already on it—expect to hear from us very soon!</p>
                            </div>
                            }
                        </form>
                       {/*} <div className="account-bottom">
                           
                            
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>*/}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default SignupPage;