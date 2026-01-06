import OurFeaturesSection from "pages/Courses/sectionComponents/OurFeaturesSection";
import React from "react";

const DbmsOurFeaturesSection = () => {
  return (
    <OurFeaturesSection
      title={ourFeatures.title}
      subtitle={ourFeatures.subtitle}
      features={ourFeatures.features}
      theme={{
        bg: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        cardBg: "rgba(255,255,255,0.05)",
        cardHover: "rgba(255,255,255,0.12)",
        iconColor: "#00eaff",
      }}
    />
  );
};

export default DbmsOurFeaturesSection;
const ourFeatures = {
  title: "Our Features",
  subtitle: "A learning ecosystem built for future engineers",
  features: [
    {
      icon: "🌱",
      title: "Beginner-Friendly Start",
      text: "Starts from very basic and builds strong fundamentals",
    },
    {
      icon: "📄",
      title: "Resume Preparation",
      text: "Create an impactful, industry-standard resume",
    },
    {
      icon: "💻",
      title: "Live Projects",
      text: "Build real-world applications to strengthen your portfolio",
    },
    {
      icon: "🎤",
      title: "Mock Interviews",
      text: "Practice interviews with experts to boost confidence",
    },
    {
      icon: "📚",
      title: "Industry-Ready Curriculum",
      text: "Courses tailored to match real industry requirements",
    },
    {
      icon: "⚙️",
      title: "Practical Based Learning",
      text: "Hands-on sessions focused on real-time problem solving",
    },
    {
      icon: "🎓",
      title: "Learn From NITians",
      text: "Mentorship from highly experienced NIT professionals",
    },
    {
      icon: "🧑‍🏫",
      title: "1-to-1 Doubt Support",
      text: "Personal attention & individual doubt clearance",
    },
    {
      icon: "🏅",
      title: "Certification",
      text: "Earn a verified certificate to showcase your skills",
    },

    // // ✅ Added High-Value Features
    // { icon: "🧠", title: "DSA + System Design", text: "Strong problem-solving & architecture fundamentals" },
    {
      icon: "🎯",
      title: "Placement Assistance",
      text: "Job referrals, guidance & interview support",
    },
    {
      icon: "📁",
      title: "Portfolio Development",
      text: "Build a standout project portfolio for hiring managers",
    },
    {
      icon: "🤝",
      title: "Industry Mentorship",
      text: "Work with professionals guiding your career path",
    },
    {
      icon: "👨‍💼",
      title: "Soft Skills Training",
      text: "Improve communication & professional etiquette",
    },
    {
      icon: "🕒",
      title: "Flexible Learning",
      text: "Live + recorded sessions for convenient learning",
    },
    {
      icon: "🔥",
      title: "Hackathons & Challenges",
      text: "Participate in coding challenges to boost confidence",
    },
    {
      icon: "🚀",
      title: "Startup & Freelancing Guidance",
      text: "Learn how to get freelance clients & startup basics",
    },
  ],
};
