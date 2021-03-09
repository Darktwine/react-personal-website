import Container from 'react-bootstrap/Container';
import CPP from '../images/c-plusplus.svg';
import Python from '../images/python.svg';
import Javascript from '../images/javascript.svg';
import Markdown from '../images/markdown.svg';
import HTML5 from '../images/html-5.svg';
import CSS3 from '../images/css-3.svg';
import Bootstrap from '../images/bootstrap.svg';
import ReactLogo from '../images/react.svg';
import Express from '../images/expressjs-icon.svg';
import Node from '../images/nodejs-icon.svg';
import MySQL from '../images/mysql.svg';
import MongoDB from '../images/mongodb.svg';
import Git from '../images/git-icon.svg';
import Bash from '../images/bash-icon.svg';
import Photoshop from '../images/photoshop-cc.svg';


import '../App.css';
import React from 'react';

const Skills = () => {
    return (
        <div id="skills" style={{backgroundColor: '#101909', color: 'white', marginTop: '-25px', paddingBottom: '50px'}}>
            <Container>
              <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>Skills</h1>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={CPP} className="Logo" alt="C++ Logo"></img>
                    <p style={{marginTop: "15px"}}>C++</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Python} className="Logo" alt="Python Logo"></img>
                    <p style={{marginTop: "15px"}}>Python</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Javascript} className="Logo" alt="Javascript Logo"></img>
                    <p style={{marginTop: "15px"}}>Javascript</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Markdown} className="Logo" alt="Markdown Logo"></img>
                    <p style={{marginTop: "15px"}}>Markdown</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={HTML5} className="Logo" alt="HTML5 Logo"></img>
                    <p style={{marginTop: "15px"}}>HTML</p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={CSS3} className="Logo" alt="CSS3 Logo"></img>
                    <p style={{marginTop: "15px"}}>CSS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Bootstrap} className="Logo" alt="Bootstrap Logo"></img>
                    <p style={{marginTop: "15px"}}>Bootstrap</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={ReactLogo} className="Logo" alt="ReactJS Logo"></img>
                    <p style={{marginTop: "15px"}}>ReactJS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Express} className="Logo" alt="ExpressJS Logo"></img>
                    <p style={{marginTop: "15px"}}>ExpressJS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Node} className="Logo" alt="Node Logo"></img>
                    <p style={{marginTop: "15px"}}>NodeJS</p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={MySQL} className="Logo" alt="MySQL Logo"></img>
                    <p style={{marginTop: "15px"}}>MySQL</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={MongoDB} className="Logo" alt="MongoDB Logo"></img>
                    <p style={{marginTop: "15px"}}>MongoDB</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Git} className="Logo" alt="Git Logo"></img>
                    <p style={{marginTop: "15px"}}>Git</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Bash} className="Logo" alt="Bash Logo"></img>
                    <p style={{marginTop: "15px"}}>Bash</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Photoshop} className="Logo" alt="Photoshop Logo"></img>
                    <p style={{marginTop: "15px"}}>Photoshop</p>
                </div>
              </div>
            </Container>
        </div>
    )
}

export default Skills;
