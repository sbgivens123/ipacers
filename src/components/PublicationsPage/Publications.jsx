import Header from "../Default/Header";
import Footer from "../Default/Footer";
import "./Publications.css";

const Publications = () => {
  const journalArticles = [
    {
      id: 1,
      authors:
        "Thingujam, D.; Gouli, S.; Cooray, S.P.; Chandran, K.B.; Givens, S.B.; Gandhimeyyan, R.V.; Tan, Z.; Wang, Y.; Patam, K.; Greer, S.A.; et al.",
      year: 2025,
      title:
        "Climate-Resilient Crops: Integrating AI, Multi-Omics, and Advanced Phenotyping to Address Global Agricultural and Societal Challenges",
      journal: "Plants",
      volume: "14",
      pages: "14172699",
      doi: "https://doi.org/10.3390/plants14172699",
    },
  ];

  //   },
  //   {
  //     id: 2,
  //     authors:
  //       "Silva, F.H.C.A., Wijewardane, N.K., Bheemanahalli, R., Reddy, K.R., Zhang, X., Vennam, R.R.",
  //     year: 2023,
  //     title:
  //       "Comparison of UV, visible and near-infrared, and mid-infrared spectrometers to estimate maize and sorghum leaf nutrients using dry-intact and ground leaves",
  //     journal: "Computers and Electronics in Agriculture",
  //     volume: "211",
  //     pages: "108001",
  //     doi: "https://doi.org/10.1016/j.compag.2023.108001",
  //   },
  //   {
  //     id: 3,
  //     authors:
  //       "Whatley, C. R., Wijewardane, N. K., Bheemanahalli, R., Reddy, K. R., & Lu, Y.",
  //     year: 2023,
  //     title:
  //       "Effects of fine grinding on mid-infrared spectroscopic analysis of plant leaf nutrient content",
  //     journal: "Scientific Reports",
  //     volume: "13(1)",
  //     pages: "6314",
  //     doi: "https://doi.org/10.1038/s41598-023-33558-5",
  //   },
  //   {
  //     id: 4,
  //     authors:
  //       "Wijewardane, N. K., Zhang, H., Yang, J., Schnable, J. C., Schachtman, D. P., & Ge, Y.",
  //     year: 2023,
  //     title:
  //       "A leaf-level spectral library to support high throughput plant phenotyping: Predictive accuracy and model transfer",
  //     journal: "Journal of Experimental Botany",
  //     volume: "erad129",
  //     pages: "",
  //     doi: "https://doi.org/10.1093/jxb/erad129",
  //   },
  //   {
  //     id: 5,
  //     authors:
  //       "Silva, F. H. C. A., Wijewardane, N. K., Cox, M. S., & Zhang, X.",
  //     year: 2025,
  //     title:
  //       "Assessment of different VisNIR and MIR spectroscopic techniques and the potential of calibration transfer between MIR laboratory and portable instruments to estimate soil properties",
  //     journal: "Soil and Tillage Research",
  //     volume: "251",
  //     pages: "106555",
  //     doi: "https://doi.org/10.1016/j.still.2025.106555",
  //   },
  //   {
  //     id: 6,
  //     authors: "Yang, Y., Wijewardane, N. K., Harvey, L., & others",
  //     year: 2025,
  //     title:
  //       "Sweetpotato moisture content and textural property estimation using hyperspectral imaging and machine learning",
  //     journal: "Food Measurement and Characterization",
  //     volume: "19",
  //     pages: "2700–2716",
  //     doi: "https://doi.org/10.1007/s11694-025-03140-w",
  //   },
  //   {
  //     id: 7,
  //     authors: "Yadav, S. A., Wijewardane, N. K., Zhang, X., & others",
  //     year: 2025,
  //     title:
  //       "Context-aware deep learning model for yield prediction in potato using time-series UAS multispectral data",
  //     journal:
  //       "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
  //     volume: "18",
  //     pages: "6096–6115",
  //     doi: "https://doi.org/10.1109/JSTARS.2025.3539217",
  //   },
  //   {
  //     id: 8,
  //     authors:
  //       "Yang, Y., Wijewardane, N. K., Slonecki, T. J., Wadl, P. A., Andreason, S. A., Chen, J., & Harvey, L.",
  //     year: 2025,
  //     title:
  //       "Nondestructive detection of sweet potato leaf curl virus using 3D laser imaging combined with deep learning",
  //     journal: "Smart Agricultural Technology",
  //     volume: "11",
  //     pages: "101004",
  //     doi: "https://doi.org/10.1016/j.atech.2025.101004",
  //   },
  // ];

  // const conferenceArticles = [
  //   {
  //     id: 1,
  //     authors: "Yadav, S. A., Wijewardane, N. K., Zhang, X., & McCraine, D.",
  //     year: 2025,
  //     month: "May",
  //     title:
  //       "Radiometric and modified RossThick-LiSparse BRDF correction for low-altitude UAV data at varying solar-sensor geometries for time-series analysis",
  //     conference:
  //       "Autonomous Air and Ground Sensing Systems for Agricultural Optimization and Phenotyping X",
  //     proceedings: "Proc. SPIE 13475, 1347502",
  //     doi: "https://doi.org/10.1117/12.3053465",
  //   },
  // ];

  return (
    <>
      <Header />
      <div className="publications-container">
        <div className="publications-hero">
          <h1 className="hero-title">Publications</h1>
        </div>

        <div className="publications-content">
          <section className="publications-section">
            <h2 className="section-title">Journal Articles</h2>
            <div className="publications-list">
              {journalArticles.map((pub, index) => (
                <div
                  key={pub.id}
                  className="publication-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="publication-header">
                    <span className="publication-year">{pub.year}</span>
                  </div>

                  <h3 className="publication-title">{pub.title}</h3>

                  <p className="publication-authors">{pub.authors}</p>

                  <div className="publication-details">
                    <span className="journal-name">{pub.journal}</span>
                    {pub.volume && (
                      <span className="volume-info">Vol. {pub.volume}</span>
                    )}
                    {pub.pages && (
                      <span className="pages-info">pp. {pub.pages}</span>
                    )}
                  </div>

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doi-link"
                    >
                      <svg
                        className="link-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Publication
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Uncomment for conference articles and also uncomment the array for conference lists above  */}
          {/* <section className="publications-section">
            <h2 className="section-title">Conference Presentations</h2>
            <div className="publications-list">
              {conferenceArticles.map((pub, index) => (
                <div
                  key={pub.id}
                  className="publication-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="publication-header">
                    <span className="publication-year">{pub.year}</span>
                  </div>

                  <h3 className="publication-title">{pub.title}</h3>

                  <p className="publication-authors">{pub.authors}</p>

                  <div className="publication-details">
                    <span className="conference-name">{pub.conference}</span>
                    {pub.proceedings && (
                      <span className="proceedings-info">
                        {pub.proceedings}
                      </span>
                    )}
                  </div>

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doi-link"
                    >
                      <svg
                        className="link-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      View Publication
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Publications;
