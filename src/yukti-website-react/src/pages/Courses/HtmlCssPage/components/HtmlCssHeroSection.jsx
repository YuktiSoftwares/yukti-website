import HeroSection from "pages/Courses/sectionComponents/HeroSection";
import React from "react";
import fsd from "assets/course/fsd.png";

const HtmlCssHeroSection = () => {
  return (
    <HeroSection
      title="React Mastery Program"
      subtitle="Learn to build real-world modern UI with React, MUI, APIs & Deployment."
      theme={{
        gradient: "llinear-gradient(135deg, #02163d 0%, #106cae 50%, #ee652a 100%)",
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

export default HtmlCssHeroSection;
