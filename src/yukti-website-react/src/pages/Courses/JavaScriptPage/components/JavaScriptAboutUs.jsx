import AboutSection from "pages/Courses/sectionComponents/AboutSection";
import React from "react";
import receptionImage from "assets/course/receptionImage.jpg";

const JavaScriptAboutUs = () => {
  return (
    <AboutSection
      highlight={aboutUs.highlight}
      title={aboutUs.title}
      description={aboutUs.desc}
      image={receptionImage}
      theme={{
        bg: "linear-gradient(90deg, #FFFEF6 0%, #FCF7EC 50%, #F5F2E7 100%)",
        highlightColor: "#00eaff",
        textColor: "#2B2B2B",
        patternColor: "rgba(0, 0, 0, 0.05)",
        descColor: "#7B7B6D",
      }}
    />
  );
};

export default JavaScriptAboutUs;
const aboutUs = {
  highlight: "More Than Institute",
  title: "We Build Developers With Real Industry Skills",
  desc: "Yukti Software is a dedicated software development company driven by a belief in the transformative power of technology. We are committed to bridging the gap between the evolving requirements of IT companies and the technical knowledge of emerging talent. By offering structured guidance and support, Yukti Software aims to empower the next generation of developers to thrive in a rapidly changing industry.",
};
