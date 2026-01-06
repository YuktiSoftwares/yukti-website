import React from "react";
import { School, WorkspacePremium, Code, Groups } from "@mui/icons-material";
import WhyChooseUsSection from "pages/Courses/sectionComponents/WhyChooseUsSection";

const CoreJavaWhyChooseUs = () => {
  return (
    <WhyChooseUsSection
      title="Why Choose Us"
      subtitle="We don't just teach — we transform your future with real skills, real projects, and real guidance."
      theme={{
        gradient: "linear-gradient(135deg, #FDF8F6 0%, #E7F3FC 50%, #E5EAF0 100%)",
        titleColor: "#2A2D33",
        subtitleColor: "#5F6B78",
        descColor: "#5F6B78",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
      points={[
        {
          icon: <WorkspacePremium />,
          title: "Industry-Experienced Mentors",
          description:
            "Learn directly from professionals who build real products and solve real business challenges.",
        },
        {
          icon: <Code />,
          title: "Hands-On Learning",
          description:
            "Every concept backed by real-time projects, tools, and implementation practice.",
        },
        {
          icon: <Groups />,
          title: "Personal Mentorship",
          description: "1:1 doubt support, guidance, and motivation throughout your journey.",
        },
        {
          icon: <School />,
          title: "Career-Focused",
          description: "Interview prep, resume building, portfolio projects & mock interviews.",
        },
      ]}
    />
  );
};

export default CoreJavaWhyChooseUs;
