import RelatedCourseSection from "pages/Courses/sectionComponents/RelatedCourseSection";
import React from "react";
import jfsdCoverPage from "assets/images/courseImage/jfsd.png";
import pfsdCoverPage from "assets/images/courseImage/pfsd.png";
import htmlcssCoverPage from "assets/images/courseImage/htmlcss.png";
import dataAnalyticsCoverPage from "assets/images/courseImage/dataAnalytics.png";
import datascienceCoverPage from "assets/images/courseImage/datascience.png";
import mernsdCoverPage from "assets/images/courseImage/mernsd.png";
import advancedPython from "assets/images/courseImage/advancedPython.png";
import advjava from "assets/images/courseImage/advjava.png";
import aiml from "assets/images/courseImage/aiml.png";
import corejava from "assets/images/courseImage/corejava.png";
import dbms from "assets/images/courseImage/dbms.png";
import dsa from "assets/images/courseImage/dsa.png";
import javascript from "assets/images/courseImage/javascript.png";
import pythonProg from "assets/images/courseImage/pythonProg.png";
import reactjs from "assets/images/courseImage/reactjs.png";
import springboot from "assets/images/courseImage/spring&springboot.png";

const MERNRelatedCourseSection = () => {
  return (
    <RelatedCourseSection
      title="Explore Our Courses"
      courses={coursesData}
      theme={{
        gradient: "linear-gradient(135deg, #001A19 0%, #024A46 40%, #001A19 100%)",
        titleColor: "#fff",
        cardbgColor: "#ffffffff",
      }}
    />
  );
};

export default MERNRelatedCourseSection;
const coursesData = [
  { slug: "jfsd", name: "Java Full Stack Development", image: jfsdCoverPage },
  { slug: "jfsd", name: "Python Full Stack Development", image: pfsdCoverPage },
  { slug: "mernsd", name: "MERN Stack Development", image: mernsdCoverPage },
  { slug: "htmlcss", name: "HTML & CSS", image: htmlcssCoverPage },
  { slug: "dataAnalytics", name: "Data Analytics", image: dataAnalyticsCoverPage },
  { slug: "datascience", name: "Data Science", image: datascienceCoverPage },
  { slug: "advPython", name: "Advanced Python", image: advancedPython },
  { slug: "advjava", name: "Advanced Java", image: advjava },
  { slug: "corejava", name: "Artificial Intelligence", image: corejava },
  { slug: "aiml", name: "Artificial Intelligence", image: aiml },
  { slug: "dbms", name: "Core Java", image: dbms },
  { slug: "dsa", name: "Data Structure & Algorithm", image: dsa },
  { slug: "javascript", name: "Javascript", image: javascript },
  { slug: "pythonprog", name: "Python", image: pythonProg },
  { slug: "reactjs", name: "React JS", image: reactjs },
  { slug: "springboot", name: "Spring & Springboot", image: springboot },
];
