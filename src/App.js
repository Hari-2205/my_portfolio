import React, { useState, useEffect } from "react";
import "./App.css";
import "./scroll.js";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

function App() {
  const [openProject, setOpenProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  // ✅ Scroll Animation
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const revealOnScroll = () => {
      const windowBottom = window.innerHeight;
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowBottom - 50) {
          item.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill in all fields!");
      return;
    }

    // Explicit template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        "service_om5rpv8",   // Replace with your EmailJS Service ID
        "template_ezm9zgr",  // Replace with your EmailJS Template ID
        templateParams,
        "euL8N3Z5U02yYvvCa"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setStatus("❌ Failed to send. Try again!");
        }
      );
  };

  // ✅ Projects Data
  const projects = [
    {
      id: 1,
      title: "Next Enti",
      short: "Mobile app using MIT App Inventor to guide CSE students in career paths.",
      details: [
        "Built with MIT App Inventor for Android",
        "Helps CSE students explore career opportunities",
        "User-friendly interface for navigation",
        "Lightweight and fast performance"
      ],
      images: ["/nextenti1.jpg", "/nextenti2.jpg"],
      github: "https://github.com/yourusername/nextenti"
    },
    {
      id: 2,
      title: "Victory Musics Website",
      short: "MERN stack music store with instrument catalog, lesson booking, and cart features.",
      details: [
        "Developed with MongoDB, Express, React, and Node",
        "Supports instrument browsing and purchase",
        "Allows booking of music lessons online",
        "Includes cart and checkout system"
      ],
      images: ["/victorymusics1.png", "/victorymusics2.png"],
      github: "https://github.com/Hari-2205/victory_musics1.git"
    }
  ];

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo">MyPortfolio</div>

  {/* 3 Dots / Hamburger Icon */}
  <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    ⋮
  </div>

  {/* Navbar Links */}
  <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
    <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
    <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
</nav>


      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Alla Hari Chandana Reddy</h1>
          <p className="tagline">
            Aspiring Software Developer | MERN Stack Enthusiast | Problem Solver
          </p>
          <p className="tagline-sub">
            Passionate about AI, Web Development, and Creating Impactful Solutions
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/alla-hari-chandana-reddy-b6a99b298"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:allaharichandanareddy@gmail.com">
              <MdEmail />
            </a>
            <a
              href="https://www.instagram.com/chikki___hari"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://wa.me/919704052282" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Profile" className="profile-pic-large" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section fade-up">
        <h2>About Me</h2>
        <p>
          As a curious learner and aspiring engineer, I thrive at the intersection
          of creativity and technology. I have hands-on experience with web
          development using HTML, CSS, JavaScript, and React, and I enjoy building
          user-friendly applications. Beyond coding, I explore problem-solving,
          algorithms, and innovative technologies that challenge me to think
          differently.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="section parallax bg-education">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-icon">🎓</div>
            <div className="timeline-content">
              <h3>B.Tech in CSE</h3>
              <h4>Kamala Institute of Technology and Science (2022–2026)</h4>
              <p>CPI: 8.09</p>
              <p>
                Key Coursework: Data Structures, Algorithms, Web Development, AI,
                Databases
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">🏫</div>
            <div className="timeline-content">
              <h3>Intermediate MPC</h3>
              <h4>Sri Chaitanya Jr College (2022)</h4>
              <p>Percentage: 94.6%</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">📚</div>
            <div className="timeline-content">
              <h3>SSC</h3>
              <h4>Alphores High School (2020)</h4>
              <p>Percentage: 92.6%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section parallax bg-projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card slide-in"
              onClick={() => toggleProject(project.id)}
              onMouseEnter={() => setOpenProject(project.id)}
              onMouseLeave={() => setOpenProject(null)}
            >
              <div
                className="project-image-container"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleProject(project.id);
                }}
              >
                <img
                  src={openProject === project.id ? project.images[1] : project.images[0]}
                  alt={project.title}
                  className="project-image"
                />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub
                </a>
              </div>
              <h3>{project.title}</h3>
              <p>{project.short}</p>
              {openProject === project.id && (
                <ul className="project-details">
                  {project.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="certifications" className="section parallax bg-certifications fade-up">
        <h2>Skills & Certifications</h2>
        <h3>Technical Skills</h3>
        <ul className="skills-list">
          <li>Frontend: HTML, CSS, JavaScript, Python</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MongoDB, MySQL</li>
          <li>Version Control: Git, GitHub</li>
          <li>Tools: VS Code, MS Word, PowerPoint, MongoDB Compass</li>
        </ul>
        <h3>Certifications</h3>
        <ul className="cert-list">
          <li>
            <a href="/javaoracle.pdf" target="_blank" rel="noopener noreferrer">
              Oracle Java Certification – TASK (2023)
            </a>
          </li>
          <li>
            <a href="/ai-web.pdf" target="_blank" rel="noopener noreferrer">
              AI in Web Development Workshop – Brainovision (2024)
            </a>
          </li>
          <li>
            <a href="/ai_primer.pdf" target="_blank" rel="noopener noreferrer">
              AI Primer Certification – Infosys Springboard (2025)
            </a>
          </li>
          <li>
            <a href="/pragathi_cert.pdf" target="_blank" rel="noopener noreferrer">
              Pragati Program – Infosys Springboard (2025)
            </a>
          </li>
        </ul>
      </section>

      {/* Resume */}
      <section id="resume" className="section bg-resume fade-up">
        <h2>Resume</h2>
        <a
          href="/Alla_HariChandana_Reddy_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          My Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="section fade-up">
        <h2>Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:allaharichandanareddy@gmail.com">
            allaharichandanareddy@gmail.com
          </a>
        </p>
        <p>Phone: +91-9704052282</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/alla-hari-chandana-reddy-b6a99b298"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        {status && <p className="status-msg">{status}</p>}

        {/* vCard */}
        <a href="/HariChandanaReddy.vcf" download className="btn">
          📇 Save My Contact (vCard)
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Alla Hari Chandana Reddy | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
