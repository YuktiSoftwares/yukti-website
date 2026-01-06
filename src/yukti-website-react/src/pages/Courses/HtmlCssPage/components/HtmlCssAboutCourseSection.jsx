import AboutCourseSection from "pages/Courses/sectionComponents/AboutCourseSection";
import React from "react";

const HtmlCssAboutCourseSection = () => {
  return (
    <AboutCourseSection
      title={aboutCourse.title}
      description={aboutCourse.desc}
      points={aboutCourse.points}
      theme={{
        bg: "linear-gradient(135deg, #02163d 0%, #106cae 50%, #ee652a 100%)",
        titleColor: "#fff",
        descColor: "rgba(255,255,255,0.85)",
        pointTitleColor: "#fff",
        pointBg: "rgba(255,255,255,0.08)",
      }}
    />
  );
};

export default HtmlCssAboutCourseSection;

const aboutCourse = {
  title: "About HTML & CSS Course",
  desc: "The HTML & CSS course provides a strong foundation in front-end web development, teaching how to structure webpages with HTML and style them beautifully with CSS. This course helps you build modern, responsive, and visually appealing websites from scratch.",
  points: [
    {
      title: "HTML Fundamentals",
      subtitle:
        "Learn tags, elements, attributes, forms, tables, and semantic HTML to structure clean and meaningful webpages.",
    },
    {
      title: "CSS Basics",
      subtitle:
        "Understand selectors, properties, colors, fonts, spacing, and layout techniques for styling webpages.",
    },
    {
      title: "Responsive Web Design",
      subtitle:
        "Build mobile-friendly layouts using media queries, flexbox, and grid systems for all screen sizes.",
    },
    {
      title: "CSS Box Model & Positioning",
      subtitle:
        "Master margins, padding, borders, display types, and positioning systems to control layout structure.",
    },
    {
      title: "Forms & UI Styling",
      subtitle:
        "Design user-friendly forms, buttons, and interface elements for real web projects.",
    },
    {
      title: "Animations & Transitions",
      subtitle:
        "Add smooth animations, hover effects, and transitions to enhance website interactions.",
    },
    {
      title: "Website Project",
      subtitle:
        "Build a complete, responsive website layout and landing pages using pure HTML & CSS.",
    },
  ],
};
