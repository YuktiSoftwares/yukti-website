import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const JFSDAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #8945CB, #451E93, #270D6E)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default JFSDAboutCourseSection;

const aboutCourse = {
  title: "About Full Stack Development Course",
  desc: "Full Stack Development refers to the end-to-end process of building a complete web application — covering both the frontend (client side) and backend (server side) parts, along with database management and deployment. A Full Stack Developer is someone skilled in all these layers, capable of developing, integrating, and maintaining every part of a web application.",
  points: [
    {
      title: "Frontend Development",
      subtitle:
        "This is the part users see and interact with — the UI (User Interface) and UX (User Experience).",
    },
    {
      title: "Backend Development",
      subtitle:
        "This is the “brain” of the application — it handles business logic, authentication, database interactions, and API creation.",
    },
    {
      title: "Database",
      subtitle: "Databases store, retrieve, and manage all the data used by the application.",
    },
    {
      title: "Tools & Technologies",
      subtitle:
        "After development, applications need to be tested, deployed, and maintained. The tools ensure smooth collaboration and delivery.",
    },
  ],
};
