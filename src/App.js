import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import profilePic from './profile.jpg';
import Projects from './Projects';
import githubIcon from './github_icon.png';
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
                <motion.div
                  className="card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="card-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-section">
                      <h1>irl_rishaan</h1>
                      <p>Developer, AI Wizard, High Schooler.</p>
                      <div className="icons">
                        <a href="https://github.com/RishaanDevz" target="_blank" rel="noopener noreferrer">
                          <motion.img
                            src={githubIcon}
                            alt="GitHub"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </a>
                        <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                          <motion.img
                            src={discordIcon}
                            alt="Resume"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="image-section">
                      <motion.img
                        src={profilePic}
                        alt="Profile"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ width: '170px', height: '170px' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
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
