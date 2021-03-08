import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ERC20 from '../images/erc20-tokens-ethereum-logo.jpg';
import Budgety from '../images/savings.jpg';
import ToDoList from '../images/todolist.jpg';

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#001a33', color: 'white', paddingBottom: '70px' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '40px', marginBottom: '40px' }}>Projects</h1>
      <CardDeck>
        <Card bg='dark'>
          <Card.Img variant="top" src={ERC20} />
          <Card.Body>
            <Card.Title>ERC20 Token Escrow Contract</Card.Title>
            <Card.Text>
              A smart contract that implements an escrow system for ERC20 Tokens, written on the Ethereum blockchain.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Github</small>
          </Card.Footer>
        </Card>
        <Card bg='dark'>
          <Card.Img variant="top" src={Budgety} />
          <Card.Body>
            <Card.Title>Budgety</Card.Title>
            <Card.Text>
              A user friendly budget tracking web application.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Github</small>
          </Card.Footer>
        </Card>
        <Card bg='dark'>
          <Card.Img variant="top" src={ToDoList} />
          <Card.Body>
            <Card.Title>Task Tracker</Card.Title>
            <Card.Text>
              A task tracker web application built with React.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Github</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Projects;
