// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import constant from "assets/my_constants/constant";

const date = new Date().getFullYear();

export default {
  brand: {
    name: constant.add1,
    add2: constant.add2,
    mob: constant.mob,
    image: constant.logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/profile.php?id=61574013882048",
    },
    // {
    //   icon: <TwitterIcon />,
    //   link: "http://www.twitter.com/yukti_softwares",
    // },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/yukti-software/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/yuktisoftware?igsh=Nmc1dG8yN2p1cjk3&utm_source=qr",
    },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "http://www.youtube.com/@Yuktisoftwares-wd2zj",
    // },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", route: "/pages/landing-pages/about-us" },
        { name: "services", route: "/pages/landing-pages/services" },
        { name: "technologies", route: "/pages/landing-pages/technologies" },
      ],
    },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", route: "#" },
    //     { name: "bits & snippets", route: "#" },
    //     { name: "affiliate program", route: "#" },
    //   ],
    // },
    {
      name: "help & support",
      items: [
        { name: "contact us", route: "/pages/landing-pages/contact-us" },
        { name: "knowledge center", href: "https://www.yuktisoftwares.in/" },
        { name: "career", route: "/pages/landing-pages/careers" },
        // { name: "sponsorships", route: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", route: "#" },
        { name: "privacy policy", route: "/pages/landing-pages/Privacy&Policy" },
        // { name: "licenses (EULA)", route: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {constant.companyName}
      {/* <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography> */}
    </MKTypography>
  ),
};
