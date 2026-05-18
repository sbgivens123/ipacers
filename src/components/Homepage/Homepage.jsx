import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  FileText,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

// importing default components
import Header from "../Default/Header.jsx";
import Links from "../Default/Links.jsx";
import Footer from "../Default/Footer.jsx";

// importing css for this page
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://apsslab.abe.msstate.edu/wp-content/uploads/2025/10/Custom-dimensions-1280x720-px-1.jpeg",
      title: "Community Engagement",
      description: "Building partnerships that make a difference",
    },
    {
      image: "./homepage/photo1.jpeg",
      title: "Innovative Research",
      description: "Pushing the boundaries of scientific discovery",
    },
    {
      image: "./homepage/photo2.jpeg",
      title: "Community Engagement",
      description: "Building partnerships that make a difference",
    },
    {
      image: "./homepage/photo3.jpeg",
      title: "Educational Excellence",
      description: "Inspiring the next generation of researchers",
    },
    {
      image: "./homepage/photo4.jpg",
      title: "",
      description: "",
    },
    {
      image: "./homepage/photo5.jpg",
      title: "",
      description: "",
    },
    {
      image: "./homepage/photo6.jpg",
      title: "",
      description: "",
    },
    {
      image: "./homepage/photo7.jpg",
      title: "",
      description: "",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // last section data
  const universities = [
    {
      name: "Mississippi State University",
      image: "msstate.png",
      link: "https://www.msstate.edu/",
    },
    {
      name: "Louisiana State University",
      image: "LSU.png",
      link: "https://www.lsu.edu/",
    },
    {
      name: "University of Alabama at Birmingham",
      image: "uab_birmingham.png",
      link: "https://www.uab.edu/home/",
    },
    {
      name: "Clemson University",
      image: "clemson.webp",
      link: "https://www.clemson.edu/",
    },
  ];

  return (
    <div className="homepage">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Advancing Research for Tomorrow</h1>
          <p className="hero-subtitle">
            A collaborative initiative bringing together cutting-edge research,
            community engagement, and educational excellence at Mississippi
            State University.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => navigateToPage("/about")}
              title="Learn More About the Project"
              aria-label="Learn More About the Project"
            >
              Learn More
              <ChevronRight size={20} />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigateToPage("/outreach")}
              title="View Summer Camp Information"
              aria-label="View Summer Camp Information"
            >
              Summer Camp Info
            </button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>
      <p className="page-author-message">
        — The views and opinions expressed herein are strictly those of the page
        author or organization. The contents of this page have not been reviewed
        or approved by Mississippi State University. —
      </p>
      {/* <section className="intro">
        <div className="intro-container">
          <h2 className="section-title">About the Project</h2>
          <p className="intro-text">
            Our project represents a pioneering effort in interdisciplinary
            research and community engagement. Through partnerships with leading
            departments at Mississippi State University and external
            collaborators, we're addressing critical challenges and creating
            opportunities for the next generation of researchers.
          </p>
          <div className="involved">
            <h3 className="involved-title">Who's Involved</h3>
            <p className="involved-text">
              This initiative brings together faculty and students from multiple
              MSU departments, including Engineering, Sciences, and Education,
              along with community partners and industry leaders committed to
              advancing knowledge and fostering innovation.
            </p>
          </div>
        </div>
      </section> */}

      <section className="carousel-section">
        <div className="carousel-container">
          <button 
            className="carousel-btn prev" 
            onClick={prevSlide}
            title="Previous Slide"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.image} alt={slide.title} />

                <div className="carousel-caption">
                  {slide.title && <h2>{slide.title}</h2>}
                  {slide.description && <p>{slide.description}</p>}
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-btn next" 
            onClick={nextSlide}
            title="Next Slide"
            aria-label="Next Slide"
          >
            <ChevronRight size={30} />
          </button>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                title={`Go to slide ${index + 1}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-container">
          <h2 className="section-title">Project Highlights</h2>
          <div className="highlight-grid">
            <div
              className="highlight-card"
              onClick={() => navigateToPage("/research")}
            >
              <div className="highlight-icon">
                <FileText size={40} />
              </div>
              <h3 className="highlight-title">Research</h3>
              <p className="highlight-description">
                Explore our ongoing research projects, data collections, and
                scientific findings.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>

            <div
              className="highlight-card"
              onClick={() => navigateToPage("/outreach")}
            >
              <div className="highlight-icon">
                <Users size={40} />
              </div>
              <h3 className="highlight-title">Outreach & Summer Camp</h3>
              <p className="highlight-description">
                Discover our community programs and summer camp opportunities
                for students.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>

            <div
              className="highlight-card"
              onClick={() => navigateToPage("/publications")}
            >
              <div className="highlight-icon">
                <BookOpen size={40} />
              </div>
              <h3 className="highlight-title">Recent Publications</h3>
              <p className="highlight-description">
                Access our latest research papers, articles, and academic
                contributions.
              </p>
              <span className="highlight-link">
                Learn more <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="universities-section">
        <div className="universities-container">
          <div className="section-header">
            <h2 className="section-title-uni">Who Is Involved</h2>
            <p className="section-subtitle">
              Proudly partnering with leading institutions across the country.
            </p>
          </div>
          <div className="universities-grid">
            {universities.map((university, index) => (
              <div key={index} className="university-card">
                <div className="card-inner">
                  <div
                    className="card-image-container"
                    onClick={() => window.open(university.link, "_blank")}
                  >
                    <div className="card-image">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="university-image"
                      />
                    </div>
                    <div className="card-content">
                      <h3 className="university-name">{university.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Links />
      <Footer />
    </div>
  );
};

export default Homepage;
