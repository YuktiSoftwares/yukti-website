import bgImage from "assets/images/collaborations/rkgitCollabbg.png";
import dashboardImg from "assets/images/modify_images/yuktiBuilder/dashboard.png";
import personImg from "assets/images/modify_images/yuktiBuilder/person.png";
import reportsImg from "assets/images/modify_images/yuktiBuilder/reports.png";
import usersImg from "assets/images/modify_images/yuktiBuilder/users.png";

import img1 from "assets/images/collaborations/img1.jpg";
import img2 from "assets/images/collaborations/img2.jpg";
import img4 from "assets/images/collaborations/img4.jpeg";

export const pageData = {
  hero: {
    title: "RKGIT Students’ Contribution to Yukti Builder",
    subtitle:
      "A collaborative initiative where RKGIT students co-developed key modules and UI components for Yukti Builder — gaining production experience while strengthening our product.",
    // heroImage should be a wide banner (16:6 or similar). Replace with your own.
    heroImage: bgImage,
    ctaText: "See Contributions",
  },
  features: [
    {
      id: "dashboard",
      title: "Dashboard",
      description:
        "A centralized dashboard providing real-time insights, quick actions, and visual performance metrics of Yukti Builder. Students contributed to UI layout, data cards, and state-driven metric updates.",
      image: dashboardImg,
      highlight: "Overview & Insights",
    },
    {
      id: "person",
      title: "Person Management",
      description:
        "Module to manage all individuals involved in a project — clients, workers, vendors, supervisors. Students developed forms, validations, and list views for smooth data handling.",
      image: personImg,
      highlight: "Data Handling",
    },
    {
      id: "reports",
      title: "Reports",
      description:
        "Comprehensive reporting section with filters, dynamic data rendering, and printable summaries. Students worked on report layouts and API-driven data population.",
      image: reportsImg,
      highlight: "Analytics",
    },
    {
      id: "users",
      title: "Users",
      description:
        "User module to create and manage system users with roles and permissions. Students helped with table UI, permission UI logic, and user creation flows.",
      image: usersImg,
      highlight: "Role Management",
    },
  ],
  contributors: [
    {
      name: "Aayush Singh",
      branch: "CSE - 3rd Year",
      role: "Dashboard UI & Metrics Cards",
      image: "/images/rkgit/students/aayush.jpg",
    },
    {
      name: "Priya Sharma",
      branch: "CSE - 3rd Year",
      role: "Person Module – Forms & Validations",
      image: "/images/rkgit/students/priya.jpg",
    },
    {
      name: "Aditya Verma",
      branch: "IT - 2nd Year",
      role: "Reports – Data Rendering & Filters",
      image: "/images/rkgit/students/aditya.jpg",
    },
    {
      name: "Harshita Mishra",
      branch: "CSE - 3rd Year",
      role: "Users Module – Roles & Permission UI",
      image: "/images/rkgit/students/harshita.jpg",
    },
  ],

  gallery: [img1, img2, img4],
  closing: {
    title: "A Partnership That Builds Talent",
    text: "We thank RKGIT students and faculty for their dedication and creativity. This collaboration helped students gain production experience while accelerating Yukti Builder development.",
  },
};
