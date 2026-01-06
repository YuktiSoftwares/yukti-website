import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const CoreJavaCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #FDF8F6 0%, #E7F3FC 50%, #E5EAF0 100%)",
        titleColor: "#2A2D33",
        descColor: "#5F6B78",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default CoreJavaCertificateSection;
