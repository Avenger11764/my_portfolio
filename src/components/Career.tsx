import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Super Contributor</h4>
                <h5>Hacktoberfest · Open Source</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively participated in Hacktoberfest, making numerous web
              development contributions to various open-source projects.
              Utilized Git and GitHub to fork repositories, create branches,
              submit detailed pull requests, and collaborate with project
              maintainers. Successfully merged multiple PRs focused on fixing
              bugs, improving UI, and enhancing documentation — earning
              "Super Contributor" status for high-quality engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>KCCITM · Delhi NCR</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science at KCCITM.
              Building strong foundations in algorithms, data structures,
              full-stack development, and software engineering while shipping
              real-world projects in parallel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>XII (CBSE)</h4>
                <h5>S.J.S Public School</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Class XII under the CBSE board at S.J.S Public School,
              building a strong academic foundation before pursuing computer
              science engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>X (CBSE)</h4>
                <h5>S.J.S Public School</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Class X under the CBSE board at S.J.S Public School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
