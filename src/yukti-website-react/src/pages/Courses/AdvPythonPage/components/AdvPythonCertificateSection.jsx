import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const AdvPythonCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #306998 0%, #3B82C4 35%, #FFD43B 100%)",
        titleColor: "#fff",
        descColor: "#fff",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default AdvPythonCertificateSection;
