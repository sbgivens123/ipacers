import React, { useState } from "react";
import "./TeamPage.css"; // import the css page
import teamData from "../../data/Teampage/team.json"; // Import the JSON file
import Header from "../Default/Header.jsx";
import Footer from "../Default/Footer.jsx";
// import { Link } from 'react-router-dom';

// Team Member Card Component
const TeamMemberCard = ({ member }) => {
  return (
    <div
      className="team-member-card"
      onClick={() =>
        member.link !== ""
          ? window.open(`${member.link}`, "_blank")
          : window.location.reload()
      }
    >
      <div className="member-image">
        <img
          src={member.image || "/api/placeholder/200/200"}
          alt={member.name}
        />
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-title">{member.title}</p>
        {member.department && (
          <p className="member-department">{member.department}</p>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} className="member-email">
            {member.email}
          </a>
        )}
        {/* {member.bio && <p className="member-bio">{member.bio}</p>} */}
      </div>
    </div>
  );
};

// Team Section Component
const TeamSection = ({ title, members, columns = 3 }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="team-section">
      <h2 className="section-title">{title}</h2>
      <div className={`team-grid columns-${columns}`}>
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

// Main Team Page Component
const TeamPage = () => {
  const [team, setTeam] = useState(teamData);

  return (
    <>
      <Header />
      <div className="team-page">
        <header className="page-header">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Meet the researchers, students, and staff working on the iPACERS
            project
          </p>
        </header>

        <div className="team-content">
          <TeamSection
            title="Principal Investigators"
            members={team.pis}
            columns={3}
          />

          {/* <TeamSection
            title="Co-Principal Investigators & Collaborators"
            members={team.coPis}
            columns={2}
          /> */}
          <TeamSection title="Post-Doc" members={team.postdocs} columns={1} />
          <TeamSection
            title="Graduate Students"
            members={team.gradStudents}
            columns={3}
          />

          {/* <TeamSection
            title="Undergraduate Students"
            members={team.undergradStudents}
            columns={3}
          /> */}
          {/* 
          <TeamSection
            title="Extension & Outreach Staff"
            members={team.extensionStaff}
            columns={2}
          /> */}

          {/* <TeamSection
            title="Alumni & Former Students"
            members={team.alumni}
            columns={3}
          /> */}
        </div>

        {/* <footer className="team-footer">
          <p>
            Interested in joining our team? <a href="/contact">Contact us</a> to
            learn about opportunities.
          </p>
        </footer> */}
      </div>
      <Footer />
    </>
  );
};

export default TeamPage;
