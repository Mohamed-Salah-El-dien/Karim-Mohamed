import Book from "@material-ui/icons/Bookmark";
import Folder from "@material-ui/icons/FolderOpen";
import "./Projects.css";

const Projects = () => {
  const Section = ({ title, tools, description }) => {
    return (
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">{title}</h4>

        <span>{tools}</span>

        <p className="timeline-text">{description}</p>
      </li>
    );
  };

  return (
    <article id="projects" className="projects">
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Book className="icon" />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Faculity of Engineering Mansoura University
            </h4>

            <span>2016 — 2021</span>

            <p className="timeline-text">Electrical Engineering</p>
            <p className="timeline-text">
              <strong>GRADUATION PROJECT :</strong> DESIGN OF LOW VOLTAGE
              ELECTRICAL SYSTEMS IN A HOTEL
            </p>
            <p className="timeline-text">
              <strong>GRADE :</strong> EXCELLENT
            </p>
          </li>
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Folder className="icon" />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <Section
            title="TRAINEE, EGYCET COURSES"
            tools=" 9/2018 – 11/2018
            "
            description="CLASSIC CONTROL COURSE."
          />

          <Section
            title="TRAINEE, TALKHA POWER STATION"
            tools="9/2019 – 10/2019
            "
            description="STEAM, GAS & COMBINED CYCLE POWER PLANT COMPONENT AND HOW THEY WORK."
          />

          <Section
            title="TRAINEE, AL SAFWA ENGINEERING CONSULTING OFFICE"
            tools="8/2020 – 9/2020
            "
            description="ELECTRICAL DESIGN."
          />

          <Section
            title="TRAINEE, DAR AL-KAHRABAA TRAINING CENTER"
            tools="11/2020 – 2/2021
            "
            description="DESIGN – TENDERING - SHOP DRAWING – LIGHT CURRENT."
          />
        </ol>
      </div>
    </article>
  );
};

export default Projects;
