import manisha from "assets/images/manisha.png";
import manishaChair from "assets/images/modify_images/Manisha mam chair.png";
import yuktisoftware from "assets/images/modify_images/Yukti_Logo.svg";
import intekhab_image from "assets/images/intekhab_image.png";
import laptop from "assets/images/laptop.png";
// import front_bg from "assets/images/front_bg.png";
import back_bg from "assets/images/back_bg.png";
import frontend from "assets/images/modify_images/frontend_development.png";
import backend from "assets/images/modify_images/Backend_Development.png";
import fullstack from "assets/images/modify_images/fullstack_development.png";
import database from "assets/images/modify_images/database_solution.png";
import cloud from "assets/images/modify_images/cloud_integration.png";
import devops from "assets/images/modify_images/devops_services.png";
import ecommerce from "assets/images/modify_images/ecommerce.png";
import crm from "assets/images/modify_images/crm.png";
import analytics from "assets/images/modify_images/analytics.png";
import integration from "assets/images/modify_images/integration.png";
import cicd from "assets/images/modify_images/cicd.png";
import testing from "assets/images/modify_images/testing.png";
import documentation from "assets/images/modify_images/documentation.png";
import frameworks from "assets/images/modify_images/frameworks.png";
import templates from "assets/images/modify_images/designtemplates.png";
import dashboard from "assets/images/modify_images/yuktiBuilder/dashboard.png";
import person from "assets/images/modify_images/yuktiBuilder/person.png";
import report from "assets/images/modify_images/yuktiBuilder/reports.png";
import user from "assets/images/modify_images/yuktiBuilder/users.png";
import intekhab2 from "assets/images/modify_images/intekhab2.png";
import nilesh from "assets/images/modify_images/nilesh.png";
import utkarsh from "assets/images/modify_images/utkarsh.jpg";
import Mamsfriend from "assets/images/modify_images/mams-friend.png";
import hindSinha from "assets/images/hindSinha.jpg";
import AyushPathak from "assets/images/AyushPathak.jpg";
import shubhash from "assets/images/shubhash.jpg";
import vaibhav from "assets/images/vaibhav.jpg";

import react from "assets/images/modify_images/logos/react.png";
import mui from "assets/images/modify_images/logos/mui.png";
import tailwind from "assets/images/modify_images/logos/tailwind.png";
import node from "assets/images/modify_images/logos/node.png";
import angular from "assets/images/modify_images/logos/angular.png";
import express from "assets/images/modify_images/logos/express.png";
import contactus from "assets/images/modify_images/contactus.png";
import privacypolicy from "assets/images/modify_images/privacypolicy.png";
import clientForm from "assets/images/modify_images/stepper/clientForm.png";
import clientGrid from "assets/images/modify_images/stepper/clientGrid.png";
import measurement from "assets/images/modify_images/stepper/measurement.png";
import cartpage from "assets/images/modify_images/billing/cartpage.png";
import categoryForm from "assets/images/modify_images/billing/categoryForm.png";
import productGrid from "assets/images/modify_images/billing/productGrid.png";

export default {
  //Company Name
  companyName: "Yukti Software",
  add1: "MSX Tower 1, Commercial Belt, ",
  add2: "Alpha 1, Greater Noida, UP, 201310",
  mob: "Call us on +91 9582815419",
  logo: yuktisoftware,

  // Button on Navbar
  navbar: {
    buttonText: "Contact US",
  },
  products: {
    yuktiBuilder: {
      title: "An innovative construction management web app, seamlessly accessible on mobile.",
      desc: "Our construction management web app is a comprehensive solution tailored for the construction industry. It enables project managers and teams to oversee tasks, monitor progress, manage resources, and track budgets—all from a single, user-friendly platform. With seamless mobile accessibility, users can stay connected and make critical decisions on the go. The app is built with robust security, real-time updates, and intuitive navigation, ensuring smooth operations across all project stages. Whether it’s scheduling, communication, or document management, our app empowers construction businesses to work smarter and more efficiently.",
      images: [
        {
          title: "Dashboard",
          desc: "A centralized hub providing real-time insights into all your construction projects. Track project progress, financials, materials, and work orders at a glance. The dashboard offers interactive charts and key performance indicators to help you make informed decisions efficiently.",
          src: dashboard,
        },
        {
          title: "Person Management",
          desc: "Manage employees, clients, vendors, and other stakeholders seamlessly. Assign roles, track responsibilities, and ensure smooth communication between different entities involved in construction projects. This module helps streamline workforce and contractor management.",
          src: person,
        },
        {
          title: "Reports",
          desc: "Generate detailed reports on project status, financial summaries, material consumption, and work progress. The reports module provides customizable and exportable insights to ensure transparency and efficient decision-making.",
          src: report,
        },
      ],
    },
    stepper: {
      title: "Stepper Application – A Complete Workflow Management Solution",
      desc: "The Stepper Application is designed to streamline processes that require multiple stages, ensuring efficient management from client onboarding to project completion and billing. It provides structured workflows, progress tracking, and seamless invoicing, making it an ideal solution for businesses handling step-by-step execution.",
      images: [
        {
          title: "Client Grid",
          desc: "The Client Grid provides a structured and organized view of all client records, allowing users to efficiently search, filter, and sort data. It acts as a centralized hub where businesses can manage client information with ease, ensuring quick access to important details. The grid enhances workflow efficiency by providing a clear and concise overview of all client interactions and project statuses.",
          src: clientGrid,
        },
        {
          title: "Client Details Form",
          desc: "The Client Details Form is designed to capture essential client information, including name, contact details, project requirements, and site location. This ensures that all necessary details are documented before proceeding with any further steps. By maintaining a well-structured client database, businesses can improve communication, streamline processes, and ensure that project requirements are well understood from the start.",
          src: clientForm,
        },
        {
          title: "Measurement Form",
          desc: "The Measurement Form plays a critical role in accurate project planning and execution. It allows users to record precise site measurements, material requirements, and technical specifications, reducing the risk of errors during implementation. This form ensures that all necessary data is available for budget estimation and work execution, making the overall workflow more efficient and reliable.",
          src: measurement,
        },
      ],
    },
    queryManagement: {
      title: "Client Grid",
      desc: {},
      images: [{}, {}, {}],
    },
    yuktiBilling: {
      title: "Yukti Billing – Smart & Efficient Billing Solution",
      desc: "Yukti Billing is a comprehensive billing management system designed to streamline invoicing, product categorization, and unit management for businesses. It simplifies the entire billing process, ensuring accuracy and efficiency in tracking sales, managing products, and handling transactions. The system allows businesses to create and manage product categories, define measurement units, and generate detailed invoices effortlessly. With an intuitive interface and structured data organization, Yukti Billing enhances workflow efficiency, reduces errors, and provides a seamless experience for managing financial transactions.",
      images: [
        {
          title: "Cart Page – Streamlined Checkout & Order Management",
          desc: "The Cart Page provides a smooth and efficient checkout experience, allowing users to review selected products before finalizing their purchase. It displays product details, quantities, and total costs, ensuring transparency in billing. Users can update quantities, remove items, and proceed to invoice generation effortlessly. This feature ensures accurate billing and enhances the overall purchasing experience.",
          src: cartpage,
        },
        {
          title: "Category Form – Organized Product Classification",
          desc: "The Category Form allows businesses to create and manage product categories efficiently. By organizing products into structured categories, it simplifies product searches and improves inventory management. Users can add new categories, edit existing ones, and ensure a well-structured catalog for better accessibility and workflow optimization.",
          src: categoryForm,
        },
        {
          title: "Product Grid – Comprehensive Product Overview",
          desc: "The Product Grid presents a detailed and organized view of all available products, offering an intuitive way to browse and manage inventory. It includes essential product details such as name, price, stock status, and category, enabling users to filter, search, and update product information easily. This feature ensures a well-maintained product catalog, improving operational efficiency and decision-making.",
          src: productGrid,
        },
      ],
    },
  },

  images: [dashboard, person, report],
  // Text on background image in homepage
  homepage: {
    headerImageText: {
      title: "Welcome to",
      subtitle:
        "Custom software development company specializing in building innovative business management solutions.",
    },

    counter: {
      card1: {
        title: "Completed Projects",
        description:
          "Delivering tailor-made solutions across various industries to empower businesses.",
      },
      card2: {
        title: "Custom Tools",
        description:
          "Building efficient and user-friendly tools to streamline business operations.",
      },
      card3: {
        title: "Innovative Solutions",
        description: "Transforming ideas into reality with innovative web and mobile applications.",
      },
    },
    information: {
      rcard: {
        card1: {
          image: manisha,
          title: (
            <>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            </>
          ),
          desc: (
            <>
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </>
          ),
        },
        card2: {
          image: back_bg,
          title: "Explore Our Services",
          desc: "From idea to implementation, our team delivers scalable and user-centric digital solutions to accelerate your growth.",
          buttonText: "view services",
        },
      },
      dicard: {
        card1: {
          icon: "content_copy",
          title: "Comprehensive Documentation",
          desc: "Detailed and easy-to-follow documentation ensures a seamless development experience for every team member.",
        },
        card2: {
          icon: "flip_to_front",
          title: "Modern Frameworks",
          desc: "Leverage the power of ReactJS, Material UI, and other cutting-edge tools for building intuitive user interfaces.",
        },
        card3: {
          icon: "price_change",
          title: "Cost-Effective Solutions",
          desc: "Save resources by utilizing our pre-designed templates and efficient development practices.",
        },
        card4: {
          icon: "devices",
          title: "Responsive Design",
          desc: "Ensure a flawless user experience across devices with layouts that adapt seamlessly to any screen size.",
        },
      },
    },
    designBlocks: {
      title: "Comprehensive Software Development Solutions",
      subtitle:
        " Explore our diverse range of services and features designed to accelerate your software projects with precision and scalability.",
      badgeContent: "Powering Innovation",
      expertise: {
        title: "Our Expertise",
        desc: "Delivering high-quality software solutions with precision and efficiency.",
        items: {
          fdev: {
            image: frontend,
            name: "Frontend Development",
            // count: 12,
            route: "/pages/landing-pages/services",
          },
          bdev: {
            image: backend,
            name: "Backend Development",
            // count: 10,
            route: "/pages/landing-pages/services",
          },
          fsDev: {
            image: fullstack,
            name: "Full Stack Development",
            // count: 8,
            route: "/pages/landing-pages/services",
          },
          dbSol: {
            image: database,
            name: "Database Solutions",
            // count: 6,
            route: "/pages/landing-pages/services",
          },
          clInteg: {
            image: cloud,
            name: "Cloud Integrations",
            route: "/pages/landing-pages/services",
            // count: 7,
            // pro: true,
          },
          devSer: {
            image: devops,
            name: "DevOps Services",
            route: "/pages/landing-pages/services",
            // count: 5,
            // pro: true,
          },
        },
      },
      innovativeSol: {
        title: "Innovative Solutions",
        desc: "Crafting scalable and efficient software for diverse business needs.",
        items: {
          ecommerce: {
            image: ecommerce,
            name: "E-Commerce Platforms",
            count: 1,
            route: "/pages/landing-pages/services",
          },
          crm: {
            image: crm,
            name: "CRM Systems",
            // count: 1,
            route: "/pages/landing-pages/services",
          },
          analytics: {
            image: analytics,
            name: "Analytics Tools",
            // count: 1,
            route: "/pages/landing-pages/services",
          },
        },
      },
      advFeatures: {
        title: "Advanced Features",
        desc: "Integrating the latest technologies to enhance your software capabilities.",
        items: {
          integration: {
            image: integration,
            name: "Custom Code Integration",
            count: 1,
            route: "/pages/landing-pages/services",
          },
          cicd: {
            image: cicd,
            name: "CI/CD Automation",
            count: 1,
            route: "/pages/landing-pages/services",
          },
          testing: {
            image: testing,
            name: "Comprehensive Testing",
            count: 1,
            route: "/pages/landing-pages/services",
          },
        },
      },
      reusableComp: {
        title: "Reusable Components",
        desc: "Streamlining development with prebuilt components and resources.",
        items: {
          documentation: {
            image: documentation,
            name: "In-Depth Documentation",
            count: 1,
            route: "/pages/landing-pages/services",
          },
          framework: {
            image: frameworks,
            name: "UI Frameworks",
            count: 1,
            route: "/pages/landing-pages/services",
          },
          templates: {
            image: templates,
            name: "Design Templates",
            count: 1,
            route: "/pages/landing-pages/services",
          },
        },
      },
    },
    pages: {
      title: "Tailored Pages for Business Needs",
      subtitle:
        " Explore our pre-designed pages, crafted to meet diverse software development and business requirements.",
      badgeContent: "Dynamic Solutions",
      title2: "Comprehensive Page Templates for Your Software Solutions",
      subtitle2:
        "Select from a range of pages tailored for product showcases," +
        " client interactions, and project management. Streamline your workflow with pre-built designs.",
      pageData: {
        dashboard: {
          image: dashboard,
          name: "Dashboard Page",
          route: "/pages/landing-pages/products",
        },
        person: {
          image: person,
          name: "Employee Management Page",
          route: "/pages/landing-pages/products",
        },
        reports: {
          image: report,
          name: "Report Page",
          route: "/pages/landing-pages/products",
        },
        user: {
          image: user,
          name: "User Management Page",
          route: "/pages/landing-pages/products",
        },
      },
    },
    bbd: {
      title: "Comprehensive Documentation",
      subtitle: "Built by Experts",
      desc:
        "From cutting-edge architectures to advanced integrations," +
        " our documentation provides everything you need to harness the" +
        " full potential of our software solutions.",
    },
    fiCard: {
      process: {
        variant: "gradient",
        color: "info",
        icon: "flag",
        title: "Our Process",
        desc: "Explore how we approach software development with a structured and efficient methodology to deliver outstanding results.",
        action: {
          type: "internal",
          route: "/pages/landing-pages/services",
          label: "Learn More",
        },
      },
      technologies: {
        color: "info",
        icon: "precision_manufacturing",
        title: "Technologies",
        desc: "Discover the cutting-edge tools, frameworks, and platforms we use to create scalable and robust solutions.",
        action: {
          type: "internal",
          route: "/pages/landing-pages/technologies",
          label: "Explore Now",
        },
      },
      portfolio: {
        color: "info",
        icon: "apps",
        title: "Our Portfolio",
        desc: "Browse our portfolio to see how we've helped clients transform their businesses with custom software.",
        action: {
          type: "internal",
          route: "/pages/landing-pages/products",
          label: "View Portfolio",
        },
      },
    },
    team: {
      heading: "Meet Our Talented Team",
      title: "The driving force behind our success",
      subtitle:
        "Our team is trusted by businesses and individuals across the globe." +
        " Explore the talented professionals who bring innovative ideas to life.",
      team1: {
        name: " Intekhab Ashraf",
        image: intekhab2,
      },
      team2: {
        name: "Manisha Kumari",
        image: manisha,
      },
      team3: {
        name: "Nilesh Prashant",
        image: nilesh,
      },
      team4: {
        name: "Utkarsh Mehta",
        image: utkarsh,
      },
      team5: {
        name: "Vandana Thakur",
        image: Mamsfriend,
      },
      team6: {
        name: "Hind Sinha",
        image: hindSinha,
      },
      team7: {
        name: "Ayush Pathak",
        image: AyushPathak,
      },
      team8: {
        name: "Shubhash Sharma",
        image: shubhash,
      },
      team9: {
        name: "Vaibhav Agrahari",
        image: vaibhav,
      },
    },
    downloads: {
      title1: "Looking for Reliable Software Solutions?",
      title2: "Let's Bring Your Ideas to Life!",
      subtitle:
        "We specialize in delivering top-notch software development tailored to your business needs." +
        "Ready to collaborate on your next project? Get in touch with us today!",
      buttonText: "Contact Us",
      route: "/pages/landing-pages/contact-us",
      title3: "We specialize in these cutting-edge technologies to deliver exceptional solutions",
      logo: {
        react: {
          title: "ReactJS - A powerful library for building user interfaces",
          image: react,
        },
        angular: {
          title: "Angular - A robust framework for building dynamic web applications",
          image: angular,
        },
        node: {
          title: "Node.js - A runtime for building fast and scalable server-side applications",
          image: node,
        },
        mui: {
          title: "MUI - A comprehensive React UI library for modern and responsive designs",
          image: mui,
        },
        express: {
          title: "Express.js - A minimal and flexible web application framework for Node.js",
          image: express,
        },
        tailwind: {
          title: "Tailwind CSS - A utility-first framework for crafting custom designs efficiently",
          image: tailwind,
        },
      },
    },
    shareButtons: {
      title: "Stay Connected with Us!",
      subtitle:
        "Follow us on social media to get the latest updates, tips, and insights. Share our work with your network and help us grow together!",
    },
  },
  //About Us Page
  aboutus: {
    // Text on background image in AboutUs Page
    headerImageText: {
      title1: "Work with an",
      title2: "Amazing Team",
      subtitle:
        "At Yukti Software, we specialize in creating cutting-edge software" +
        " solutions that drive business success. With a team of experienced IT " +
        "professionals, we are committed to delivering scalable, efficient, and" +
        " impactful technology tailored to meet your unique needs.",
    },
    // Button Text on the bg image
    buttonText: {
      quoteButton: "Get a quote",
    },
    // Information Section
    information: {
      infoCard1: {
        title: "Innovative Web Solution",
        description:
          "Empowering businesses with cutting-edge web applications designed for scalability and performance.",
      },
      infoCard2: {
        title: "Dynamic Mobile Applications",
        description:
          "Crafting intuitive and feature-rich mobile apps to streamline operations and enhance user engagement.",
      },
      infoCard3: {
        title: "Cloud-Ready Services",
        description:
          "Delivering secure, scalable, and seamless cloud solutions to drive digital transformation.",
      },
      infoCard4: {
        title: "Custom Development Expertise",
        description:
          "Building tailored software solutions to address unique business challenges and fuel growth.",
      },
      centeredblogcard: {
        image: manishaChair,
        title: "Empowering Your Digital Transformation",
        desc:
          "Unlock the full potential of your business with cutting-edge technology." +
          " From intuitive web apps to feature-rich mobile solutions, we deliver tailored software to drive your success.",
        action: {
          label: "Discover More",
        },
      },
    },
    team: {
      headerText: {
        desc:
          "With a steadfast belief in limitless potential, our executive team embodies a passion for excellence." +
          " Every challenge is an opportunity to master something new, driving our commitment to innovation and success",
      },
      teamCard1: {
        image: manisha,
        name: "Manisha Kumari",
        label: "Managing Director",
        desc: " M.Tech graduate from NIT Calicut, Manisha Kumari is a visionary leader and a skilled developer,",
      },
      teamCard2: {
        image: intekhab_image,
        name: "Intekhab Ashraf",
        label: "Software Developer",
        desc: "Skilled software developer, passionate about creating innovative web and mobile applications.",
      },
      teamCard3: {
        image: utkarsh,
        name: "Utkarsh Mehta",
        label: "Frontend Developer",
        desc: "Creative web developer with a passion for crafting seamless, high-performance web experiences that blend innovation with functionality.",
      },
      teamCard4: {
        image: nilesh,
        name: "Nilesh Prashant",
        label: "Backend Developer",
        desc: "Backend developer with a knack for building robust, scalable, and efficient server-side solutions that power seamless digital experiences.",
      },
    },
    newsletter: {
      title: "Stay Ahead of the Curve",
      subtitle: "",
      image: laptop,
    },
  },
  //ContactUs Page
  contactus: {
    image: contactus,
  },
  //Currently not using
  privacyPolicy: {
    bgImage: privacypolicy,
    p1: {
      l1: "Last updated: December 27, 2024",
      l2:
        "This Privacy Policy describes Our policies and procedures on the collection," +
        " use and disclosure of Your information when You use the Service and tells " +
        "You about Your privacy rights and how the law protects You.",
      l3:
        "We use Your Personal data to provide and improve the Service." +
        " By using the Service, You agree to the collection and use of " +
        "information in accordance with this Privacy Policy. ",
    },

    p2: {
      h1: "Interpretation and Definitions",
      title1: "Interpretation",
      subtitle:
        "  The words of which the initial letter is capitalized have" +
        " meanings defined under the following conditions. The following definitions" +
        " shall have the same meaning regardless of whether they appear in singular or in plural.",
      title2: "Definitions",
      subtitle2: "For the purposes of this Privacy Policy:",

      l1: {
        title: "Account ",
        subtitle:
          "means a unique account created for You to access our Service or parts of our Service.",
      },
      l2: {
        title: "Affiliate ",
        subtitle:
          "means an entity that controls, is controlled by or is under common control with a party," +
          " where “control” means ownership of 50% or more of the shares, equity interest or other securities" +
          "entitled to vote for election of directors or other managing authority.",
      },
      l3: {
        title: "Company ",
        subtitle:
          "(referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Yukti Software, India.",
      },
      l4: {
        title: "Cookies",
        subtitle:
          "are small files that are placed on Your computer, mobile device or any other device by a website," +
          " containing the details of Your browsing history on that website among its many uses.",
      },
      l5: {
        title: "Country ",
        subtitle: "refers to: Rajasthan, India",
      },
      l6: {
        title: "Device ",
        subtitle:
          "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
      },
      l7: {
        title: "Personal Data",
        subtitle: "is any information that relates to an identified or identifiable individual.",
      },
      l8: {
        title: "Service ",
        subtitle: "refers to the Website.",
      },
      l9: {
        title: "Service Provider",
        subtitle:
          " means any natural or legal person who processes the data on behalf of the Company. " +
          "It refers to third-party companies or individuals employed by the Company to facilitate the" +
          " Service, to provide the Service on behalf of the Company, to perform services related to the" +
          " Service or to assist the Company in analyzing how the Service is used.",
      },
      l10: {
        title: "Usage Data",
        subtitle:
          "refers to data collected automatically, either generated by the use of the Service or " +
          "from the Service infrastructure itself (for example, the duration of a page visit).",
      },
      l11: {
        title: "Website ",
        subtitle: "refers to Yukti Software, accessible from https://www.yuktisoftware.com/",
      },
      l12: {
        title: "You ",
        subtitle:
          " means the individual accessing or using the Service, or the company, " +
          "or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
      },
    },

    p3: {
      h1: "Collecting and Using Your Personal Data",
      title1: "Types of Data Collected",
      title2: "Personal Data",
      subtitle:
        "While using Our Service, We may ask You to provide Us with certain personally identifiable " +
        "information that can be used to contact or identify You. Personally identifiable " +
        "information may include, but is not limited to:",

      l1: "Email address",
      l2: "First name and last name",
      l3: "Phone number",
      l4: "Address, State, Province, ZIP/Postal code, City",
      l5: "Usage Data",
    },
    p4: {
      title: "Usage Data",
      l1: "Usage Data is collected automatically when using the Service.",
      l2:
        "Usage Data may include information such as Your Device’s Internet Protocol address (e.g. IP address)," +
        " browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, " +
        "the time spent on those pages, unique device identifiers and other diagnostic data.",
      l3:
        "When You access the Service by or through a mobile device, We may collect certain information automatically," +
        " including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address " +
        "of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device " +
        "identifiers and other diagnostic data.",
      l4:
        "We may also collect information that Your browser sends whenever You visit our Service or when You access the" +
        " Service by or through a mobile device.",
    },
    p5: {
      title: "Tracking Technologies and Cookies",
      subtitle:
        "We use Cookies and similar tracking technologies to track the activity on Our Service and store certain " +
        "information. Tracking technologies used are beacons, tags, and scripts to collect and track information and " +
        "to improve and analyze Our Service. The technologies We use may include:",
      l1: {
        title: "Cookies or Browser Cookies.",
        desc: " A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.",
      },
      l2: {
        title: "Web Beacons. ",
        desc: "Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).",
      },
      l3: "Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.",
      l4: "We use both Session and Persistent Cookies for the purposes set out below:",
    },
    p6: {
      title: "Necessary / Essential Cookies",
      l1: "Type: Session Cookies",
      l2: "Administered by: Us",
      l3: "Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.",
    },
    p7: {
      title: "Cookies Policy / Notice Acceptance Cookies",
      l1: "Type: Persistent Cookies",
      l2: "Administered by: Us",
      l3: "Purpose: These Cookies identify if users have accepted the use of cookies on the Website.",
    },
    p8: {
      title: "Functionality Cookies",
      l1: "Type: Persistent Cookies",
      l2: "Administered by: Us",
      l3: "Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.",
      l4: "For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.",
    },
    p9: {
      h1: "Use of Your Personal Data",
      subtitle: "The Company may use Personal Data for the following purposes:",
      l1: "To provide and maintain our Service, including to monitor the usage of our Service.",
      l2: "To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
      l3: "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
      l4: "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
      l5: "To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
      l6: "To manage Your requests: To attend and manage Your requests to Us.",
      l7: "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
      l8: "For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
      l9: "We may share Your personal information in the following situations:",
      l10: "With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
      l11: "For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
      l12: "With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
      l13: "With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.",
      l14: "With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
      l15: "With Your consent: We may disclose Your personal information for any other purpose with Your consent.",
    },
    p10: {
      h1: "Retention of Your Personal Data",
      l1: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
      l2: "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.",
    },
    p11: {
      h1: "Transfer of Your Personal Data",
      l1: "Your information, including Personal Data, is processed at the Company’s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
      l2: "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.",
      l3: "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.",
    },
    p12: {
      h1: "Delete Your Personal Data",
      l1: "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
      l2: "Our Service may give You the ability to delete certain information about You from within the Service.",
      l3: "You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.",
      l4: "Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.",
    },
    p13: {
      h1: "Disclosure of Your Personal Data",
      title1: "Business Transactions",
      l1: "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
      title2: "Law enforcement",
      l2: "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).",
    },
    p14: {
      h1: "Other legal requirements",
      l1: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
      l2: "Comply with a legal obligation",
      l3: "Protect and defend the rights or property of the Company",
      l4: "Prevent or investigate possible wrongdoing in connection with the Service",
      l5: "Protect the personal safety of Users of the Service or the public",
      l6: "Protect against legal liability",
    },
    p16: {
      h1: "Security of Your Personal Data",
      l1: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
    },
    p17: {
      h1: "Children’s Privacy",
      l1: "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.",
      l2: "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent’s consent before We collect and use that information.",
    },
    p18: {
      h1: "Links to Other Websites",
      l1: "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party’s site. We strongly advise You to review the Privacy Policy of every site You visit.",
      l2: "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
    },
    p19: {
      h1: "Changes to this Privacy Policy",
      l1: "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
      l2: "We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the “Last updated” date at the top of this Privacy Policy.",
      l3: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    },
    p20: {
      h1: "Contact Us",
      l1: "If you have any questions about this Privacy Policy, You can contact us:",
      l2: "By email: contact@yuktisoftware.com",
      l3: "By visiting this page on our website: https://www.yuktisoftware.com/",
    },
  },
};
