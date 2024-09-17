
import { Link } from "react-router-dom";

const subTitle = "Course Catalog";
const title = "Popular Category For Learners";
const btnText = "Browse All Categories";


const categoryList = [
    {
        imgUrl: 'assets/images/category/icon/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Science',
        subtitle: 'Explore the World of Magical Science - Somewhere, something incredible is waiting to be known.',
        count: '28 Course',
        link: '#Science'
    },
    {
        imgUrl: 'assets/images/category/icon/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Reading Comprehension & Writing',
        subtitle: 'The key to great writing lies in understanding what you read.',
        count: '04 Course',
         link: '#Reading'
    },
    {
        imgUrl: 'assets/images/category/icon/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Mathematics',
        subtitle: 'Math sharpens your mind, problem-solving fuels your future.',
        count: '78 Course',
         link: '#Mathematics'
    },
    {
        imgUrl: 'assets/images/category/icon/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Afterschool Program',
        subtitle: 'Beyond school, into endless possibilities',
        count: '24 Course',
        link:'#Afterschool'
    },
    
    {
        imgUrl: 'assets/images/category/icon/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Public Speaking & Creative Writing',
        subtitle: 'A Platform where your Voice & Imagination Meet!',
        count: '27 Course',
         link: '#Public'
    },
   
    
    {
        imgUrl: 'assets/images/category/icon/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        title: 'Coding',
        subtitle: 'Code your way to innovation',
        count: '38 Course',
         link: '#Coding'
    },
]


const Category = () => {
    return (
        <div className="category-section padding-tb" id="category">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-2 justify-content-center row-cols-xl-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="category-item text-center">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={`${val.imgUrl}`} alt={val.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                        <a href={val.link}><h6>{val.title}</h6>
                                        <p className="tw-text-[14px]" style={{textAlign:"center"}}>{val.subtitle}</p>
                                        </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <a href="#courses" className="lab-btn tw-w-[300px] text-center"><span>{btnText}</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Category;