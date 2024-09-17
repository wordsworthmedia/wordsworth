import { Component, Fragment, useEffect } from "react";
import {useLocation} from "react-router-dom";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Blog from "../component/section/blog";
import Category from "../component/section/category";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import Video from "../component/section/video";
import Testimonials from "../component/section/clients-3";

const Home = () => {
  const location = useLocation()
  useEffect(()=>{
    console.log(location);
    
  },[location])
  return (
    <Fragment>
      <Header />
      <Banner />
      <Category />
      <Course />
      <Instructor />
      <Student />
      <Blog />
      
      <Testimonials />
      <Achievement />
      <Footer />
    </Fragment>
  );
};

export default Home;
