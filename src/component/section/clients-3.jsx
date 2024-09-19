
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const subTitle = "Testimonials";
const title = "Discover What Our Clients Are Raving About";
const absTitle = "Testimonials";


const clientSliderList = [
    {
        imgUrl: 'assets/images/clients/Female.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'We’ve been engaging WordsWorth Academy for a few months now. I’ve seen remarkable improvement in my son’s writing and comprehension skills. He looks forward to attending these classes. Nisha is personable and her style of teaching is pretty good. I’d recommend WordsWorth Academy to anyone looking for a sincere and dedicated teacher. ',
        name: 'Pooja Bajpai',
        degi: 'Assistant principal',
    },
    {
        imgUrl: 'assets/images/clients/Male.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'We started with WordsWorth Academy as an experiment to see if that changes anything in my son’s reading skills. I’m delighted to see significant improvement in reading and writing skills within a few weeks of starting these sessions. Nisha is very professional and diligent about preparing each session. Her communication is clear and she paces learning sessions well according to the needs of the student. I’d suggest parents try out WordsWorth Academy.',
        name: 'Alok Awasthi',
        degi: 'Payroll bookkeeper',
    },
    {
        imgUrl: 'assets/images/clients/Male.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'WordsWorth Academy has been an incredible find for strengthening our child’s literary skills. Nisha’s dedicated teaching approach has ignited our son’s enthusiasm for reading and writing. Within just a few months, we’ve witnessed remarkable progress in his comprehension and creative writing abilities. Nisha tailors each session thoughtfully, fostering an engaging learning environment. Her professionalism, clear communication, and knack for pacing lessons optimally are truly commendable. We wholeheartedly endorse WordsWorth Academy and Nisha to parents seeking a nurturing, student-centric program that delivers tangible results. Our family is delighted with this fruitful partnership in unlocking our child’s potential.',
        name: 'Sreenivasa',
        degi: 'College instructor',
    },
    {
        imgUrl: 'assets/images/clients/Female.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'I just wanted to say a huge thank you to Nisha for everything she’s done for my daughter. As an only child, my daughter started with just counseling sessions, but Nisha saw so much more potential in her. She suggested making a junk journal, which helped my daughter focus on what she loves and gain clarity on what she doesn’t.Nisha then recommended that my daughter start her own podcast, encouraging her every step of the way. Now, my daughter handles all the scripting, editing, and production on her own. Recently, she has also started her own blog, where she encourages kids to read and improve their vocabulary.Not only has Nisha helped her with her podcast, but she’s also taught her to believe in herself and stand up for herself. Nisha’s guidance and support have been amazing, helping my daughter explore her creativity and build her confidence. The skills and self-assurance she’s gained are truly priceless. What’s even more incredible is how Nisha has shown her the importance of standing up for herself. This has made such a big difference in her life, giving her the courage to assert herself and recognize her own worth.We really appreciate all the dedication and care Nisha has shown. She has gone above and beyond to inspire and nurture my daughter’s talents.Thanks so much, Nisha, for being such a positive influence in her life. ',
        name: 'Bhumi',
        degi: 'College instructor',
    },
    {
        imgUrl: 'assets/images/clients/Female.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'We were introduced to WordsWorth through a referral from a friend who spoke very highly of the program. Initially, we decided to give it a try, and it turned out to be an amazing decision for our daughter. Within just a month, we noticed significant positive changes in her. She became more confident, learned to stand up for herself, and found a true companion in WordsWorth that guided her to achieve great things.In a few months, our daughter launched her own podcast, and her confidence soared. Recently, she also started a blog. WordsWorth has truly uncovered her inner talent and helped her become a better person. We highly recommend it to anyone looking to nurture and develop their childWe were introduced to WordsWorth through a referral from a friend who spoke very highly of the program. Initially, we decided to give it a try, and it turned out to be an amazing decision for our daughter. Within just a month, we noticed significant positive changes in her. She became more confident, learned to stand up for herself, and found a true companion in WordsWorth that guided her to achieve great things.In a few months, our daughter launched her own podcast, and her confidence soared. Recently, she also started a blog. WordsWorth has truly uncovered her inner talent and helped her become a better person. We highly recommend it to anyone looking to nurture and develop their child’s potential.',
        name: 'From a Proud Dad !',
        degi: 'College instructor',
    },
]

const ClientsThree = () => {
    return (
        <div className="clients-section style-3 padding-tb" id="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle tw-text-[#f16126]">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                    <h2 className="abs-title">{absTitle}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="clients-slider2 overflow-hidden">
                        <Swiper
                            loop={'true'}
                            autoHeight= {'true'}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.clients-slider2-prev',
                                nextEl: '.clients-slider2-next',
                            }}
                            modules={[Autoplay, Navigation]}
                        >
                            {clientSliderList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="client-item">
                                        <div className="client-inner">
                                            <div className="client-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                <div className="quote">
                                                    <i className={val.iconNane}></i>
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <p>{val.desc}</p>
                                                <div className="client-info">
                                                    <h6 className="client-name" style={{fontSize:"22px",fontWeight:"800"}}>{val.name}</h6>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="clients-slider-nav clients-slider2-next"><i className="icofont-double-left"></i></div>
                        <div className="clients-slider-nav clients-slider2-prev"><i className="icofont-double-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ClientsThree;