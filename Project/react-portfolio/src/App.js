import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Hi, I'm janvi Hiyaa & Urvi</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate frontend developer with experience building responsive and user-friendly web applications using React. I enjoy transforming ideas into elegant, functional interfaces.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>🚀 Click Sum Game</h3>
            <p>A fun game where users click buttons and try to get a sum greater than 10.</p>
          </div>
          <div className="project-card">
            <h3>📱 Live Clock App</h3>
            <p>A digital clock showing real-time updates with beautiful design and animations.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Janvi Hiyaaa & Urvi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
