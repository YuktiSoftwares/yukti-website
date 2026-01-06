import CertificateSection from "pages/Courses/sectionComponents/CertificateSection";
import React from "react";
import certificate from "assets/images/modify_images/Certificate dummy.png";

const HtmlCssCertificateSection = () => {
  return (
    <CertificateSection
      certificateImage={certificate}
      theme={{
        bg: "linear-gradient(135deg, #02163d 0%, #106cae 50%, #ee652a 100%)",
        titleColor: "#ffffffff",
        descColor: "#ffffffff",
        imageBorderColor: "#ffffffff",
      }}
    />
  );
};

export default HtmlCssCertificateSection;
