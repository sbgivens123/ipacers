import React, { useState } from "react";
import "./ResearchPage.css";
import researchData from "../../data/Researchpage/research_data.json";

import Header from "../Default/Header.jsx";
import Footer from "../Default/Footer.jsx";

const ResearchPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderOverview = () => (
    <section className="research-section">
      <h2>{researchData.overview.title}</h2>
      <p className="section-intro">{researchData.overview.description}</p>

      <div className="experiments-grid">
        {researchData.overview.experiments.map((exp, idx) => (
          <div key={idx} className="experiment-card">
            <div className="experiment-icon">{exp.icon}</div>
            <h3>{exp.name}</h3>
            <p>{exp.description}</p>
            <ul className="experiment-details">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="research-locations">
        <h3>Research Settings</h3>
        <div className="locations-grid">
          {researchData.overview.settings.map((setting, idx) => (
            <div key={idx} className="location-card">
              <h4>{setting.type}</h4>
              <p>{setting.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  {
    /*
  const renderMethods = () => (
    <section className="research-section">
      <h2>{researchData.methods.title}</h2>
      <p className="section-intro">{researchData.methods.description}</p>

      <div className="technologies-container">
        {researchData.methods.technologies.map((tech, idx) => (
          <div key={idx} className="technology-card">
            <div className="tech-header">
              <span className="tech-icon">{tech.icon}</span>
              <h3>{tech.name}</h3>
            </div>
            <p className="tech-purpose">{tech.purpose}</p>
            <div className="tech-capabilities">
              <h4>Capabilities:</h4>
              <ul>
                {tech.capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </div>
            {tech.applications && (
              <div className="tech-applications">
                <strong>Applications:</strong> {tech.applications}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="methodology-workflow">
        <h3>Research Workflow</h3>
        <div className="workflow-steps">
          {researchData.methods.workflow.map((step, idx) => (
            <div key={idx} className="workflow-step">
              <div className="step-number">{idx + 1}</div>
              <div className="step-content">
                <h4>{step.phase}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
*/
  }
  {
    /*
  const renderExperiments = () => (
    <section className="research-section">
      <h2>{researchData.experiments.title}</h2>
      <p className="section-intro">{researchData.experiments.description}</p>

      <div className="experiments-detailed">
        {researchData.experiments.studies.map((study, idx) => (
          <div key={idx} className="study-card">
            <div className="study-header">
              <h3>{study.title}</h3>
              <span className="study-status">{study.status}</span>
            </div>
            <p className="study-objective">{study.objective}</p>

            <div className="study-details-grid">
              <div className="study-detail">
                <strong>Duration:</strong> {study.duration}
              </div>
              <div className="study-detail">
                <strong>Sample Size:</strong> {study.sampleSize}
              </div>
              <div className="study-detail">
                <strong>Location:</strong> {study.location}
              </div>
            </div>

            <div className="study-parameters">
              <h4>Key Parameters:</h4>
              <div className="parameters-list">
                {study.parameters.map((param, i) => (
                  <span key={i} className="parameter-tag">
                    {param}
                  </span>
                ))}
              </div>
            </div>

            {study.findings && (
              <div className="study-findings">
                <h4>Preliminary Findings:</h4>
                <ul>
                  {study.findings.map((finding, i) => (
                    <li key={i}>{finding}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  const renderDataProducts = () => (
    <section className="research-section">
      <h2>{researchData.dataProducts.title}</h2>
      <p className="section-intro">{researchData.dataProducts.description}</p>

      <div className="data-products-grid">
        {researchData.dataProducts.products.map((product, idx) => (
          <div key={idx} className="data-product-card">
            <div className="product-header">
              <span className="product-icon">{product.icon}</span>
              <h3>{product.name}</h3>
            </div>
            <p>{product.description}</p>

            <div className="product-specs">
              <h4>Specifications:</h4>
              <ul>
                {product.specifications.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="product-access">
              <strong>Access:</strong> {product.access}
            </div>
          </div>
        ))}
      </div>

      <div className="data-availability">
        <h3>Data Availability & Access</h3>
        <p>{researchData.dataProducts.availability.description}</p>
        <div className="availability-options">
          {researchData.dataProducts.availability.options.map((option, idx) => (
            <div key={idx} className="availability-option">
              <h4>{option.type}</h4>
              <p>{option.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
*/
  }

  return (
    <>
      <Header />
      <div className="research-page">
        <div className="research-hero">
          <h1>{researchData.hero.title}</h1>
          <p>{researchData.hero.subtitle}</p>
        </div>

        <nav className="research-nav">
          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          {/* <button
            className={activeTab === "methods" ? "active" : ""}
            onClick={() => setActiveTab("methods")}
          >
            Methods & Technologies
          </button>
          <button
            className={activeTab === "experiments" ? "active" : ""}
            onClick={() => setActiveTab("experiments")}
          >
            Experiments
          </button> */}
        </nav>

        <div className="research-content">
          {activeTab === "overview" && renderOverview()}
          {/* {activeTab === "methods" && renderMethods()}
          {activeTab === "experiments" && renderExperiments()}
          {activeTab === "data" && renderDataProducts()} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResearchPage;
