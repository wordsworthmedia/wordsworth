
import { Link } from "react-router-dom";
import icon from "../../assets/images/IMG_2513.png";
import { ShowMore } from '@re-dev/react-truncate'
const subTitle = "FROM OUR BLOG POSTS";
const title = "Articles From Resource Library";


const blogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Beyond Math and Science - The Vital Role of Holistic Learning in K-12 Education',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'In today’s fast-changing world, a strong foundation in math and science is essential, but it’s just the beginning. Holistic learning—encompassing arts, technology, and life skills—equips students with the creativity and critical thinking needed to navigate real-world challenges. By encouraging exploration beyond core subjects, holistic education nurtures well-rounded individuals who can adapt and innovate. From problem-solving in tech to expressing ideas through art, this approach ensures that students are not only academically competent but also ready for life’s complexities. At Words Worth, we make it simple, unique, and different for your child to thrive in every way.',
        btnText: 'Read more',
        commentCount: '3',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'From Kindergarten to Graduation: The Lifelong Benefits of Having a Mentor.',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'Having a mentor from a young age offers students invaluable guidance throughout their journey, from kindergarten to graduation. As students grow, their needs and aspirations evolve, and so does the role of the mentor. Whether its building confidence in early years or offering career advice later, a mentor provides steady support at every stage. This consistent influence shapes personal and academic development, helping students overcome challenges, set goals, and stay motivated. Mentorship builds trust, resilience, and the confidence to explore new opportunities, creating a lasting impact that extends far beyond school years.At Words Worth, we believe that every child deserves the lifelong benefit of mentorship, shaping a brighter future step by step.',
        btnText: 'Read more',
        commentCount: '4',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'blog thumb rajibraj91 rajibraj',
        title: 'Closing the Gaps: The Role of Online Learning in Enhancing the Traditional Education System',
        author: 'Begrass Tyson',
        date: 'April 23,2022',
        desc: 'Online learning is transforming education by addressing many of the challenges found in traditional classrooms. It offers flexible alternatives to rigid curriculam, allowing students to learn at their own pace and explore subjects that interest them. By breaking down geographic barriers, online education brings quality learning to students no matter where they live. It also shifts away from the one-size-fits-all approach, offering personalized content that meets individual needs. With its accessibility and adaptability, online learning complements the traditional system, closing gaps and ensuring that every student has a chance to succeed.At Words Worth, we embrace online learning to empower students with unique, flexible, and engaging opportunities to excel beyond the classroom.',
        btnText: 'Read more',
        commentCount: '6',
    },
]

const Blog = () =>  {
    return (
        <div className="blog-section padding-tb section-bg" id="blog">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                        {blogList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <Link to="#"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                        </div>
                                        <div className="post-content">
                                            <h4>{val.title}</h4>
                                            
                                            <ShowMore lines={3}
                                            
                                            ><p style={{textAlign:"left",fontSize:"16px"}}>{val.desc}</p></ShowMore>
                                        </div>
                                        {/*<div className="course-footer">
                                                <div className="course-author">
                                                    
                                                </div>
                                                <div className="course-btn">
                                                    <Link  className="lab-btn-text" >{val.btnText} <img src={icon} width="30" height="30" alt={`${val.imgAlt}` } /></Link>
                                                </div>
                                            </div>
                                        */}
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
 
export default Blog;