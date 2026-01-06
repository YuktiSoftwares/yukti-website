import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const JavaScriptCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(90deg, #FFFEF6 0%, #FCF7EC 50%, #F5F2E7 100%)",
        titleColor: "#2B2B2B",
        descColor: "#7B7B6D",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default JavaScriptCertificateSection;
