
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import { useState } from "react";
import icon from "../../assets/images/IMG_2513.png";


const subTitle = "Enrichment Courses For Curious Kids";
const title = "Empowered Students = Tranformative Success";


const courseList = [
    {
        imgUrl: 'assets/images/course/28.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Reading Comprehension & Writing',
        id: 'Reading',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Nisha Gowda',
        btnText: 'Enroll Now',
        def:'● Boost communication effectiveness\n\n● Enrich essential skills\n\n● Elevate clarity and understanding',
    },
    {
        imgUrl: 'assets/images/course/29.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Mathematics',
        id: 'Mathematics',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Sonal Agarwal',
        btnText: 'Enroll Now',
        def:'● Unlock word to Enhance\n\n● Build solid foundation in Math\n\n',
    },
    {
        imgUrl: 'assets/images/course/30.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Coding',
        id: 'Coding',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Ranjith',
        btnText: 'Enroll Now',
        def: '● Unlock endless possibilities with every line of code\n\n● Transform ideas into digital reality'
    },
    {
        imgUrl: 'assets/images/course/31.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Public Speaking',
        id: 'Public',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Nisha Gowda',
        btnText: 'Enroll Now',
        def:'● Express with confidence, anywhere and anytime\n\n● Grow and evolve in every aspect\n\n● Articulate your thoughts with clarity and ease'
    },
    {
        imgUrl: 'assets/images/course/32.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Science',
        id: 'Science',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Sonal Agarwal',
        btnText: 'Enroll Now',
        def:'● Solid foundation in science\n\n● Refine science skills\n\n● Enhance comprehension in science '
    },
    {
        imgUrl: 'assets/images/course/33.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Essay Writing',
        id: 'Essay',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Anuja',
        btnText: 'Enroll Now',
        def: '● Master Structure & Clarity\n\n● Develop Persuasive Expression\n\n● Polish for Precision '
    },
    {
        imgUrl: 'assets/images/course/34.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Afterschool Supplemental Courses',
        id: 'Afterschool',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        btnText: 'Enroll Now',
        def:'● Holistic approach to education\n\n● All-round development and learning\n\n● Customized curriculum and support for all subjects',
    },
    {
        imgUrl: 'assets/images/course/36.jpg',
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
        def:'● Master Confident Communication\n\n● Expand Global Opportunities \n\n● Achieve Fluent Expression  ',
    },
    {
        imgUrl: 'assets/images/course/35.jpg',
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
        def:'● Individual Growth Pathways\n\n● Tailored Learning Strategies \n\n● Expert One-on-One Guidance  ',
    },
]

const Course = () => {
    const [isOPen, setisopen] = useState([courseList.map(e=>false)]);
    
    return (
        <div className="course-section padding-tb section-bg" id="courses">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper " >
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                        {courseList.map((val, i) => (
                            
                            <div className="col" id={val.id} key={i}>
                                <div className="course-item tw-shadow-xl tw-rounded-2xl">
                                    <div className="course-inner">
                                        <div className="course-thumb ">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="course-content">
                                            
                                            <div className="tw-flex tw-items-center tw-justify-between tw-">
                                            <Link to="/course-single"><h5>{val.title}</h5></Link>
                                           
                                            </div>
                                           
                                            <div  className="course-body">
                                                <p style={{whiteSpace:"pre-wrap"}} className="tw-my-[20px] tw-text-black tw-text-left">{val.def}</p>
                                                </div>
                                            
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    
                                                </div>
                                                <div className="course-btn">
                                                    <Link to="/signup" className="lab-btn-text">{val.btnText} <img src={icon} width="30" height="30" alt={`${val.imgAlt}` } /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Course;