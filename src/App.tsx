import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, Users, Lightbulb, Target } from 'lucide-react';

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
                alt="DevNerd Profile"
                className="profile-image mb-3"
              />
            </div>
            <div className="col-md-8">
              <h1 className="display-4 fw-bold">DevNerd</h1>
              <p className="lead">Software Developer | Innovation Enthusiast</p>
              <p className="mt-3">
                A 25-year-old software developer from the USA, passionate about technology and innovation.
                Since a young age, I have enjoyed solving problems and turning ideas into code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Software Developer at TechCorp</h4>
                <p className="text-muted">2023 - Present</p>
                <p>Working on modern web applications and AI solutions.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Freelance Developer</h4>
                <p className="text-muted">2020 - 2023</p>
                <p>Building websites and applications for small businesses.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Bachelor's Degree in Computer Science</h4>
                <p className="text-muted">2019 - 2023</p>
                <p>Massachusetts Institute of Technology (MIT)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Skills</h2>
          
          {/* Soft Skills */}
          <div className="row mb-5">
            <h3 className="text-center mb-4">Soft Skills</h3>
            <div className="col-md-4">
              <div className="skill-card text-center">
                <Brain size={40} className="mb-3 text-primary" />
                <h4>Critical Thinking</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card text-center">
                <Lightbulb size={40} className="mb-3 text-primary" />
                <h4>Creativity</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card text-center">
                <Users size={40} className="mb-3 text-primary" />
                <h4>Teamwork</h4>
              </div>
            </div>
          </div>

          {/* Hard Skills */}
          <div className="row">
            <h3 className="text-center mb-4">Hard Skills</h3>
            <div className="col-md-4">
              <div className="skill-card">
                <h4><Code2 size={24} className="me-2" />Programming Languages</h4>
                <div className="mt-3">
                  <p>JavaScript</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}></div>
                  </div>
                  <p>Python</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }}></div>
                  </div>
                  <p>C#</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <h4><Target size={24} className="me-2" />Frameworks</h4>
                <div className="mt-3">
                  <p>React</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '95%' }}></div>
                  </div>
                  <p>Node.js</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '85%' }}></div>
                  </div>
                  <p>ASP.NET</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="skill-card">
                <h4><Database size={24} className="me-2" />Databases</h4>
                <div className="mt-3">
                  <p>SQL Server</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}></div>
                  </div>
                  <p>MongoDB</p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                  className="card-img-top"
                  alt="AI Portfolio Generator"
                />
                <div className="card-body">
                  <h5 className="card-title">AI Portfolio Generator</h5>
                  <p className="card-text">An AI-powered tool that automatically creates portfolios.</p>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-primary"><Github size={18} /> GitHub</a>
                    <a href="#" className="btn btn-outline-primary"><ExternalLink size={18} /> Demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop"
                  className="card-img-top"
                  alt="E-commerce Web App"
                />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Web App</h5>
                  <p className="card-text">An online store built with React and Laravel.</p>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-primary"><Github size={18} /> GitHub</a>
                    <a href="#" className="btn btn-outline-primary"><ExternalLink size={18} /> Demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card project-card">
                <img
                  src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=400&fit=crop"
                  className="card-img-top"
                  alt="CyberSecurity Dashboard"
                />
                <div className="card-body">
                  <h5 className="card-title">CyberSecurity Dashboard</h5>
                  <p className="card-text">A real-time security monitoring dashboard.</p>
                  <div className="d-flex gap-2">
                    <a href="#" className="btn btn-primary"><Github size={18} /> GitHub</a>
                    <a href="#" className="btn btn-outline-primary"><ExternalLink size={18} /> Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2 className="text-center mb-5">Get in Touch</h2>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="social-icons text-center mb-4">
                <a href="#"><Github size={32} /></a>
                <a href="#"><Linkedin size={32} /></a>
                <a href="#"><Mail size={32} /></a>
              </div>
            </div>
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={4} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;