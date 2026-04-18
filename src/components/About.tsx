import "./styles/About.css";

const skills = [
  { cat: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Tailwind CSS", "Framer Motion"] },
  { cat: "Backend", items: ["Node.js", "Electron.js", "Python", "REST APIs"] },
  { cat: "Databases", items: ["SQL", "Supabase", "PostgreSQL", "Firebase"] },
  { cat: "Tools", items: ["Git", "GitHub", "VS Code", "i18next", "Vite"] },
];

const education = [
  { degree: "B.Tech, Computer Science", school: "KCCITM", year: "2023 – 2027" },
  { degree: "XII (CBSE)", school: "S.J.S Public School", year: "2022" },
  { degree: "X (CBSE)", school: "S.J.S Public School", year: "2020" },
];

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-inner">

        {/* Header */}
        <div className="about-header">
          <span className="about-label">About Me</span>
          <h2 className="about-title">
            Building things <br />
            <span>that matter.</span>
          </h2>
        </div>

        {/* Bio + Stats row */}
        <div className="about-top">
          <p className="about-bio">
            I'm <strong>Avinash Bajpai</strong> — a B.Tech Computer Science student at KCCITM (2023–2027),
            based in <strong>Delhi NCR</strong>. I'm a full-stack developer who loves turning ideas into
            polished, production-ready products. From AI-powered healthcare platforms to native Windows
            desktop utilities, I build across the entire stack.
            <br /><br />
            A proud <strong>Hacktoberfest 2025 Super Contributor</strong>, I actively collaborate on
            open-source projects — fixing bugs, improving UIs, and shipping meaningful pull requests.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <h3>3+</h3>
              <p>Projects Shipped</p>
            </div>
            <div className="about-stat">
              <h3>2025</h3>
              <p>Hacktoberfest Super Contributor</p>
            </div>
            <div className="about-stat">
              <h3>10+</h3>
              <p>Technologies Mastered</p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="about-skills-section">
          <h4 className="about-section-title">Skills &amp; Technologies</h4>
          <div className="about-skills-grid">
            {skills.map((group) => (
              <div className="about-skill-group" key={group.cat}>
                <span className="about-skill-cat">{group.cat}</span>
                <div className="about-skill-tags">
                  {group.items.map((item) => (
                    <span className="about-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="about-education-section">
          <h4 className="about-section-title">Education</h4>
          <div className="about-edu-list">
            {education.map((edu) => (
              <div className="about-edu-card" key={edu.degree}>
                <div className="about-edu-dot"></div>
                <div className="about-edu-info">
                  <h5>{edu.degree}</h5>
                  <p>{edu.school}</p>
                </div>
                <span className="about-edu-year">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
