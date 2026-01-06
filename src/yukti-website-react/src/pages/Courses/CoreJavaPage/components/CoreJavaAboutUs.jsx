import AboutSection from "pages/Courses/sectionComponents/AboutSection";
import React from "react";
import receptionImage from "assets/course/receptionImage.jpg";

const CoreJavaAboutUs = () => {
  return (
    <AboutSection
      highlight={aboutUs.highlight}
      title={aboutUs.title}
      description={aboutUs.desc}
      image={receptionImage}
      theme={{
        bg: "linear-gradient(135deg, #FDF8F6 0%, #E7F3FC 50%, #E5EAF0 100%)",
        highlightColor: "#00eaff",
        textColor: "#2A2D33",
        patternColor: "#D4DFE7",
        descColor: "#5F6B78",
      }}
    />
  );
};

export default CoreJavaAboutUs;
const aboutUs = {
  highlight: "More Than Institute",
  title: "We Build Developers With Real Industry Skills",
  desc: "Yukti Software is a dedicated software development company driven by a belief in the transformative power of technology. We are committed to bridging the gap between the evolving requirements of IT companies and the technical knowledge of emerging talent. By offering structured guidance and support, Yukti Software aims to empower the next generation of developers to thrive in a rapidly changing industry.",
};
