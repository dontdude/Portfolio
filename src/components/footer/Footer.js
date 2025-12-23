import React from "react"
import "./Footer.css"
import lt from "../assets/lt.png"
import Resume from "../assets/ChandanMishra_Resume.pdf"
import { LINKS } from "../../constants"
import { trackEvent } from "../../utils/analytics"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-social">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => trackEvent('LinkedIn Click (Footer)')}>
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => trackEvent('GitHub Click (Footer)')}>
                <i className="fab fa-github"></i>
            </a>
            <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" onClick={() => trackEvent('LeetCode Click (Footer)')}>
                <img src={lt} alt="LeetCode" width="18" height="18" className="footer-icon-img"/>
            </a>
            <a 
                href={Resume} 
                download="ChandanMishra_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Download Resume"
                onClick={() => trackEvent('Resume Downloaded (Footer)')}
                className="resume-link"
                title="Download Resume"
            >
                <i className="fas fa-file-pdf"></i>
            </a>
        </div>

        <p className="footer-copy">
            © {new Date().getFullYear()} Designed & Developed by <span className="highlight">Chandan Mishra</span>
        </p>
        
        <p className="footer-meta">
          ⚡ <strong>Lighthouse Score:</strong> 100/100
        </p>
      </div>
    </footer>
  )
}

export default Footer
