import AboutInstructorSection from "pages/Courses/sectionComponents/AboutInstructorSection";
import React from "react";

const DataAnalyticsAboutInstructor = () => {
  return (
    <AboutInstructorSection
      theme={{
        gradient: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        textColor: "#ffffffff",
        titleColor: "#fff",
        subtitleColor: "#fff",
      }}
      title={aboutInstructor.title}
      subtitle={aboutInstructor.subtitle}
      points={aboutInstructor.points}
    />
  );
};

export default DataAnalyticsAboutInstructor;
const aboutInstructor = {
  title: "Know Your Mentors",
  subtitle:
    " You dont learn from trainers — you learn from professionals who build & solve real-world challenges.",
  points: [
    {
      title: "Extensive Industry Experience",
      subtitle:
        "14+ years of professional experience in the IT industry delivering real-world software solutions.",
    },
    {
      title: "Teaching Excellence",
      subtitle:
        "5+ years of dedicated teaching and mentoring experience, guiding students to become industry-ready developers.",
    },
    {
      title: "Highly Qualified Mentors",
      subtitle:
        "Mentored by experts holding M.Tech degrees from NIT Calicut with deep technical expertise.",
    },
    {
      title: "Global Certifications",
      subtitle:
        "Mentors certified by Oracle & AWS ensuring globally recognized skills and training standards.",
    },
    {
      title: "Enterprise-Grade Expertise",
      subtitle:
        "Hands-on experience in building scalable enterprise applications, SaaS systems, and production-level software.",
    },
    {
      title: "Placement-Focused Mentorship",
      subtitle:
        "Trained students who cracked top-tier IT roles with a focus on practical skills, problem-solving, and project mastery.",
    },
    {
      title: "Modern Tech Stack Mastery",
      subtitle:
        "Guidance in modern stacks — MERN, DevOps, Cloud, DSA, system design & industry-standard tools.",
    },
    {
      title: "1-to-1 Learning Support",
      subtitle:
        "Personal mentorship, doubt resolution, and individual guidance to ensure every student succeeds.",
    },
    {
      title: "Project-Oriented Training",
      subtitle:
        "Learn real tools, version control, deployment workflows, and coding standards used in top tech companies.",
    },
    {
      title: "Career & Mindset Development",
      subtitle:
        "Focus on technical foundation, communication, professionalism, and confidence building.",
    },
  ],
};
