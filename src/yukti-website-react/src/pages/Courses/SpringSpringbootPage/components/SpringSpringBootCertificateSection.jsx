import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const SpringSpringBootCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #f6fadc 0%, #dcf1c1 40%, #bfe7a9 100%)",
        titleColor: "#4E5D47",
        descColor: "#6F7D66",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default SpringSpringBootCertificateSection;
