import React from "react";
import { School, WorkspacePremium, Code, Groups } from "@mui/icons-material";
import WhyChooseUsSection from "pages/Courses/sectionComponents/WhyChooseUsSection";

const JavaScriptWhyChooseUs = () => {
  return (
    <WhyChooseUsSection
      title="Why Choose Us"
      subtitle="We don't just teach — we transform your future with real skills, real projects, and real guidance."
      theme={{
        gradient: "linear-gradient(90deg, #FFFEF6 0%, #FCF7EC 50%, #F5F2E7 100%)",
        titleColor: "#2B2B2B",
        subtitleColor: "#7B7B6D",
        descColor: "#7B7B6D",
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

export default JavaScriptWhyChooseUs;
