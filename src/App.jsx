import { useState, useEffect } from "react";
import "./App.css";

// ─── Particles background ───────────────────────────────────────────────────
function ParticlesBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 70, density: { enable: true, value_area: 900 } },
            color: { value: "#9333ea" },
            shape: { type: "circle" },
            opacity: { value: 0.45, random: false },
            size: { value: 5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#9333ea",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="particles-js" />;
}

// ─── Desktop Nav ─────────────────────────────────────────────────────────────
function DesktopNav() {
  const links = ["about", "education", "skills", "projects", "contact"];
  return (
    <nav id="desktop-nav">
      <div className="logo">NETHMI NAVODYA</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Hamburger Nav ────────────────────────────────────────────────────────────
function HamburgerNav() {
  const [open, setOpen] = useState(false);
  const links = ["about", "education", "skills", "projects", "contact"];

  return (
    <nav id="hamburger-nav">
      <div className="logo">Nethmi</div>
      <div className="hamburger-menu">
        <div
          className={`hamburger-icon${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>
        <ul className={`menu-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ─── Profile Section ──────────────────────────────────────────────────────────
function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src="./assets/office-image-black.png"
          alt="Nethmi Navodya profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1-hello">Hello, I'm</p>
        <h1 className="title">Nethmi Navodya</h1>
        <p className="section__text__p2">Software Engineering Undergraduate</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/SE_2023_045.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin-image.png"
            alt="LinkedIn"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/nethmi-navodya-75b521348/")
            }
          />
          <img
            src="./assets/github-image.png"
            alt="GitHub"
            className="icon"
            onClick={() =>
              (window.location.href = "https://github.com/Nethmi922")
            }
          />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about">
      <p className="section__text__p1">GET TO KNOW MORE</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="details-container">
          <p>
            I am a second-year Software Engineering undergraduate at the
            University of Kelaniya, driven by a dual passion for technical
            precision and creative expression. My journey in technology began
            with a curiosity about how digital systems are built and secured,
            leading me to master a versatile stack including Java, JavaScript,
            and Web Technologies. I view code not just as a set of instructions,
            but as a canvas for solving complex problems and creating meaningful
            user experiences.
          </p>
          <p>
            What sets my approach apart is my background in the creative arts
            and psychology. I believe that the best software isn't just
            functional — it should be intuitive and visually communicative.
            Whether I am designing a responsive UI or diving into Data
            Structures, I aim for a balance of efficiency and aesthetics.
          </p>
        </div>
      </div>
      <img
        src="./assets/arrow-image2.jpg"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#education")}
      />
    </section>
  );
}

// ─── Education Section ────────────────────────────────────────────────────────
function Education() {
  const items = [
    {
      degree: "BSc (Hons) in Software Engineering",
      period: "2025 – Present",
      institution: "University of Kelaniya — Faculty of Science",
      desc: "Specializing in the intersection of Cyber Security and UI/UX Engineering, building a strong foundation in software design, development, and security.",
    },
    {
      degree: "GCE A/L — Physical Science",
      period: "2023 A/L",
      institution: "MR/Sujatha Vidyalaya",
      desc: "Completed Mathematics, Chemistry, and Physics with distinction, achieving a Z-Score of 1.5869.",
    },
  ];

  return (
    <section id="education">
      <p className="section__text__p1">MY JOURNEY</p>
      <h1 className="title">Education</h1>
      <div className="education-details-container">
        <div className="about-containers">
          {items.map((item) => (
            <div className="details-container" key={item.degree}>
              <h2 className="sub-title">{item.degree}</h2>
              <div className="article-container">
                <p className="time-period">{item.period}</p>
                <p className="location1">{item.institution}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────
function Skills() {
  const categories = [
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Git", img: "./assets/git-images.png" },
        { name: "GitHub", img: "./assets/github-image.png" },
        { name: "VS Code", img: "./assets/vscode-image.png" },
        { name: "Figma", img: "./assets/figma-image.png" },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", img: "./assets/html-thumbnail.jpg" },
        { name: "CSS", img: "./assets/css-new.png" },
        { name: "JavaScript", img: "./assets/JavaScript-image.png" },
        { name: "Figma", img: "./assets/figma-image.png" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", img: "./assets/java-image.png" },
        { name: "Python", img: "./assets/python-image.png" },
        { name: "MySQL", img: "./assets/mysql-image.png" },
      ],
    },
  ];

  return (
    <section id="skills">
      <p className="section__text__p1">EXPLORE MY</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {categories.map((cat) => (
            <div className="details-container" key={cat.title}>
              <h2 className="skills-sub-title">{cat.title}</h2>
              <div className="article-container-skills">
                {cat.skills.map((skill) => (
                  <article key={skill.name}>
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <div>
                      <h3 className="language">{skill.name}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="./assets/arrow-image2.jpg"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: "YouTube UI Framework: A Deep Dive into Modern CSS Layouts",
      img: "./assets/youtube-clone.png",
      github: "https://github.com/Nethmi922/YouTube-Clone",
      demo: "https://nethmi922.github.io/YouTube-Clone/",
    },
    // 👉 Add more projects here following the same shape:
    // {
    //   title: "Project Name",
    //   img: "./assets/your-image.png",
    //   github: "https://github.com/...",
    //   demo: "https://...",
    // },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">BROWSE MY RECENT</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((p) => (
            <div className="details-container color-container" key={p.title}>
              <div className="article-container">
                <img src={p.img} alt={p.title} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{p.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = p.github)}
                >
                  GitHub
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = p.demo)}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="./assets/arrow-image2.jpg"
        alt="Arrow"
        className="icon arrow"
        onClick={() => (window.location.href = "#contact")}
      />
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">GET IN TOUCH</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/gmail-image.jpg"
            alt="Email"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:nnavodya922@gmail.com">nnavodya922@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/call-image.jpg"
            alt="Phone"
            className="icon contact-icon"
          />
          <p>+94 75 347 7364</p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin-image.png"
            alt="LinkedIn"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/nethmi-navodya-75b521348/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = ["about", "education", "projects", "contact"];
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l}`}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &copy; 2026 Nethmi Navodya. All Rights Reserved.</p>
    </footer>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <ParticlesBackground />
      <DesktopNav />
      <HamburgerNav />
      <Profile />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
