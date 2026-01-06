import RoadmapHorizontal from "pages/Courses/sectionComponents/components/roadmap/RoadMapHorizontal";
import RoadmapVertical from "pages/Courses/sectionComponents/components/roadmap/RoadMapVertical";
import RoadmapZigzag from "pages/Courses/sectionComponents/components/roadmap/RoadmapZigzag";
import React from "react";

const AdvJavaRoadMapSection = () => {
  return (
    <>
      <RoadmapZigzag
        items={roadmap}
        glowColor="#00E5FF"
        lineColor="rgba(255,255,255,0.12)"
        bg="linear-gradient(180deg,#020617,#071233)"
        showIndex={true}
        theme={{ cardBg: "rgba(255,255,255,0.03)", titleColor: "#E6F8FF" }}
      />

      <RoadmapVertical
        items={roadmap}
        glowColor="#7C4DFF"
        lineColor="#4f46e5"
        bg="transparent"
        theme={{ titleColor: "#fff", subtitleColor: "rgba(255,255,255,0.85)" }}
      />

      <RoadmapHorizontal
        items={roadmap}
        stageBg="rgba(255,255,255,0.03)"
        activeGlow="#00C9A7"
        theme={{ titleColor: "#fff" }}
      />
    </>
  );
};

export default AdvJavaRoadMapSection;

const roadmap = [
  { title: "Intro & Fundamentals", subtitle: "Environment, basic syntax and tools" },
  { title: "Frontend Essentials", subtitle: "HTML, CSS, JS, React basics" },
  { title: "Backend Essentials", subtitle: "Node, Express, DB design" },
  { title: "Deployment & DevOps", subtitle: "CI/CD, Docker, Hosting" },
];
