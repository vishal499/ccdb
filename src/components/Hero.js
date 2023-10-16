import React from "react";
import hero from "../assets/images/hero_img.png";

const Hero = () =>{
     return(<>

      <div className="hero">

        <div className="leftside">
           
           <h2>Course Critique</h2>

           <h1>Database</h1>

           <p>An online database that contains information 
           about online courses and more. The database
           includes course instructors details,
           course details, ratings, and reviews. CCDb is the largest and most 
           comprehensive online course database on the web.</p>


           <a href="#">Explore Courses</a>


        </div>



        <div className="rightside">
         
        <img src={hero} alt="hero logo" />

        </div>




      </div>







     </>);
};

export default Hero;