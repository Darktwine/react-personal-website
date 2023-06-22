import React from 'react'
import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <div id="about" style={{backgroundColor: '#001a33', marginTop: '-32px', paddingTop: '20px', paddingBottom: '10px'}}>
      <Container style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', flexWrap: 'wrap', color: 'white'}}>
        <h1 style={{justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', marginTop: '15px', fontSize: 'xxx-large'}}>Hi, I'm Kevin.</h1>
        <p style={{maxWidth: '650px', justifyContent: 'center', alignItems: 'center', textAlign: 'left', marginBottom: '60px'}}>
          Welcome to my personal website! I am a full stack developer and computer science graduate from Hunter College.
          I love to build things and enjoy reading, writing, programming, and designing.
          <br/>
          <br/>
          Take a look below to learn more about me and some of the projects I've done!
        </p>
      </ Container>
    </div>
  )
}

export default About;
