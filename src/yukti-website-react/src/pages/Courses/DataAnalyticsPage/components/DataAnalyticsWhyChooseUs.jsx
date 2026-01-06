import React from "react";
import { School, WorkspacePremium, Code, Groups } from "@mui/icons-material";
import WhyChooseUsSection from "pages/Courses/sectionComponents/WhyChooseUsSection";

const DataAnalyticsWhyChooseUs = () => {
  return (
    <WhyChooseUsSection
      title="Why Choose Us"
      subtitle="We don't just teach — we transform your future with real skills, real projects, and real guidance."
      theme={{
        gradient: "linear-gradient(135deg, #001428 0%, #002A3E 50%, #007C99 90%)",
        titleColor: "#fff",
        subtitleColor: "#fff",
        descColor: "#ffffffff",
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

export default DataAnalyticsWhyChooseUs;
