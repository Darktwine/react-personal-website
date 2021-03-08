import Container from 'react-bootstrap/Container';

const About = () => {
  return (
    <div style={{backgroundColor: '#001a33', marginTop: '-32px'}}>
      <Container style={{display:'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px', flexWrap: 'wrap', color: 'white'}}>
        <h1 style={{justifyContent: 'center', alignItems: 'center', width: '100%', textAlign: 'center', marginTop: '25px'}}>Hi, I'm Kevin.</h1>
        <p style={{maxWidth: '650px', justifyContent: 'center', alignItems: 'center', textAlign: 'left'}}>
          Welcome to my personal website! I am a senior majoring in computer science at Hunter College,
          and an aspiring full stack developer. I love to build things and enjoy reading, writing, programming, and designing.
          <br/>
          <br/>
          Take a look below to learn more about me and some of the projects I've done!
        </p>
      </ Container>
    </div>
  )
}

export default About;
