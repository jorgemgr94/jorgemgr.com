export const technologies = [
  { name: "React", status: 0 },
  { name: "Javascript", status: 0 },
  { name: "Typescript", status: 0 },
  { name: "NodeJs", status: 0 },
  { name: "PostgreSQL", status: 0 },
  { name: "MongoDb", status: 0 },
  { name: "React Native", status: 0 },
  { name: "Gitlab", status: 0 },
  { name: "AWS", status: 0 },
  { name: "Heroku", status: 0 },
  { name: "Docker", status: 0 },
  { name: "Eslint", status: 0 },
  { name: "Google Cloud", status: 0 },
  { name: "Python", status: 0 },

  { name: "Go", status: 1 },
  { name: "Jest", status: 1 },
  { name: "Terraform", status: 1 },
  { name: "TypeORM", status: 1 },
  { name: "Gitlab CI / CD", status: 1 },
  { name: "Kubernetes", status: 1 },
  { name: "GraphQl", status: 1 },
  { name: "Devops", status: 1 },
  { name: "Django", status: 1 },
  { name: "Electron", status: 1 },
  { name: "Rust", status: 1 },
  { name: "Dart", status: 1 },
  { name: "Elixir", status: 1 },
  { name: "Web Assembly", status: 1 },

  { name: "Laravel", status: 2 },
  { name: "VueJS", status: 2 },
  { name: "Php", status: 2 },
  { name: "Html5", status: 2 },
  { name: "CSS3", status: 2 },
  { name: "Android w/ Java", status: 2 },
  { name: "Android w/Kotlin", status: 2 },
  { name: "IOS w/ Swift", status: 2 },
  { name: "MySQL", status: 2 },
  { name: "MariaDB", status: 2 },
  { name: "SQL Server", status: 2 },
  { name: "Bash", status: 2 },
  { name: "Redis", status: 2 },
  { name: "Ruby on Rails", status: 2 }
];

export const positions = [
  {
    name: "Consultant / Full Stack Developer",
    company: "SINTEC",
    startAt: new Date("02/01/2019"),
    endAt: null,
    description:
      "Technical Environment: Php, NodeJs, Javascript, ReactJs, React Native, MySQL, MongoDb, Google Cloud, AWS, Heroku, Git, Docker,"
  },
  {
    name: "Full Stack Developer (Remote, Part time)",
    company: "Garage (Startup)",
    startAt: new Date("07/01/2019"),
    endAt: new Date("12/31/2019"),
    description:
      "Technical Environment: Ruby on Rails, Javascript, ReactJs, PostgreSQL, Heroku, Git, SCRUM, Docker, Gitlab,"
  },
  {
    name: "Full Stack Developer",
    company: "X8bit / SENSAI Empower Success (Startup) / Metalsa",
    startAt: new Date("06/01/2018"),
    endAt: new Date("02/01/2019"),
    description:
      "Technical Environment: NodeJs, Ruby on Rails, Javascript, ReactJs, React Native, MySQL, SQL Server, AWS, Git, SCRUM, Linux server administration, Jira,"
  },
  {
    name: "Team Leader",
    company: "HMS Sistemas de Información / ONCARE",
    startAt: new Date("10/01/2016"),
    endAt: new Date("08/01/2018"),
    description:
      "Technical Environment: Php, Javascript, ReactJs, Android w/ Kotlin, IOS w/ Swift, MySQL, AWS, Git, Linux server administration, Bash,"
  },
  {
    name: "Software Developer",
    company: "HMS Sistemas de Información / ONCARE",
    startAt: new Date("01/01/2015"),
    endAt: new Date("10/01/2016"),
    description:
      "Technical Environment: Php, Javascript, MySQL, AWS, Linux server administration, Bash,"
  },
  {
    name: "Software Developer",
    company: "Ingeniat",
    startAt: new Date("06/01/2014"),
    endAt: new Date("01/01/2015"),
    description:
      "Technical Environment: Php, Javascript, Android w/ Java, MySQL, Linux server administration, Bash,"
  }
];

export const socialNetworks = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/jorgemgr94",
    img: require("../assets/img/social/linkedin.png")
  },
  {
    id: 2,
    name: "Github",
    url: "https://github.com/jorgemgr94",
    img: require("../assets/img/social/github.png")
  },
  {
    id: 3,
    name: "Gitlab",
    url: "https://gitlab.com/jorgemgr94",
    img: require("../assets/img/social/gitlab.png")
  }
];

export const socialIcons = [
  {
    id: 1,
    icon: "fab fa-github",
    url: "https://github.com/jorgemgr94"
  },
  {
    id: 2,
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/jorgemgr94/"
  },
  {
    id: 3,
    icon: "fab fa-gitlab",
    url: "https://gitlab.com/jorgemgr94"
  },
  {
    id: 4,
    icon: "far fa-file-pdf",
    url: "/resume"
  }
];

export const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function formatExperience(d1, d2) {
  const MONTHS_IN_YEAR = 12;
  const MONTHS_TO_YEAR = 3.8052e-10;

  if (!d2) d2 = new Date();
  let e = Math.floor((d2 - d1) * MONTHS_TO_YEAR);
  if (e >= MONTHS_IN_YEAR) {
    let months = e - Math.floor(e / MONTHS_IN_YEAR) * MONTHS_IN_YEAR;
    return `${Math.floor(e / MONTHS_IN_YEAR)} year(s) ${months} month(s)`;
  } else {
    return `${e} month(s)`;
  }
}
