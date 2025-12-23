import React from "react"
import "./Footer.css"
import lt from "../assets/lt.png"
import { LINKS } from "../../constants"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-social">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
            </a>
            <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <img src={lt} alt="LeetCode" width="18" height="18" className="footer-icon-img"/>
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
