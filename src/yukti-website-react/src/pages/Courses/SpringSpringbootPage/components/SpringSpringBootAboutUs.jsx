import AboutSection from "pages/Courses/sectionComponents/AboutSection";
import React from "react";
import receptionImage from "assets/course/receptionImage.jpg";

const SpringSpringBootAboutUs = () => {
  return (
    <AboutSection
      highlight={aboutUs.highlight}
      title={aboutUs.title}
      description={aboutUs.desc}
      image={receptionImage}
      theme={{
        bg: "linear-gradient(135deg, #f6fadc 0%, #dcf1c1 40%, #bfe7a9 100%)",
        highlightColor: "#00eaff",
        textColor: "#1F2A1C",
        patternColor: "rgba(0, 0, 0, 0.08)",
        descColor: "#6F7D66",
      }}
    />
  );
};

export default SpringSpringBootAboutUs;
const aboutUs = {
  highlight: "More Than Institute",
  title: "We Build Developers With Real Industry Skills",
  desc: "Yukti Software is a dedicated software development company driven by a belief in the transformative power of technology. We are committed to bridging the gap between the evolving requirements of IT companies and the technical knowledge of emerging talent. By offering structured guidance and support, Yukti Software aims to empower the next generation of developers to thrive in a rapidly changing industry.",
};
