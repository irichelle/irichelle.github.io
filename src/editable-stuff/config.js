// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Irichelle",
  middleName: "",
  lastName: "Monterozo",
  message: " Debiting opportunities and correcting errors. ",
  icons: [
    {
      image: "fa-github",
      url: "https://irichelle.github.io",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/irichelle.monterozo.5",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/aywishell/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/irichelle-monterozo-1026231b9/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/ayrishell/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/irish.png"),
  imageSize: 300,
  message:
    "My name is Irichelle Monterozo. I’m currently studying BS Accounting Information System in New Era University at Quezon City. I am looking for internship and part-time jobs related to my program that will help me gain experiences before I graduate. During my first year in college, I learned to use SAP Business One and gain a certificate for completing the training. In my free time I like watching tutorials and learning accounting softwares like Microsoft Excel, Xero, Quickbooks and Microsoft Dynamics NAV to gain edge from others as I don't have a lot of work experiences as they do. ",
  resume:require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Grades and Certifications",
  gitHubUsername: "sayrilkun", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/irish.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/irish.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Accounting", value: 90 },
    { name: "Bookkeeping", value: 90 },
    { name: "Microsoft Excel", value: 90 },
    { name: "Data Entry and Word Processing Skills", value: 90 },
    { name: "HTML", value: 90 },
    { name: "SAP", value: 80 },
    { name: "Microsoft Dynamics NAV", value: 20 },
    { name: "Xero", value: 20 },
    { name: "Quickbooks", value: 20 },
    { name: "UI Path", value: 20 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Interpersonal and Communication Skills", value: 90 },
    { name: "Analytical Skills", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Organization", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Accounting or Accounting Information System related opportunities such as internships or part- times! If you know of any positions available or if you have any question, please feel free to contact me at +639456207760 or email me at",
  email: "rishmonterozo@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
