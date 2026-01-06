import HeroSection from "pages/Courses/sectionComponents/HeroSection";
import React from "react";
import fsd from "assets/course/fsd.png";

const AdvPythonHeroSection = () => {
  return (
    <HeroSection
      title="React Mastery Program"
      subtitle="Learn to build real-world modern UI with React, MUI, APIs & Deployment."
      theme={{
        gradient: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        titleColor: "#fff",
        subtitleColor: "rgba(255,255,255,0.85)",
        buttonColor: "#61dafb",
      }}
      primaryActionText="Join Now"
      onPrimaryClick={() => console.log("clicked")}
      image={fsd}
    />
  );
};

export default AdvPythonHeroSection;
