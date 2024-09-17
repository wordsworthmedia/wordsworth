const subTitle = "Online education";
const title = (
  <h3 className="title" style={{ fontSize: "45px" }}>
    <span className="d-lg-block">Unlock Brilliance: Tailored 1:1 <br></br>Online Courses for Every Child’s Unique Journey</span></h3>
);
const desc = "Experienced Educators | Customized Learning Plans | Flexible Online Classes";

const catagoryList = [
  {
    name: "Comprehension & Writing",
    link: "#",
  },
  
  {
    name: "Mathematics",
    link: "#",
  },
  {
    name: "Coding",
    link: "#",
  },
];

const shapeList = [
  {
    name: "Focused Education",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "Innovative Courses",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "Personal Mentoring",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "Active Learning",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "Well Rounded Mastery",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  return (
    <section className="banner-section" >
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content" >
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc" style={{fontSize:'16px'}}>{desc}</p>

                
                <br></br>
                <a href="/bookdemo" className="lab-btn tw-w-[250px] text-center"><span>Book A Free Trial</span></a>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/01.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list" >
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a>{val.name}</a>
            </li>
          ))}
        </ul>
        
      </div>
      
    </section>
  );
};

export default Banner;
