import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const JFSDCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #8945CB, #451E93, #270D6E)",
        titleColor: "#ffffffff",
        descColor: "#ffffffff",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default JFSDCertificateSection;
