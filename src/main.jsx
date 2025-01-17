import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Home from './Home.jsx'
import Skill from './Skill.jsx'
import About from './About.jsx'
import ProjectSection from './ProjectSection.jsx'
import Contect from './contect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <Nav />
      <Home />
      <Skill />
      <About />   
      <ProjectSection />
      <Contect />
    </ThemeProvider>
  </StrictMode>,
)
