
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";



const subTitle = "World-class Instructors";
const title = "MEET THE MINDS BEHIND THE COURSES";

const instructorList = [
    
    {
        imgUrl: 'assets/images/instructor/16.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Sonal Agarwal',
        degi: 'B.A. Economics',
        courseCount: '08 courses',
        studentAnroll: '30 students',
        desc: 'As an innovative educator with a unique approach to teaching Maths and other school subjects, I bring a blend of creativity and expertise to the classroom. With a B.A. in Economics and an M.B.E. in Finance, I focus on crafting personalized learning experiences that resonate with each child’s individual understanding. My teaching philosophy is rooted in experiential, student-centered, and game-based methods, making learning both engaging and meaningful. Dedicated to evolving my techniques, I strive to inspire curiosity and a love for learning. Together, let’s unlock new possibilities in education!'
    },
    {
        imgUrl: 'assets/images/instructor/17.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Nisha Gowda',
        degi: 'M.A. Psychology',
        courseCount: '08 courses',
        studentAnroll: '30 students',
        desc: 'As a psychologist and dynamic remote worker, I bring an entrepreneurial mindset and passion for innovation into my teaching. My experiences as a solo traveler, blogger, writer, and YouTuber enhance my ability to teach public speaking and writing with creativity and insight. By applying my skills in content creation, leadership, and project management, I help students develop their voice, confidence, and communication skills. Adaptable and resourceful, I use my diverse expertise to inspire growth in various areas such as public speaking, creative writing, and personal development.'
    },
    {
        imgUrl: 'assets/images/instructor/18.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Ranjith M',
        degi: 'M.C.A',
        courseCount: '08 courses',
        studentAnroll: '30 students',
        desc: 'As a skilled coder and website developer, I blend technical expertise with a passion for creating seamless digital experiences. With a background in coding languages and cutting-edge technologies, I specialize in transforming ideas into dynamic, user-friendly websites. My approach combines precision with creativity, ensuring every project is both functional and visually compelling. Committed to continuous learning and innovation, I stay ahead of industry trends to deliver exceptional results. Lets build something amazing together!'
    },
]


const Instructor = () => {
    return (
        <div className="instructor-section padding-tb section-bg tw-bg-[#ffff]" id="instructor" >
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {instructorList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="tw-w-[200px] tw-h-[200px]"/>
                                        </div>
                                        <div className="instructor-content">
                                           <h4>{val.name}</h4>
                                            <p className="tw-font-bold tw-text-[18px]">{val.degi}</p>
                                            <p className="desc">{val.desc}</p>
                                            
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
 
export default Instructor;