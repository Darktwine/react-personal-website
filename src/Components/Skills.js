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
        <div style={{backgroundColor: '#101909', color: 'white', marginTop: '-25px', paddingBottom: '10px'}}>
            <Container>
              <h1 style={{ textAlign: 'center', paddingTop: '40px' }}>Skills</h1>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={CPP} className="Logo" alt="C++ Logo"></img>
                    <p>C++</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Python} className="Logo" alt="Python Logo"></img>
                    <p>Python</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Javascript} className="Logo" alt="Javascript Logo"></img>
                    <p>Javascript</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Markdown} className="Logo" alt="Markdown Logo"></img>
                    <p>Markdown</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={HTML5} className="Logo" alt="HTML5 Logo"></img>
                    <p>HTML</p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={CSS3} className="Logo" alt="CSS3 Logo"></img>
                    <p>CSS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Bootstrap} className="Logo" alt="Bootstrap Logo"></img>
                    <p>Bootstrap</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={ReactLogo} className="Logo" alt="ReactJS Logo"></img>
                    <p>ReactJS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Express} className="Logo" alt="ExpressJS Logo"></img>
                    <p>ExpressJS</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Node} className="Logo" alt="Node Logo"></img>
                    <p>NodeJS</p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', marginBottom: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={MySQL} className="Logo" alt="MySQL Logo"></img>
                    <p>MySQL</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={MongoDB} className="Logo" alt="MongoDB Logo"></img>
                    <p>MongoDB</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Git} className="Logo" alt="Git Logo"></img>
                    <p>Git</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Bash} className="Logo" alt="Bash Logo"></img>
                    <p>Bash</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Photoshop} className="Logo" alt="Photoshop Logo"></img>
                    <p>Photoshop</p>
                </div>
                
              </div>
            </Container>
        </div>
    )
}

export default Skills;
