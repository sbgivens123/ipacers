import "./AboutPage.css";
import Header from "../Default/Header";
import Footer from "../Default/Footer";
import Links from "../Default/Links";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About iPACERS</h1>
          <p className="hero-subtitle">
            Interdisciplinary Program of Advancing Climate Extreme Resilience in
            Soybean
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="about-section overview-section">
        <div className="section-content">
          <h2 className="section-title">Project Overview</h2>

          <div className="overview-grid">
            <div className="overview-card">
              <h3>Our Mission</h3>
              <p>
                The iPACERS project integrates cutting-edge sensor technology
                with hands-on education to understand how soybeans respond to
                heat and drought stress in the early stages of the reproductive
                stage do help farmers make in-season management decisions.
              </p>
            </div>

            <div className="overview-card">
              <h3>Goals</h3>
              <ul>
                <li>
                  Develop high-throughput phenotyping systems to monitor plant
                  stress responses
                </li>
                <li>
                  Collect real-time data on crop performance under heat and
                  drought conditions
                </li>
                <li>
                  Engage students and community members through hands-on STEM
                  education
                </li>
                <li>
                  Create data-driven insights for climate-resilient agriculture
                </li>
              </ul>
            </div>

            <div className="overview-card">
              <h3>Big Questions We're Addressing</h3>
              <ul>
                <li>
                  How do crops respond to combined heat and drought stress?
                </li>
                <li>
                  Can sensor technology predict plant stress before visible
                  symptoms appear?
                </li>
                <li>
                  What traits make crops more resilient to climate extremes?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline
      <section className="about-section timeline-section">
        <div className="section-content">
          <h2 className="section-title">Project Timeline & Milestones</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Year 1 (2024)</h3>
                <ul>
                  <li>Make criteria for student summer interns </li>
                  <li>Temp greenhouse design made</li>
                  <li>Temp field setup made</li>
                  <li>Temp assembly and Project launch</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Year 2 (2025)</h3>
                <ul>
                  <li>Sensor system installed in greenhouse</li>
                  <li>2 greenhouse trials connected</li>
                  <li>First round of student summer interns</li>
                  <li>Field set-up tested</li>
                  <li>Summer Camp curriculum made</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Year 3 (2026)</h3>
                <ul>
                  <li>New field machine built and tested</li>
                  <li>Field trials start</li>
                  <li>Inaugural summer camp start</li>
                </ul>
              </div>
            </div> */}
      {/* // uncomment this to include it in the website and just modify the
            li tags */}
      {/* <div className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <h3>Year 4 (2027)</h3>
                <ul>
                  <li>Comprehensive data synthesis and modeling</li>
                  <li>Educational materials dissemination to schools</li>
                  <li>Final research outputs and recommendations</li>
                  <li>Project evaluation and future planning</li>
                </ul>
              </div>
            </div> */}
      {/* </div>
        </div>
      </section> */}

      {/* Study System */}
      <section className="about-section study-section">
        <div className="section-content">
          <h2 className="section-title">Study System & Locations</h2>

          <div className="study-grid">
            <div className="study-card">
              <div className="study-icon">🏢</div>
              <h3>Greenhouse Facilities</h3>
              <p>
                State-of-the-art controlled environment chambers at Mississippi
                State University allow us to precisely manipulate temperature,
                humidity, and water availability. These facilities house our
                high-throughput phenotyping systems including PlantEye 3D
                scanners and multispectral imaging systems.
              </p>
            </div>

            <div className="study-card">
              <div className="study-icon">🌾</div>
              <h3>Field Research Sites</h3>
              <p>
                Multiple field locations on North Farm fields provide real-world
                testing environments. These sites represent diverse soil types
                and microclimates, enabling us to validate greenhouse findings
                and study plant responses under natural conditions.
              </p>
            </div>

            <div className="study-card">
              <div className="study-icon">📡</div>
              <h3>Sensor Technology</h3>
              <p>
                Our integrated sensor suite includes 3D imaging systems, thermal
                cameras, multispectral sensors, and environmental monitors.
                OAK-D cameras and custom spectroscopy equipment capture detailed
                plant physiological data throughout the growing season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Diagram */}
      <section className="about-section diagram-section">
        <div className="section-content">
          <h2 className="section-title">How It All Connects</h2>

          <div className="system-diagram">
            <div className="diagram-component sensors">
              <div className="component-icon">📡</div>
              <h4>Sensor Systems</h4>
              <p>Collect real-time plant data</p>
            </div>

            <div className="diagram-arrow">→</div>

            <div className="diagram-component data">
              <div className="component-icon">💾</div>
              <h4>Data Analysis</h4>
              <p>Process and interpret measurements</p>
            </div>

            <div className="diagram-arrow">→</div>

            <div className="diagram-component research">
              <div className="component-icon">🔬</div>
              <h4>Research Insights</h4>
              <p>Understand stress responses</p>
            </div>

            <div className="diagram-flow-down">↓</div>

            <div className="diagram-component-wide outreach">
              <div className="component-icon">👨‍🎓</div>
              <h4>Education & Outreach</h4>
              <p>
                Share knowledge through summer camps, workshops, and community
                engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="about-section funding-section">
        <div className="section-content">
          <h2 className="section-title">Funding & Acknowledgements</h2>

          <div className="funding-content">
            <div className="funding-primary">
              <h3>Primary Support</h3>

              <div className="funding-image">
                <img
                  src="NSF-Emblem.png"
                  alt="National Science Foundation Logo"
                />
              </div>

              <p>
                This project is supported by the National Science Foundation
                under Grant No. #241823. Any opinions, findings, and conclusions
                or recommendations expressed in this material are those of the
                authors and do not necessarily reflect the views of the National
                Science Foundation.
              </p>
            </div>

            <div className="funding-partners">
              <h3>Mississippi State Partners</h3>
              <div className="partners-grid">
                <div
                  className="partner-card"
                  onClick={() => {
                    window.open("https://www.abe.msstate.edu/", "_blank");
                  }}
                >
                  <strong>
                    Department of Agricultural & Biological Engineering
                  </strong>
                </div>
                <div
                  className="partner-card"
                  onClick={() => {
                    window.open("https://www.pss.msstate.edu/", "_blank");
                  }}
                >
                  <strong>Department of Plant & Soil Sciences</strong>
                </div>
                <div
                  className="partner-card"
                  onClick={() => {
                    window.open("https://www.humansci.msstate.edu/", "_blank");
                  }}
                >
                  <strong>School of Human Science</strong>
                </div>
              </div>
            </div>

            <div className="funding-thanks">
              <p>
                We are grateful to all our collaborators, students, and
                community partners who make this research and education
                initiative possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Links />
      <Footer />
    </div>
  );
};

export default AboutPage;
