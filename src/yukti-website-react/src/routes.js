/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import WorkIcon from "@mui/icons-material/Work";
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";
import PrivacyPolicy from "layouts/pages/legals/privacy-policy";
import TermsAndConditions from "layouts/pages/legals/terms-conditions";
import Services from "layouts/pages/landing-pages/services";
import Technologies from "layouts/pages/landing-pages/technologies";
import Products from "layouts/pages/landing-pages/products";
import Careers from "layouts/pages/landing-pages/careers";
import JFSDCoursePage from "layouts/pages/courses/jfsdCourse";
import PFSDCoursePage from "layouts/pages/courses/pfsdCourse";
import MERNCoursePage from "layouts/pages/courses/mernCourse";
import DataAnalyticsCoursePage from "layouts/pages/courses/dataAnalytics";
import DataScienceCoursePage from "layouts/pages/courses/dataScience";
import JavaScriptCoursePage from "layouts/pages/courses/javascript";
import AdvJavaCoursePage from "layouts/pages/courses/advJava";
import CoreJavaCoursePage from "layouts/pages/courses/coreJavaCourse";
import BasicPythonCoursePage from "layouts/pages/courses/basicPythonCourse";
import AdvPythonCoursePage from "layouts/pages/courses/advPythonCourse";
import HtmlCssCoursePage from "layouts/pages/courses/htmlCssCourse";
import AimlCoursePage from "layouts/pages/courses/aimlCourse";
import DsaCoursePage from "layouts/pages/courses/dsaCourse";
import ReactJsCoursePage from "layouts/pages/courses/reactJsCourse";
import DbmsCoursePage from "layouts/pages/courses/dbmsCourse";
import SpringSpringBootCoursePage from "layouts/pages/courses/springSpringBootCourse";
import BlogListPage from "layouts/pages/blogs/blogListPage";
import WorkshopRegistrationPage from "layouts/pages/workshops/workshopRegistration";
import YuktiBuilderContributionPage from "layouts/pages/landing-pages/contribution/yuktiBuilder";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    // name: "pages",
    name: "menu",
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 2,
    collapse: [
      {
        // name: "landing pages",
        name: "Overview",
        collapse: [
          // {
          //   name: "author",
          //   route: "/pages/landing-pages/author",
          //   component: <Author />,
          // },
          {
            name: "Services",
            route: "/pages/landing-pages/services",
            component: <Services />,
          },
          {
            name: "Technologies",
            route: "/pages/landing-pages/technologies",
            component: <Technologies />,
          },
          {
            name: "Products",
            route: "/pages/landing-pages/products",
            component: <Products />,
          },
        ],
      },
      {
        name: "Contributions",
        collapse: [
          {
            name: "RKGIT",
            route: "/pages/contribution/yuktiBuilder",
            component: <YuktiBuilderContributionPage />,
          },
        ],
      },
    ],
  },
  {
    name: "sections",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Who are we",
        description: "Know more about us",
        dropdown: true,
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          // {
          //   name: "nav tabs",
          //   route: "/sections/navigation/nav-tabs",
          //   component: <NavTabs />,
          // },
          // {
          //   name: "pagination",
          //   route: "/sections/navigation/pagination",
          //   component: <Pagination />,
          // },
        ],
      },
      {
        name: "Courses",
        description: "Explore our courses",
        dropdown: true,
        collapse: [
          {
            name: "Java FullStack Development",
            route: "/pages/courses/jfsd",
            component: <JFSDCoursePage />,
          },
          {
            name: "Python FullStack Development",
            route: "/pages/courses/pfsd",
            component: <PFSDCoursePage />,
          },
          {
            name: "MERN Stack Development",
            route: "/pages/courses/mernsd",
            component: <MERNCoursePage />,
          },
          {
            name: "Data Analytics",
            route: "/pages/courses/dataAnalytics",
            component: <DataAnalyticsCoursePage />,
          },
          {
            name: "Data Science",
            route: "/pages/courses/dataScience",
            component: <DataScienceCoursePage />,
          },
          {
            name: "JavaScript",
            route: "/pages/courses/javaScript",
            component: <JavaScriptCoursePage />,
          },
          {
            name: "Core Java",
            route: "/pages/courses/corejava",
            component: <CoreJavaCoursePage />,
          },
          {
            name: "Advanced Java",
            route: "/pages/courses/advJava",
            component: <AdvJavaCoursePage />,
          },
          {
            name: "Python",
            route: "/pages/courses/pythonprog",
            component: <BasicPythonCoursePage />,
          },
          {
            name: "Advanced Python",
            route: "/pages/courses/advPython",
            component: <AdvPythonCoursePage />,
          },
          {
            name: "HTML & CSS",
            route: "/pages/courses/htmlcss",
            component: <HtmlCssCoursePage />,
          },
          {
            name: "AI / ML",
            route: "/pages/courses/aiml",
            component: <AimlCoursePage />,
          },
          {
            name: "DSA",
            route: "/pages/courses/dsa",
            component: <DsaCoursePage />,
          },
          {
            name: "ReactJS",
            route: "/pages/courses/reactjs",
            component: <ReactJsCoursePage />,
          },
          {
            name: "DBMS",
            route: "/pages/courses/dbms",
            component: <DbmsCoursePage />,
          },
          {
            name: "Spring & Springboot",
            route: "/pages/courses/springboot",
            component: <SpringSpringBootCoursePage />,
          },
        ],
      },

      {
        name: "Workshops",
        description: "Explore our workshops",
        route: "/pages/workshops",
        component: <WorkshopRegistrationPage />,
      },
      {
        name: "Blogs",
        description: "Explore our blogs",
        route: "/pages/blogs",
        component: <BlogListPage />,
      },
      {
        name: "Who are we",
        description: "Know more about us",
        dropdown: true,
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          // {
          //   name: "nav tabs",
          //   route: "/sections/navigation/nav-tabs",
          //   component: <NavTabs />,
          // },
          // {
          //   name: "pagination",
          //   route: "/sections/navigation/pagination",
          //   component: <Pagination />,
          // },
        ],
      },

      // {
      //   name: "input areas",
      //   description: "See all input areas",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "inputs",
      //       route: "/sections/input-areas/inputs",
      //       component: <Inputs />,
      //     },
      //     {
      //       name: "forms",
      //       route: "/sections/input-areas/forms",
      //       component: <Forms />,
      //     },
      //   ],
      // },
      // {
      //   name: "attention catchers",
      //   description: "See all examples",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "alerts",
      //       route: "/sections/attention-catchers/alerts",
      //       component: <Alerts />,
      //     },
      //     {
      //       name: "modals",
      //       route: "/sections/attention-catchers/modals",
      //       component: <Modals />,
      //     },
      //     {
      //       name: "tooltips & popovers",
      //       route: "/sections/attention-catchers/tooltips-popovers",
      //       component: <TooltipsPopovers />,
      //     },
      //   ],
      // },
      // {
      //   name: "elements",
      //   description: "See all 32 examples",
      //   dropdown: true,
      //   collapse: [
      //     {
      //       name: "avatars",
      //       route: "/sections/elements/avatars",
      //       component: <Avatars />,
      //     },
      //     {
      //       name: "badges",
      //       route: "/sections/elements/badges",
      //       component: <Badges />,
      //     },
      //     {
      //       name: "breadcrumbs",
      //       route: "/sections/elements/breadcrumbs",
      //       component: <BreadcrumbsEl />,
      //     },
      //     {
      //       name: "buttons",
      //       route: "/sections/elements/buttons",
      //       component: <Buttons />,
      //     },
      //     {
      //       name: "dropdowns",
      //       route: "/sections/elements/dropdowns",
      //       component: <Dropdowns />,
      //     },
      //     {
      //       name: "progress bars",
      //       route: "/sections/elements/progress-bars",
      //       component: <ProgressBars />,
      //     },
      //     {
      //       name: "toggles",
      //       route: "/sections/elements/toggles",
      //       component: <Toggles />,
      //     },
      //     {
      //       name: "typography",
      //       route: "/sections/elements/typography",
      //       component: <Typography />,
      //     },
      //   ],
      // },
      {
        name: "Legal",
        description: "See privacy and policy pages",
        dropdown: true,
        collapse: [
          {
            name: "privacy & policy",
            route: "/pages/legals/privacy-policy",
            component: <PrivacyPolicy />,
          },
          {
            name: "terms & conditions",
            route: "/pages/legals/terms-conditions",
            component: <TermsAndConditions />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "Learning",
  //   icon: <Icon>article</Icon>,
  //   collapse: [
  //     {
  //       name: "Python",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/backend-development/python-learn-the-most-popular-and-versatile-programming-language/",
  //     },
  //     {
  //       name: "ReactJS",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/frontend-development/react-js-develop-modern-and-user-friendly-web-applications/",
  //     },
  //     {
  //       name: "Javascript",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/frontend-development/javascript-the-ultimate-course-for-web-programming/",
  //     },
  //     {
  //       name: "Advanced Java",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/backend-development/advance-java-explore-the-power-of-frameworks-and-apis/",
  //     },
  //     {
  //       name: "Spring Boot",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/backend-development/spring-boot-the-essential-course-for-spring-boot-developers/",
  //     },
  //     {
  //       name: "Microservices",
  //       description: "Syllabus overview",
  //       href: "https://www.yuktisoftwares.in/courses/backend-development/microservices-master-the-architecture-and-patterns/",
  //     },
  //   ],
  // },
  {
    // name: "github",
    icon: <WorkIcon />,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
    name: "Careers",
    route: "/pages/landing-pages/careers",
    component: <Careers />,
  },
];

export default routes;
