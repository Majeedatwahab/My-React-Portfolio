import SkillsData from '../data/SkillsData.json';
import '../components-css/Skills.css';

function Skills() {
   
  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-content">
          <h2 className="skills-header">
            My <span>Skills</span>
          </h2>
          <div className="skills-container">
            {SkillsData.SkillsData.map((skill) => {
              return (
                <div key={skill.id} className="skill-item">
                  <img className={skill.className} src={skill.icon} alt={skill.alt} />
                  <h3>{skill.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
