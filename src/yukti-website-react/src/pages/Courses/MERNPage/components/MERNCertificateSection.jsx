import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const MERNCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #001A19 0%, #024A46 40%, #001A19 100%)",
        titleColor: "#ffffffff",
        descColor: "#ffffffff",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default MERNCertificateSection;
