import React, { useState } from "react";
import "./Outreach.css";
import outreachData from "../../data/OutreachPage/outreach.json";
import Links from "../Default/Links";
import Header from "../Default/Header";
import Footer from "../Default/Footer";

function InternSection() {
  return (
    <>
      <section className="intern-section">
        <h2 className="intern-header">Summer Internships</h2>
        <a href="26-iPACERS Intern Flyer.pdf" download="iPACERS-Flyer-2026.pdf">
          <img
            src="26-iPACERS Intern Flyer.png"
            alt="Intern Flyer"
            className="intern-image"
          />
        </a>
      </section>
    </>
  );
}

function OutreachHub() {
  const [data] = useState(outreachData);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");

  if (selectedProgram) {
    const program = data.programs.find((p) => p.id === selectedProgram);

    return (
      <div className="outreach-container" id="outreach-container">
        <header className="program-detail-header">
          <div className="header-content">
            <button
              className="btn-back"
              onClick={() => setSelectedProgram(null)}
            >
              ← Back to Outreach Hub
            </button>
            <h1>{program.title}</h1>
            <p className="program-subtitle">{program.shortDescription}</p>
          </div>
        </header>

        {/* filter method below excludes the code from displaying nav links in summer camp hub*/}
        {program.id === "summer-camp" && (
          <nav className="section-nav">
            <div className="nav-tabs">
              {Object.keys(program.sections)
                .filter(
                  (section) =>
                    ![
                      "parentsTeachers",
                      "schedule",
                      "gallery",
                      "contact",
                      "apply",
                    ].includes(section),
                )
                .map((section) => (
                  <button
                    key={section}
                    className={`nav-tab ${
                      activeSection === section ? "active" : ""
                    }`}
                    onClick={() => setActiveSection(section)}
                  >
                    {program.sections[section].title}
                  </button>
                ))}
            </div>
          </nav>
        )}

        <main className="program-content">
          {program.id === "summer-camp" ? (
            <div>
              {activeSection === "overview" && (
                <div className="section-content">
                  <p className="lead-text">
                    {program.sections.overview.content}
                  </p>
                  <div className="content-card highlight-card">
                    <h3>
                      No prior experience required. Open to students who have
                      completed grades 9-12 and have an interest in
                      science,agriculture, or technology.
                    </h3>
                    <p>{program.sections.overview.prerequisites}</p>
                  </div>
                  {/* <h3>Learning Objectives</h3>
                  <div className="objectives-list">
                    {program.sections.overview.objectives.map((obj, idx) => (
                      <div key={idx} className="objective-item">
                        <p>• {obj}</p>
                      </div>
                    ))}
                  </div> */}

                  {/* // camp contact and how to apply links added here */}

                  <div className="section-content">
                    <div className="application-banner">
                      <h3>{program.sections.apply.cost}</h3>
                      <p>{program.sections.apply.applicationPeriod}</p>
                      <p className="deadline">
                        {program.sections.apply.deadline}
                      </p>
                      <button
                        className="btn-primary btn-gold btn-large"
                        onClick={() =>
                          window.open(
                            "https://goto.msstate.edu/register/?id=c7f7a8a1-086a-4698-9caa-79b2b9cb7564",
                            "_blank",
                          )
                        }
                      >
                        Apply Now
                      </button>
                    </div>

                    <div className="two-column-grid">
                      <div className="content-card">
                        <h4>Eligibility</h4>
                        <ul className="check-list">
                          {program.sections.apply.eligibility.map(
                            (item, idx) => (
                              <li key={idx}>✓ {item}</li>
                            ),
                          )}
                        </ul>
                      </div>

                      <div className="content-card gold-border">
                        <h4>Application Requirements</h4>
                        <ol className="numbered-list">
                          {program.sections.apply.requirements.map(
                            (item, idx) => (
                              <li key={idx}>{item}</li>
                            ),
                          )}
                        </ol>
                      </div>
                    </div>

                    <div className="content-card">
                      <h4>Selection Process</h4>
                      <p>{program.sections.apply.selectionProcess}</p>
                    </div>
                  </div>

                  <div className="section-content">
                    <div className="contact-box">
                      <h3>Contact Us</h3>
                      <div className="contact-info">
                        <p>
                          <strong>Camp Coordinator:</strong>
                          {program.sections.contact.coordinator}
                        </p>
                        <p>
                          <strong>Email:</strong>
                          <a href={`mailto:${program.sections.contact.email}`}>
                            {program.sections.contact.email}
                          </a>
                        </p>
                        <p>
                          <strong>Phone:</strong>
                          {program.sections.contact.phone}
                        </p>
                        <p>
                          <strong>Office:</strong>
                          {program.sections.contact.office}
                        </p>
                        {/* <p>
                        <strong>Hours:</strong>
                        {program.sections.contact.hours}
                      </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* {activeSection === "apply" && (
               
              )} */}

              {activeSection === "faq" && (
                <div className="section-content">
                  <div className="faq-list">
                    {program.sections.faq.questions.map((item, idx) => (
                      <div key={idx} className="faq-item">
                        <h4 className="faq-question">Q: {item.q}</h4>
                        <p className="faq-answer">A: {item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="section-content">
              <div className="activities-grid">
                {program.activities.map((activity, idx) => (
                  <div key={idx} className="activity-card">
                    <h3>{activity.title}</h3>
                    <p className="activity-description">
                      {activity.description}
                    </p>
                    <p className="activity-audience">
                      <strong>Target Audience:</strong> {activity.audience}
                    </p>

                    {activity.topics && (
                      <div className="activity-section">
                        <h4>Topics Covered:</h4>
                        <ul>
                          {activity.topics.map((topic, i) => (
                            <li key={i}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activity.availableModules && (
                      <div className="activity-section">
                        <h4>Available Modules:</h4>
                        {activity.availableModules.map((module, i) => (
                          <div key={i} className="module-card">
                            <p className="module-title">{module.title}</p>
                            <p className="module-detail">
                              Duration: {module.duration}
                            </p>
                            <p className="module-detail">
                              Activities: {module.activities}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activity.upcoming && (
                      <div className="activity-section">
                        <h4>Upcoming Events:</h4>
                        {activity.upcoming.map((event, i) => (
                          <p key={i}>📅 {event}</p>
                        ))}
                      </div>
                    )}

                    {activity.recentEvents && (
                      <div className="activity-section">
                        <h4>Recent Events:</h4>
                        {activity.recentEvents.map((event, i) => (
                          <p key={i}>✓ {event}</p>
                        ))}
                      </div>
                    )}

                    <div className="how-to-box">
                      <h4>
                        How to{" "}
                        {activity.howToParticipate
                          ? "Participate"
                          : activity.howToRequest
                            ? "Request"
                            : "Engage"}
                        :
                      </h4>
                      <p>
                        {activity.howToParticipate ||
                          activity.howToRequest ||
                          activity.howToEngage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="outreach-container">
      <Header />
      <header className="header">
        <div className="header-content">
          <h1>{data.page.title}</h1>
          <p className="subtitle">{data.page.subtitle}</p>
          <p className="header-intro">{data.page.intro}</p>
        </div>
      </header>

      <main className="main-content">
        <div className="programs-grid">
          {data.programs.map((program) => (
            <div
              key={program.id}
              className="program-card"
              onClick={() => setSelectedProgram(program.id)}
            >
              <div
                className="program-header"
                style={{
                  background: `linear-gradient(135deg, ${program.color} 0%, #3D0F19 100%)`,
                }}
                id="summer-camp"
              >
                <div className="program-icon">{program.icon}</div>
                <h2>{program.title}</h2>
                <p>{program.targetAudience}</p>
              </div>

              <div className="program-body">
                <p className="program-description">
                  {program.shortDescription}
                </p>

                <h4>Highlights:</h4>
                <ul className="program-highlights">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <div className="program-footer">
                  <span className="next-session">
                    Next: {program.nextSession}
                  </span>
                  <button
                    className="btn-primary"
                    style={{ background: program.color }}
                  >
                    Learn More →
                  </button>
                </div>
                <div className="program-footer">
                  <button
                    className="btn-primary"
                    style={{ background: program.color, width: "100%" }}
                    onClick={() =>
                      window.open(
                        "https://goto.msstate.edu/register/?id=c7f7a8a1-086a-4698-9caa-79b2b9cb7564",
                        "_blank",
                      )
                    }
                  >
                    Apply for the Camp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 
        <section className="impact-section">
          <h2>{data.impact.title}</h2>
          <div className="impact-stats">
            {data.impact.stats.map((stat, idx) => (
              <div key={idx} className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section> */}

        <InternSection />

        {/* <section className="get-involved-section" id="get-involved">
          <h2>{data.getInvolved.title}</h2>

          <div className="opportunities-grid">
            {data.getInvolved.opportunities.map((opp, idx) => (
              <div key={idx} className="opportunity-card">
                <p>{opp}</p>
              </div>
            ))}
          </div>

          <div className="contact-banner">
            <h3>Contact Our Outreach Team</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${data.getInvolved.contact.email}`}>
                {data.getInvolved.contact.email}
              </a>
            </p>
            {/* <p>
              <strong>Phone:</strong> {data.getInvolved.contact.phone}
            </p> */}
        {/*}   </div>
        </section> */}
      </main>
      <Links />
      <Footer />
    </div>
  );
}

export default OutreachHub;
