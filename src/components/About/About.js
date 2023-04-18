import LinkedInIcon from "@material-ui/icons/LinkedIn";
import cv from "../../karim-C.V-2.pdf";
import "./About.css";

const About = () => {
  return (
    <div className="about center">
      <h1>
        Hi, I am <span className="about__name">Karim Mohamed.</span>
      </h1>

      <h2 className="about__role">An Electrical Engineer.</h2>
      <p className="about__desc">
        SYSTEMATIC ELECTRICAL ENGINEER HAS AN EXPERIENCE IN MANAGING ELECTRICAL
        PROJECTS SEARCHING FOR AN OPPORTUNITY TO DEVELOP MY SKILLS, KNOWLEDGE,
        AND EXPERIENCE IN THE FIELD OF ELECTRICAL ENGINEERING
      </p>

      <div className="about__contact center">
        <a href={cv} download="Karim-CV.pdf">
          <span type="button" className="btn btn--outline">
            Resume
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/karim-elkenany-bb67441b3/"
          target="__blank"
          aria-label="linkedin"
          className="link link--icon"
        >
          <LinkedInIcon className="icon" />
        </a>
      </div>
    </div>
  );
};

export default About;
