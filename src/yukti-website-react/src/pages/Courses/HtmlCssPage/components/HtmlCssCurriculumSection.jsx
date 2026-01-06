import CurriculumSection from "pages/Courses/sectionComponents/CurriculumSection";
import React from "react";

const HtmlCssCurriculumSection = () => {
  return (
    <CurriculumSection
      title="Curriculum"
      subtitle="A step-by-step learning path designed to make you job-ready"
      curriculumList={curriculumData}
      theme={{
        gradient: "linear-gradient(135deg, #02163d 0%, #106cae 50%, #ee652a 100%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        curriculumTitleColor: "#fff",
        curriculumSubtitleColor: "#fff",
        curriculumDescColor: "#fff",
      }}
    />
  );
};

export default HtmlCssCurriculumSection;

const curriculumData = [
  {
    moduleTitle: "Basic HTML Fundamentals",
    moduleDescription:
      "Comprehensive introduction to HTML, covering essential tags, text formatting, and core web page structure concepts.",
    topics: [
      "Meet HTML – The Language of the Web",
      "Understanding HTML Tags – The Building Blocks of a Web Page",
      "Text Formatting in HTML – Styling Content the Right Way",
      "Attributes in HTML",
      "Types of Elements in HTML",
      "Hyperlinks in HTML",
      "Working with Images in HTML",
      "Image Mapping",
      "Lists & Accordion in HTML",
      "Anatomy of an HTML Document",
    ],
  },
  {
    moduleTitle: "Advanced HTML Features",
    moduleDescription:
      "Advanced HTML elements and modern features including multimedia, forms, semantic markup, and scalable graphics.",
    topics: [
      "Embedding Content with <iframe>",
      "Working with the <video> Element",
      "Playing Sounds with the <audio> Element",
      "Creating Tables in HTML",
      "Forms in HTML",
      "Semantic Tags in HTML5",
      "Favicon: The Little Icon with a Big Impact",
      "HTML Symbols: Writing the Unwritable",
      "SVG in HTML – Scalable Vector Graphics",
    ],
  },
  {
    moduleTitle: "CSS Fundamentals",
    moduleDescription:
      "Core CSS concepts including selectors, styling properties, typography, and the essential box model for web design.",
    topics: [
      "Introduction to CSS",
      "CSS Selectors",
      "Basic Styling Properties",
      "Typography with Font Properties",
      "Background Properties",
      "Text Properties",
      "Box Model",
      "Margin, Padding, Border",
      "Hands-on Coding Exercises",
    ],
  },
  {
    moduleTitle: "Advanced CSS & Layouts",
    moduleDescription:
      "Modern CSS techniques including responsive design, advanced layouts, animations, and professional development workflows.",
    topics: [
      "Layout and Positioning",
      "CSS Floating and Clearing",
      "CSS Flexbox",
      "CSS Grid Layout",
      "CSS Multi-Column Layout",
      "CSS Gradients",
      "CSS Transform, Transition, and Animation",
      "Responsive Design",
      "Modern CSS Features",
      "CSS Counters",
      "CSS Preprocessors & Frameworks",
      "Debugging CSS",
    ],
  },
];
