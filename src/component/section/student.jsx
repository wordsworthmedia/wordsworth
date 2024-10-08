
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import video from "../../../src/assets/video.mp4"
import thumb from "../../../src/assets/IMG_5449.JPG"

const subTitle = "A Trusted Learning Platform For Young Minds";
const title = "Students Community Feedback";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Oliver Beddows',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
    {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Madley Pondor',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img" id="feedback">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    
                                    <video  controls width="100%" target="_blank" poster={thumb}>
                                        <source src={video}></source>
                                    <object data={video} >
                                    <embed src={thumb} ></embed>
                                    </object>

                                    </video>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;