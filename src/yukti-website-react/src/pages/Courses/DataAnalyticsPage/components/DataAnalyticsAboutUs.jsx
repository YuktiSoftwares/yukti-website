import AboutSection from "pages/Courses/sectionComponents/AboutSection";
import React from "react";
import receptionImage from "assets/course/receptionImage.jpg";

const DataAnalyticsAboutUs = () => {
  return (
    <AboutSection
      highlight={aboutUs.highlight}
      title={aboutUs.title}
      description={aboutUs.desc}
      image={receptionImage}
      theme={{
        bg: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        highlightColor: "#00eaff",
        textColor: "#ffffff",
        patternColor: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default DataAnalyticsAboutUs;
const aboutUs = {
  highlight: "More Than Institute",
  title: "We Build Developers With Real Industry Skills",
  desc: "Yukti Software is a dedicated software development company driven by a belief in the transformative power of technology. We are committed to bridging the gap between the evolving requirements of IT companies and the technical knowledge of emerging talent. By offering structured guidance and support, Yukti Software aims to empower the next generation of developers to thrive in a rapidly changing industry.",
};
