import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const AdvJavaCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(120deg, #001E3B 0%, #004B82 55%, #D55E33 100%)",
        titleColor: "#ffffffff",
        descColor: "#ffffffff",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default AdvJavaCertificateSection;
