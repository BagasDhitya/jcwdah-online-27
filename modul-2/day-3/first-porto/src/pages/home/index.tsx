// import ReusableText from "./components/ReusableText";
import ExperienceCard from "../../components/ExperienceCard";
import HeaderProfile from "../../components/HeaderProfile";
import SkillBadge from "../../components/SkillBadge";

export default function HomePage() {
  const skills: string[] = ["React", "Typescript", "PostgreSQL"];

  return (
    <div className="cv-container">
      {/* <div>
        <ReusableText name="Budi" age={25} />
        <ReusableText name="Siti" age={22} />
      </div> */}

      <HeaderProfile name="John Doe" role="Fullstack Web Developer" />

      <h3>Skills</h3>
      <div className="skill-container">
        {skills.map((skill, index) => {
          const isLast = index === skills.length - 1;
          const label = isLast ? skill : `${skill}, `;

          return <SkillBadge key={index} skillName={label} />;
        })}
      </div>

      <h3>Work Experience</h3>
      <ExperienceCard
        role="Frontend Engineer"
        company="Tech Innovators Inc."
        period="2024 - Present"
        description="Built scalable dashboard components using React & Typescript for enterprise clients"
      />
      <ExperienceCard
        role="Junior Developer"
        company="Digital Studio"
        period="2023 - 2024"
        description="Maintain client websites, optimized web performance, and fixed bugs"
      />
    </div>
  );
}
