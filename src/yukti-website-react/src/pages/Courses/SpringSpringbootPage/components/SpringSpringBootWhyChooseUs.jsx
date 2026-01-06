import React from "react";
import { School, WorkspacePremium, Code, Groups } from "@mui/icons-material";
import WhyChooseUsSection from "pages/Courses/sectionComponents/WhyChooseUsSection";

const SpringSpringBootWhyChooseUs = () => {
  return (
    <WhyChooseUsSection
      title="Why Choose Us"
      subtitle="We don't just teach — we transform your future with real skills, real projects, and real guidance."
      theme={{
        gradient: "linear-gradient(135deg, #f6fadc 0%, #dcf1c1 40%, #bfe7a9 100%)",
        titleColor: "#4E5D47",
        subtitleColor: "#6F7D66",
        descColor: "#6F7D66",
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

export default SpringSpringBootWhyChooseUs;
