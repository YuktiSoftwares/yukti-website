/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import React from "react";
// Material Kit 2 React examples
// import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// import constant from "assets/my_constants/constant";
import PortraitTeamCard from "examples/Cards/TeamCards/PortraitTeamCard";

import ManishaPortrait from "assets/images/modify_images/manishachair.jpg";
import intekhab_image from "assets/images/modify_images/intekhab_image.png";
import mithilesh from "assets/images/modify_images/mithilesh.png";
import sanjay from "assets/images/modify_images/sanjaySir.jpg";

// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import SchoolIcon from "@mui/icons-material/School";
// import PeopleIcon from "@mui/icons-material/People";
// import PublicIcon from "@mui/icons-material/Public";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        {teamMembers.map((member, index) => (
          <Grid
            container
            item
            xs={11}
            spacing={3}
            alignItems="center"
            sx={{ mx: "auto" }}
            key={index}
          >
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
              <PortraitTeamCard image={member.image} name={member.name} title={member.title} />
            </Grid>
            <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
              <Grid container spacing={3}>
                {member.details.map((detail, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <DefaultInfoCard
                      icon={detail.icon}
                      title={detail.title}
                      description={detail.desc}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Container>
    </MKBox>
  );
}

export default Information;
const teamMembers = [
  {
    name: "Manisha Kumari",
    title: "Founder & CEO",
    image: ManishaPortrait,
    details: [
      {
        icon: "emoji_objects",
        title: "Vision & Strategy",
        desc: "Leading Yukti Softwares with a clear vision, driving innovation, and ensuring long-term growth in the IT industry.",
      },
      {
        icon: "work",
        title: "Industry Expertise",
        desc: "Over a decade of experience in IT and business leadership, ensuring high-quality software solutions and services.",
      },
      {
        icon: "groups",
        title: "Team Empowerment",
        desc: "Building a strong, motivated team by fostering collaboration, innovation, and continuous learning.",
      },
      {
        icon: "public",
        title: "Global Expansion",
        desc: "Expanding Yukti Softwares' presence by delivering impactful software solutions to a global market.",
      },
    ],
  },
  {
    name: "Mithilesh Kumar",
    title: "CTO",
    image: mithilesh,
    details: [
      {
        icon: "engineering",
        title: "Technical Leadership",
        desc: "Guiding the company with innovative tech solutions.",
      },
      {
        icon: "code",
        title: "Software Development",
        desc: "Expert in designing scalable & robust applications.",
      },
      {
        icon: "business",
        title: "Project Management",
        desc: "Overseeing project execution & technology strategies.",
      },
      {
        icon: "history",
        title: "14+ Years Experience",
        desc: "Extensive experience in IT & enterprise solutions.",
      },
    ],
  },
  {
    name: "Sanjay Gairola",
    title: "CTO",
    image: sanjay,
    details: [
      {
        icon: "storage",
        title: "Data Warehousing",
        desc: "Specialist in designing scalable data storage solutions.",
      },
      {
        icon: "bar_chart",
        title: "Data Mining",
        desc: "Expert in extracting insights from large datasets.",
      },
      {
        icon: "engineering",
        title: "Technology Strategy",
        desc: "Driving innovation through cutting-edge tech solutions.",
      },
      {
        icon: "history",
        title: "16+ Years Experience",
        desc: "Deep expertise in data analytics & enterprise solutions.",
      },
    ],
  },
  {
    name: "Intekhab Ashraf",
    title: "Software Developer",
    image: intekhab_image,
    details: [
      {
        icon: "groups",
        title: "Team Management",
        desc: "Overseeing and coordinating the development team for smooth project execution.",
      },
      {
        icon: "code",
        title: "Frontend Development",
        desc: "Expert in crafting scalable and responsive UI.",
      },
      {
        icon: "sync_alt",
        title: "Backend Collaboration",
        desc: "Bridging the gap between frontend and backend, ensuring seamless integration.",
      },
      {
        icon: "lightbulb",
        title: "Project Strategy & Planning",
        desc: "Actively involved in project discussions, ensuring technical feasibility and innovation.",
      },
    ],
  },
];
