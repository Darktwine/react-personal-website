import React from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Hero = () => {
    return (
      <div>
        <div className="hero-bg-image" style={{ backgroundSize: 'cover', color: 'white', minHeight: '650px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Container style={{display:'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '700px' }}>
              <h1 className="text-center" style={{ display:'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                Perhaps one did not want to be loved so much as to be understood.
              </h1>
          </Container>
        </div>
      </div>
    );
}

export default Hero;