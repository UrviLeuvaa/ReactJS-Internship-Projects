// Install React App
// npx create-react-app project-list
// cd project-list

// App.js
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import gsap from 'gsap';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Portfolio Website', description: 'Personal website built with React and GSAP.' },
    { id: 2, title: 'Task Manager', description: 'To-do list with drag & drop and reminders.' },
    { id: 3, title: 'Weather App', description: 'Displays real-time weather using OpenWeatherMap API.' },
    { id: 4, title: 'Blog Platform', description: 'Full-stack blogging platform with Markdown support.' },
    { id: 5, title: 'E-commerce Store', description: 'React + Redux storefront with Stripe payments.' },
    { id: 6, title: 'Live Chat App', description: 'Real-time chat with Firebase and user authentication.' }
  ]);

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2,
        ease: 'power3.out'
      });

      // Hover animation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut'
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>My Project Showcase</h1>
        <p>Explore a selection of my professionally developed projects.</p>
      </header>

      <main className="project-list">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            ref={el => cardRefs.current[i] = el}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Project Showcase by Luca Moretti</p>
      </footer>
    </div>
  );
}

export default App;