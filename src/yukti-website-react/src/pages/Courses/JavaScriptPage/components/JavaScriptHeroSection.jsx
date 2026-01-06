import HeroSection from "pages/Courses/sectionComponents/HeroSection";
import React from "react";
import fsd from "assets/course/fsd.png";

const JavaScriptHeroSection = () => {
  return (
    <HeroSection
      title="React Mastery Program"
      subtitle="Learn to build real-world modern UI with React, MUI, APIs & Deployment."
      theme={{
        gradient: "linear-gradient(90deg, #FFFEF6 0%, #FCF7EC 50%, #F5F2E7 100%)",
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

export default JavaScriptHeroSection;
