import React from 'react';
import { FaBalanceScale, FaGavel, FaHandshake, FaFileContract, FaHome, FaUsers } from 'react-icons/fa';
import './Services.css';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaBalanceScale className="service-icon" />,
      title: "Civil Litigation",
      description: "Representation in property disputes, contract disagreements, and other civil matters with strategic case analysis.",
      highlights: [
        "Property dispute resolution",
        "Contract enforcement",
        "Tort claims",
        "Injunction matters"
      ]
    },
    {
      icon: <FaGavel className="service-icon" />,
      title: "Criminal Defense",
      description: "Aggressive defense strategies for criminal charges at all levels of the judicial system.",
      highlights: [
        "Bail hearings",
        "Trial representation",
        "Appeals process",
        "Plea bargaining"
      ]
    },
    {
      icon: <FaHandshake className="service-icon" />,
      title: "Family Law",
      description: "Compassionate guidance through sensitive family legal matters with discreet handling.",
      highlights: [
        "Divorce proceedings",
        "Child custody",
        "Alimony disputes",
        "Adoption cases"
      ]
    },
    {
      icon: <FaFileContract className="service-icon" />,
      title: "Contract Law",
      description: "Drafting, reviewing, and negotiating contracts to protect your business interests.",
      highlights: [
        "Contract drafting",
        "Breach of contract",
        "NDA agreements",
        "Service agreements"
      ]
    },
    {
      icon: <FaHome className="service-icon" />,
      title: "Real Estate Law",
      description: "Expert handling of property transactions, disputes, and land use regulations.",
      highlights: [
        "Title disputes",
        "Property transactions",
        "Landlord-tenant issues",
        "Zoning laws"
      ]
    },
    {
      icon: <FaUsers className="service-icon" />,
      title: "Corporate Law",
      description: "Comprehensive legal support for business formation, compliance, and transactions.",
      highlights: [
        "Company incorporation",
        "Mergers & acquisitions",
        "Corporate governance",
        "Regulatory compliance"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Legal Services</h1>
          <p>Expert legal representation tailored to your specific needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-container">
        <div className="section-header">
          <h2>Practice Areas</h2>
          <p className="section-subtitle">Comprehensive legal solutions with personalized attention</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="card-header">
                <div className="icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="card-body">
                <p>{service.description}</p>
                <ul className="service-highlights">
                  {service.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="card-footer">
                <button className="consult-btn">Request Consultation</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Need Specialized Legal Assistance?</h2>
          <p>Contact us to discuss your specific legal requirements and how we can help</p>
          <div className="cta-buttons">
            <button className="primary-btn">Schedule Consultation</button>
            <button className="secondary-btn">Call Now: +91 9876543210</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;