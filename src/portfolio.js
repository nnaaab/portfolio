/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ningning's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ningning Zhu Portfolio",
    type: "website",
    ////////////////////////////
    url: "https://nnaaab.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Ningning Zhu",
  logo_name: "Ningning Zhu",
  nickname: "Jocelyn",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // resumeLink:
  //////////////////////////////////////////////
    // "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
    //////////////////////////////////////////
  portfolio_repository: "https://github.com/nnaaab/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/nnaaab",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ningning-zhu-4207b4194/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive personal website front end using React",
        "⚡ Creating a fully functional Clothing E-commerce website using React, Firebase and Stripe API",
        "⚡ Designed and launched a Bakery E-commerce website using WordPress and WooCommerce plug-in"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "FireBase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and Federated Learning",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "R Studio",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "cib:mysql",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Data & Buisness Analyst",
      fileName: "DataAnalystImg",
      skills: [
        "⚡ Experience working with cross funcitonal stakeholders",
        "⚡ Monitoring dashbord and designing Click Through Rate(CTR), Open Rate and KPI metrics",
        "⚡ Familiar with Customer Relationship Management(CRM) and Search Engine Optimization(SEO)",
        "⚡ Analysing social media engagement and proposing accroding marketing stragtegies",
  
      ],
      softwareSkills: [
      
        {
          skillName: "VBA",
          fontAwesomeClassname: "file-icons:microsoft-excel",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Mailchimp",
          fontAwesomeClassname: "simple-icons:mailchimp",
          style: {
            color: "#0089D6",
          },
        },
      
        {
          skillName: "SAS",
          fontAwesomeClassname: "file-icons:sas",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "logos:google-analytics",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#326CE5",
          },
        },
        
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    /**{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },**/
  ],
};

const degrees = {
  degrees: [
    {
      title: "Rice Univeristy, Houston, TX",
      subtitle: "Master of Statistics",
      logo_path: "rice3_logo.png",
      alt_name: "Rice",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ I have studied advanced statistical methods, time series, Markov chain Monte Carlo, etc",
        "⚡ Apart from this, I have done courses on Embedded Machine Learning, Deep Learning and Quantitive Financial Analytics",
        "⚡ I was one of the member at Women in Math Club(AWM) at Rice University, supporting women in science, technology, engineering, and math(STEM) fields"
      ],
      website_link: "https://www.rice.edu/",
    },
    {
      title: "Univeristy of Connecticut, Storrs, CT",
      subtitle: "Bachelor in Statistics, Minor Mathematics",
      logo_path: "uconn3_logo.png",
      alt_name: "Uconn",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have studied fundamental statistics like hypothesis testing, p-value, distributions, design of experiments, ect",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and R programming",
        "⚡ I was selected for New England Scholar(2018) in UConn. I also selected as one of UConn representatives to join the DataFest, which is a data analyzing competition hold annually among univeristies at Stamford, Connecticut"
      ],
      website_link: "https://uconn.edu/",
    }
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data-Driven Decision-Making for Business Professionals",
      subtitle: "- Jamie Champagne",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "http://www.linkedin.com/learning/data-driven-decision-making-for-business-professionals",
      alt_name: "LinkedIn",
      color_code: "#white",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      subtitle: "- Jogesh K. Muppala",
      logo_path: "hku_logo.png",
      certificate_link:
        "https://coursera.org/share/ec3c4ab7ee91fe032e3e41c13a6ff2ce",
      alt_name: "HK",
      color_code: "#00000099",
    },
    {
      title: "Build Your Portfolio Website with HTML and CSS",
      subtitle: "- Harrison Kong",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/9e9da2cca661542c41252e8e97e36ada",
      alt_name: "Coursera",
      color_code: "lightblue",
    },
    {
      title: "Linear Regression for Business Statistics",
      subtitle: "- Sharad Borle",
      logo_path: "rice_logo.png",
      certificate_link:
        "https://coursera.org/share/8b6a2877a8cf88fa94ca5159e50dfe6c",
      alt_name: "Rice",
      color_code: "#1F70C199",
    },
    {
      title: "The Data Scientist’s Toolbox",
      subtitle: "- Jeff Leek",
      logo_path: "jhu_logo.png",
      certificate_link:
        "https://coursera.org/share/3a9d5d78dc5b43df7da3f5b3401e10a8",
      alt_name: "JHU",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Data Analysis Using Excel",
      subtitle: "- Sharad Borle",
      logo_path: "rice_logo.png",
      certificate_link:
        "https://coursera.org/share/4259c40b5f0bb80b6329739bdfd7e868",
      alt_name: "Rice",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Data & Business Analyst, Search Engine Optimization Specialist, Designer and Software Architect. I have also worked with well established companies mostly as Analyst. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience_logo.png",
  sections: [
    /**{
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },**/
    {
      title: "Internships",
      experiences: [
        {
          title: "Business Analyst Intern",
          company: "The Lifestyle Agency",
          //company_url: "https://www.delhivery.com/",
          logo_path: "lsa_logo.png",
          duration: "Jan 2021 - Present",
          location: "New York, NY",
          description:
            "I have worked with multiple clients to help with their sales.\n(1)Designed and launched an E-commerce webiste using WordPress and WooCommerce for a client who decided to move her several pyshical stores to an online based store \n(2)Launced a clients's online marketing program, including propsects' contact infromation collection, Customer Relationship Management(CRM) design and conversion funnel optimzation, lead a team of 3 other analyst interns.",
            //"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To buld a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Deep Learning Research Assistant Intern",
          company: "Efficient and Intelligent Computing (EIC) Lab, Rice University",
          //company_url:
          //  "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "rice4_logo.png",
          duration: "July 2020 - Dec 2020",
          location: "Houston, TX",
          description:
            "Experimented with Federated Learning using Computer Vision’s state-of-art models, eg. ResNet56, ResNet38 to improve the testing accuracy and solve communication bottlenecks between mobile devices and cloud servers. Explored leading algorithms including FedAvg, FedProx, and FedMA and reproduced code in related papers using PyTorch. Increased the predicting accuracy by 3% on CIFAR100, ResNet38.",
            //"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
        {
          title: "Data Analyst Intern",
          company: "Bank of Hangzhou Co., Ltd",
          //company_url:
          //  "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "hzbank2_logo.jpg",
          duration: "May 2019 - Sep 2019",
          location: "Ningbo, China",
          description:
            "Promoted the new loan product to our potential customers, boosted the clients number and sales up to 100%. (1)Followed each marketing team and recorded each team’s advertising data, including advertising location, gender,conversion rate, etc. Analyzed the collected data and reported it to leaders weekly. (2)Kept track of each marketing team’s KPI and A/B testing results to optimize the marketing strategies.",
            //"Experimented with Federated Learning using Computer Vision’s state-of-art models, eg. ResNet56, ResNet38 to improve the testing accuracy and solve communication bottlenecks between mobile devices and cloud servers. Explored leading algorithms including FedAvg, FedProx, and FedMA and reproduced code in related papers using PyTorch. Increased the predicting accuracy by 3% on CIFAR100, ResNet38.",
            //"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Treasurer",
          company: "Women in Math Club(AWM)",
          company_url: "https://about.google/",
          logo_path: "awm_logo.png",
          duration: "Jan 2020 - May 2020",
          location: "Rice Univeristy, Houston, TX",
          description:
            "(1)Completed the Club Finance Training and earned the certification.(2)Applied about 200 dollars student funding from Rice University to hold annual pie day activity.(3)Contacted the local restaurant for food and promoted the pie day activity at Rice Univeristy.",
            //"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Fundraiser and Promoter",
          company: "Univeristy of Connecticut, ISSS",
          company_url: "https://www.microsoft.com/",
          logo_path: "uconn_logo.png",
          duration: "Aug 2018 - Dec 2018",
          location: "Storrs, CT",
          description:
            " Subcommittee for the WorldFest Festival at the University of Connecticut ISSS. (1)Made and implemented marketing promotion strategies, including advertising at the school bus, student center, and social media. (2)Plan the festival's procedure, selected and purchased relative products for the festival. (3)Fundarized about 500 dollars food and prizes for the festival, and attracted over 400 people to participate.",
            //"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I am always looking for insightful and real-world projects, try to make some impact on the world",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
