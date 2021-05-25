import React from "react"
import NavBarRender from "../components/navbar/NavBarRender";
import HeroSection from './../components/hero/hero';
import ShorteningSection from "../components/shortening/shortening";
import Action from "../components/actions/action";
import Footer from "../components/footer/footer";
import '@fontsource/poppins';

import '../styles/home.scss';

 function Home() {

  return (
    <div className="wrapper">
      <NavBarRender/>
      <HeroSection/>
      <ShorteningSection/>
      <Action/>
      <Footer />
      
    </div>
  )
}

export default Home;