import EnrollCTASection from "pages/Courses/sectionComponents/EnrollCTASection";
import React from "react";

const DataAnalyticsEnrollCTASection = () => {
  return (
    <EnrollCTASection
      onEnrollClick={() => (window.location.href = "/pages/landing-pages/contact-us")}
      phone="+91-9582815419"
      whatsapp="+91-9582815419"
      email="contact@yuktisoftware.com"
      theme={{
        bg: "#ffffffff",
        buttonColor: "success.main",
        textColor: "#000000ff",
        titleColor: "text.primary",
        subtitleColor: "text.secondary",
      }}
    />
  );
};

export default DataAnalyticsEnrollCTASection;
