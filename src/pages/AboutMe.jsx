import React from 'react';
import { FaGraduationCap, FaBriefcase, FaAward, FaBalanceScale } from 'react-icons/fa';
import './About.css';

const AboutPage = () => {
  const education = [
    {
      year: "2005-2008",
      degree: "LL.M (Master of Laws)",
      institution: "National Law School of India University, Bangalore",
      specialization: "Constitutional Law"
    },
    {
      year: "2001-2005",
      degree: "LL.B (Bachelor of Laws)",
      institution: "University of Delhi",
      specialization: "Corporate Law"
    }
  ];

  const experience = [
    {
      year: "2018-Present",
      position: "Senior Advocate",
      firm: "Shantanu & Associates",
      description: "Leading a team of 5 junior advocates specializing in civil and corporate litigation"
    },
    {
      year: "2012-2018",
      position: "Associate Advocate",
      firm: "Lex Partners, Mumbai",
      description: "Handled high-profile corporate cases and contract disputes"
    },
    {
      year: "2008-2012",
      position: "Junior Advocate",
      firm: "High Court of Bombay",
      description: "Assisted senior counsels in criminal and civil matters"
    }
  ];

  const certifications = [
    "Certified Mediator - Indian Institute of Arbitration & Mediation (2016)",
    "Advanced Trial Advocacy - National Judicial Academy (2014)",
    "Cyber Law Specialist - Government of India (2012)"
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Adv. Shantanu Sahu</h1>
          <p>Dedicated legal professional with 15+ years of courtroom experience</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="profile-image-container">
            <img 
              src="./assets/profile.jpg" 
              alt="Adv. Shantanu Sahu" 
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
          <div className="intro-content">
            <h2>Professional Advocate & Legal Consultant</h2>
            <div className="divider"></div>
            <p>
              With over 15 years of experience in diverse legal domains, I bring comprehensive 
              expertise and strategic thinking to every case. My practice is built on three 
              fundamental principles: <strong>integrity</strong>, <strong>diligence</strong>, 
              and <strong>client-focused representation</strong>.
            </p>
            <p>
              I specialize in civil litigation and corporate law, having successfully handled 
              200+ cases in various courts across India. My approach combines rigorous legal 
              analysis with practical solutions tailored to each client's unique circumstances.
            </p>
            <div className="stats-container">
              <div className="stat-item">
                <FaBalanceScale className="stat-icon" />
                <div>
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Cases Handled</span>
                </div>
              </div>
              <div className="stat-item">
                <FaBriefcase className="stat-icon" />
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="stat-item">
                <FaAward className="stat-icon" />
                <div>
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="timeline-section education-section">
        <div className="container">
          <h2 className="section-title">
            <FaGraduationCap className="section-icon" />
            Education
          </h2>
          <div className="timeline">
            {education.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="timeline-section experience-section">
        <div className="container">
          <h2 className="section-title">
            <FaBriefcase className="section-icon" />
            Professional Experience
          </h2>
          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.position}</h3>
                  <h4>{item.firm}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">
            <FaAward className="section-icon" />
            Certifications
          </h2>
          <ul className="certifications-list">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">My Legal Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h3>Client-Centered Approach</h3>
              <p>
                Every client receives personalized attention and strategies tailored 
                to their specific legal needs and objectives.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Ethical Practice</h3>
              <p>
                I maintain the highest standards of professional ethics and 
                confidentiality in all matters.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Results-Driven</h3>
              <p>
                Focused on achieving the best possible outcomes through meticulous 
                preparation and strategic advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Discuss Your Legal Matter?</h2>
          <p>
            Contact me for a confidential consultation to evaluate your case and 
            explore the best legal solutions.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Schedule Consultation</button>
            <button className="secondary-btn">Call: +91 9876543210</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;