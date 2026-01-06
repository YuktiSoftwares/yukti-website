import AboutSection from "pages/Courses/sectionComponents/AboutSection";
import React from "react";
import receptionImage from "assets/course/receptionImage.jpg";

const AdvJavaAboutUs = () => {
  return (
    <AboutSection
      highlight={aboutUs.highlight}
      title={aboutUs.title}
      description={aboutUs.desc}
      image={receptionImage}
      theme={{
        bg: "linear-gradient(120deg, #001E3B 0%, #004B82 55%, #D55E33 100%)",
        highlightColor: "#D55E33",
        textColor: "#fff",
        patternColor: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default AdvJavaAboutUs;
const aboutUs = {
  highlight: "More Than Institute",
  title: "We Build Developers With Real Industry Skills",
  desc: "Yukti Software is a dedicated software development company driven by a belief in the transformative power of technology. We are committed to bridging the gap between the evolving requirements of IT companies and the technical knowledge of emerging talent. By offering structured guidance and support, Yukti Software aims to empower the next generation of developers to thrive in a rapidly changing industry.",
};
