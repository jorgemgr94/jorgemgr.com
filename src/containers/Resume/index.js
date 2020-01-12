import React from "react";
import Header from "./Header";
import ProfessionalExperience from "./ProfessionalExperience";
import TechnicalExperience from "./TechnicalExperience";

const profesional_experience = [
  {
    id: 6,
    img: require("../../assets/img/works/garage.png"),
    position: "Full Stack Developer (Remote, Part time)",
    company: "Garage (Startup)",
    startAt: new Date("07/01/2019"),
    endAt: null,
    description: "",
    programming_languages: [
      { id: 3, name: "Ruby on Rails", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 6, name: "ReactJs", area: 1 },
      { id: 13, name: "PostgreSQL", area: 3 },
      { id: 17, name: "Heroku", area: 4 },
      { id: 18, name: "Git", area: 5 },
      { id: 19, name: "SCRUM", area: 5 },
      { id: 23, name: "Docker", area: 5 },
      { id: 24, name: "Gitlab", area: 5 }
    ]
  },
  {
    id: 5,
    img: require("../../assets/img/works/sintec.png"),
    position: "Consultant / Full Stack Developer",
    company: "SINTEC",
    startAt: new Date("02/01/2019"),
    endAt: null,
    description: "",
    programming_languages: [
      { id: 1, name: "Php", area: 0 },
      { id: 2, name: "NodeJs", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 6, name: "ReactJs", area: 1 },
      { id: 10, name: "React Native", area: 2 },
      { id: 11, name: "MySql", area: 3 },
      { id: 14, name: "MongoDb", area: 3 },
      { id: 15, name: "Google Cloud", area: 4 },
      { id: 16, name: "AWS", area: 4 },
      { id: 17, name: "Heroku", area: 4 },
      { id: 18, name: "Git", area: 5 },
      { id: 23, name: "Docker", area: 5 }
    ]
  },
  {
    id: 4,
    img: require("../../assets/img/works/sensai.jpg"),
    position: "Full Stack Developer",
    company: "X8bit / SENSAI Empower Success (Startup) / Metalsa",
    startAt: new Date("06/01/2018"),
    endAt: new Date("02/01/2019"),
    programming_languages: [
      { id: 2, name: "NodeJs", area: 0 },
      { id: 3, name: "Ruby on Rails", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 6, name: "ReactJs", area: 1 },
      { id: 10, name: "React Native", area: 2 },
      { id: 11, name: "MySql", area: 3 },
      { id: 12, name: "SQL Server", area: 3 },
      { id: 16, name: "AWS", area: 4 },
      { id: 18, name: "Git", area: 5 },
      { id: 19, name: "SCRUM", area: 5 },
      { id: 20, name: "Linux server administration", area: 5 },
      { id: 22, name: "Jira", area: 5 }
    ],
    description:
      "Development of an integrated solution of the industry 4.0 that consists of reading information from a Schuler PLC through the mqtt protocol with NodeJs, this with the objective of getting relevant information about the press performance, such as stoppages on the machine, run times, design speed, current status of the machine, etc.\nThe solution consists in a hybrid application (React native) which is managed by a operators team of the machine, in this application the user can visualize production records of past days, capture production records, identify stoppages by area, report of stoppages by area, and real-time monitoring of the Schuler press. The registered stoppages as well as the information that the operator captures are displayed on a web page (ReactJs) which contains reports per day, detailed reports per hour, per run, as well as KPI indicators with graphs, this part of the solution helps to take decisions instantly to administrative users, as well as monitor the production in real time.\nAnother part of the solution is the ANDON screen, this screen is basically a mirror between the machine and a TV screen placed on the floor, where shows the actual status of the press, the production in process, etc. This project has scope to integrate technologies such as machine learning, artificial intelligence to the prevention of failures and processes speed up.",
    technologies:
      "React Native, Javascript, ReactJs, NodeJs, Express, Sequelize, MySql, Ruby on Rails, SQL Server, Linux server administration, Bash, Git, Jira, SCRUM, JSON, AWS."
  },
  {
    id: 3,
    img: require("../../assets/img/works/hms.png"),
    position: "Team Leader",
    company: "HMS Sistemas de Información / ONCARE",
    startAt: new Date("10/01/2016"),
    endAt: new Date("08/01/2018"),
    programming_languages: [
      { id: 1, name: "Php", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 6, name: "ReactJs", area: 1 },
      { id: 8, name: "Android w/ Kotlin", area: 2 },
      { id: 9, name: "IOS w/ Swift", area: 2 },
      { id: 11, name: "MySql", area: 3 },
      { id: 16, name: "AWS", area: 4 },
      { id: 18, name: "Git", area: 5 },
      { id: 20, name: "Linux server administration", area: 5 },
      { id: 21, name: "Bash", area: 5 }
    ],
    description:
      "Team Leader of a team of 5 software developers, my main activities were: Take meetings with the client for software planning and requirements (ERP for Oncology purpose). Research, development, and implementation of new technologies by company or client requirements (artificial intelligence, internet of things, business intelligence, neural networks, machine learning, big data, DevOps) Project management, Needs generation for clients, Priorities and Time management. Supervise and support in software development, activities analysis and scheduling, quality assurance. AWS, Linux server administration, and Shell scripting for libraries, backups, and structure of ERP (Bash) Process design, software development and implementation of new work units on the ERP like Clinical Analysis Laboratory, RIS & PACS and Ambulatory surgery."
  },
  {
    id: 2,
    img: require("../../assets/img/works/hms.png"),
    position: "Software Developer",
    company: "HMS Sistemas de Información / ONCARE",
    startAt: new Date("01/01/2015"),
    endAt: new Date("10/01/2016"),
    programming_languages: [
      { id: 1, name: "Php", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 11, name: "MySql", area: 3 },
      { id: 16, name: "AWS", area: 4 },
      { id: 20, name: "Linux server administration", area: 5 },
      { id: 21, name: "Bash", area: 5 }
    ],
    description:
      "Process and Database design, Priorities and Time management. Activities analysis and scheduling, quality assurance. AWS, Linux server administration, and Shell scripting for libraries, backups, and structure of ERP (Bash) Software development of new features to ERP for Oncology purpose which consists in the complete Oncology process of a patient and the contact with the treatment center, the process goes from appointment scheduling, management of event schedule, charges of medicines and supplies by event, billing and stamping with PACS."
  },
  {
    id: 1,
    img: require("../../assets/img/works/ingeniat.png"),
    position: "Software Developer",
    company: "Ingeniat",
    startAt: new Date("06/01/2014"),
    endAt: new Date("01/01/2015"),
    programming_languages: [
      { id: 1, name: "Php", area: 0 },
      { id: 5, name: "Javascript", area: 1 },
      { id: 7, name: "Android w/ Java", area: 2 },
      { id: 11, name: "MySql", area: 3 },
      { id: 20, name: "Linux server administration", area: 5 },
      { id: 21, name: "Bash", area: 5 }
    ],
    description:
      "Development of new features, fix of bugs and maintenance of the Ingeniat platform and Android app (Java). Shell scripting for automated processes on Linux servers (Bash), one of them consisted of reading a PDF (Book) separate it by pages, then covert the pages to SVG, map page by page and upload to s3 after pass the SVG through a Regex who clean the SVG from certain characters, creating a MySQL record in relation to the book and his pages."
  }
];

function Resume() {
  return (
    <div className="resume">
      <section className="paper">
        <section className="container">
          <Header />
          <main>
            <TechnicalExperience />
            <ProfessionalExperience data={profesional_experience} />
          </main>

          <img
            alt="print"
            className="print-icon"
            onClick={window.print}
            src={require("../../assets/img/print.png")}
          />
        </section>
      </section>
    </div>
  );
}

export default Resume;
