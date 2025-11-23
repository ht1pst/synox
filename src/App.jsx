import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./Home/Hero"
import Section2 from "./Home/Section2"
import Section3 from "./Home/Section3"
import Section4 from "./Home/Section4"
import Section5 from "./Home/Section5"
import Section6 from "./Home/Section6"
import Section7 from "./Home/Section7"
import Section8 from "./Home/Section8"
import Footer from "./Home/Footer"


// New import
import OurHero from "./Services/OurHero";
import OurSection2 from "./Services/OurSection2";
import OurSection3 from "./Services/OurSection3";
import DetailsHero from "./ServicesDetails/DetailsHero";
import DetailsSection2 from "./ServicesDetails/DetailsSection2";
import Footer2 from "./Services/Footer2";
import Footer3 from "./Services/Footer3";
import OurSection4 from "./Services/OurSection4";

// New import
import ProjectsHero from "./Projects/ProjectsHero";
import ProjectsSection2 from "./Projects/ProjectsSection2";

// New import
import ProjDetailsHero from "./Projects Details/ProjDetailsHero";
import ProjDetailsSection2 from "./Projects Details/ProjDetailsSection2";


// New import
import PricingHero from "./Pricing/PricingHero";
import PricingSection2 from "./Pricing/PricingSection2";
import PricingSection3 from "./Pricing/PricingSection3";


function App() {
 return( 
  <Router>
    <main>
      <Routes>
         <Route
            path="/"
            element={
              <>
              
                <Hero />
               <Section2/>
               <Section3/>
               <Section4/>
               <Section5/>
               <Section6/>
                <Section7/>
                <Section8/>
                <Footer/>
              </>
            }
          />

          <Route
            path="/our"
            element={
              <>
              <OurHero/>
              <OurSection2/>
               <OurSection3/>
              <OurSection4/>
              <Footer2/>
               
              </>
            }
          />


          <Route
            path="/details"
            element={
              <>
              <DetailsHero/>
               <DetailsSection2/>
               <Footer2/>
              </>
            }
          />


           <Route
            path="/projects"
            element={
              <>
              <ProjectsHero/>
               <ProjectsSection2/>
               <Footer2/>
              </>
            }
          />


            <Route
            path="/details2"
            element={
              <>
             <ProjDetailsHero/>
             <ProjDetailsSection2/>
              <Footer2/>
              </>
            }
          />


           <Route
            path="/pricing"
            element={
              <>
            <PricingHero/>
            <PricingSection2/>
            <PricingSection3/>
            <Footer2/>
              </>
            }
          />



      </Routes>
    </main>
  </Router>
  );
}

export default App
