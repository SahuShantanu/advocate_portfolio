import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImage from "../assets/background.jpg"; // Update with your actual path
import profileImage from "../assets/profile.jpg"; // Update with your actual path
import "./Home.css"; // Ensure you have the appropriate CSS for styling

const Home = () => {
  // Animation controls for section 2
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Card data for section 2
  const cardData = [
    {
      title: "Expert Advice",
      icon: "⚖️",
      description: "Receive guidance from a seasoned legal professional with deep knowledge of the law."
    },
    {
      title: "Our Approach",
      icon: "🔍",
      description: "Personalized legal strategies tailored to your unique situation."
    },
    {
      title: "Quality Results",
      icon: "🏆",
      description: "Consistent track record of successful cases and satisfied clients."
    },
    {
      title: "Experience",
      icon: "📅",
      description: "Years of practice across various legal domains."
    }
  ];

  return (
    <div className="home-container">
      {/* Section 1 */}
      <div className="home-section1">
        <div 
          className="background-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="section1-content">
          <div className="image-column">
            <img 
              src={profileImage} 
              alt="Adv. Shantanu Sahu" 
              className="profile-image"
            />
          </div>
          <div className="intro-column">
            <h1 className="section1-title">
              Welcome to My Advocate Portfolio
            </h1>
            <p className="section1-description">
              Hello, I'm Adv. Shantanu Sahu. I am dedicated to providing expert legal services and guidance. 
              With years of experience in various legal domains, I'm committed to delivering justice 
              and excellent representation for my clients.
            </p>
            <button className="consultation-button">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <section className="section2" ref={ref}>
        <div className="section2-container">
          <h2 className="section2-title">Why Choose My Services</h2>
          <p className="section2-subtitle">Dedicated to excellence in legal representation</p>
          
          <div className="cards-container">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 }
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;