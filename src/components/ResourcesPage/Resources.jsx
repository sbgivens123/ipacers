// import header, links and footer
import Header from "../Default/Header.jsx";
import Links from "../Default/Links.jsx";
import Footer from "../Default/Footer.jsx";
import "./Resources.css";
// data file
import resources from "../../data/ResourcesPage/resources.json";

export default function Resources() {
  const renderSection = (key) => {
    const sectionData = resources[key];
    if (!sectionData || sectionData.length === 0) return null;

    const title = sectionData[0];
    const items = sectionData.slice(1);

    return (
      <section className="resource-section" key={key}>
        <h2 className="section-title">{title}</h2>
        <div className="resource-grid">
          {items.map((item, index) => (
            <div className="resource-card" key={index}>
              {typeof item === "string" ? (
                <a
                  href={item}
                  className="resource-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-content">
                    <span className="link-icon">🔗</span>
                    <span className="link-text">{item}</span>
                  </div>
                </a>
              ) : typeof item === "object" && item !== null ? (
                <div className="card-content">
                  {item.title && <h3 className="item-title">{item.title}</h3>}
                  {item.description && (
                    <p className="item-description">{item.description}</p>
                  )}
                  {item.link && (
                    <a
                      href={item.link}
                      className="item-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Access Resource
                    </a>
                  )}
                  {item.download && (
                    <a
                      href={item.download}
                      className="item-button download"
                      download
                    >
                      Download
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="resources-page">
        <Header />

        <main className="resources-main">
          <div className="resources-hero">
            <h1 className="hero-title">Resources</h1>
            <p className="hero-subtitle">
              Educational materials, datasets, and tools for teachers, students,
              and researchers
            </p>
          </div>

          <div className="resources-container">
            {Object.keys(resources).map((key) => renderSection(key))}
          </div>
        </main>

        <Links />
        <Footer />
      </div>
    </>
  );
}
