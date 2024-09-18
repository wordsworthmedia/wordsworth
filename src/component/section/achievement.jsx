
import CountUp from 'react-countup';

const subTitle = "A Platform That Sparks Curiosity and Guides You Forward";
const title = "Students & Teachers - Partners In A Journey Of Lifelong Learning.";


const achievementList = [
    {
        count: '30',
        desc: 'Years of Language Education Experience',
    },
    {
        count: '3084',
        desc: 'Learners Enrolled in Edukon Courses',
    },
    {
        count: '330',
        desc: 'Qualified Teachers And Language Experts',
    },
    {
        count: '2300',
        desc: 'Innovative Foreign Language Courses',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Start Teaching Today',
        desc: 'Unleash Your Teaching Potential at WordsWorth! Join us in shaping young minds and making a real impact',
        btnText: 'Become An Instructor',
        siteLink: 'https://wa.link/con324',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Learn From Anywhere',
        desc: 'Explore our diverse course and learn from anywhere! Connect with our expert academic advisors for personalised guidance and support',
        btnText: 'Speak to an Expert',
        siteLink: 'https://wa.link/con324',
    },
]


const Achievement = () => {
    return (
        <div className="achievement-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <center>
                        <a href="/bookdemo" ><button className='lab-btn tw-w-[250px] rounded text-white'>Book A Demo</button></a>
                        </center>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="achieve-content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                                <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievement;