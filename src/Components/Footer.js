import React from 'react'
import { faHome, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from '../Files/Kevin_Wong_Resume.pdf';

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#101909', color: 'white', paddingTop: '40px', paddingBottom:'40px'}}>
            <div style={{color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                <a href="#nav" style={{color: "inherit"}}><FontAwesomeIcon icon={faHome} size="2x" /></a>
                <a href="mailto:Kevin.FNCW@gmail.com" rel='noopener noreferrer' style={{color: "inherit"}}><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                <a href="https://www.github.com/KevinFNCW" rel='noopener noreferrer' target="_blank" style={{color: "inherit"}}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/kfncw/" style={{color: "inherit"}}><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href={Resume} target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}><FontAwesomeIcon icon={faFile} size="2x" /></a>
            </div>
            <h2 style={{color: 'gray', marginTop: '25px', textAlign: 'center'}}>Kevin | <span style={{fontSize: '25px'}}>&copy;</span> 2023</h2>
        </footer>
    )
}

export default Footer;
