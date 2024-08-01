import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import profilePic from './profile.jpg';
import Projects from 'src/Projects';
import githubIcon from './github_icon.png'; // Ensure you import these if paths are inside src
import discordIcon from './discord_icon.png'; 

const App = () => {
  return (
    <Router>
      <div className="frosted-layer">
        <div className="App">
          <header className="header">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route exact path="/" element={
              <main className="main-card">
                <div className="card">
                  <div className="card-content">
                    <div className="text-section">
                      <h1>irl_rishaan</h1>
                      <p>Developer, AI Wizard, High Schooler.</p>
                      <div className="icons">
                        <a href="https://github.com/RishaanDevz" target="_blank" rel="noopener noreferrer">
                          <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                          <img src={discordIcon} alt="Resume" />
                        </a>
                      </div>
                    </div>
                    <div className="image-section">
                      <img src={profilePic} alt="Profile" />
                    </div>
                  </div>
                </div>
              </main>
            } />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <footer className="footer">
            <p>© 2024 irl_rishaan. Powered by <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a></p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
