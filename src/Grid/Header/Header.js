import React from 'react';
import { Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Header.css';

const Header = (props) => {
  const {
    algorithm,
    fenceToggle,
    ready,
    run: propRun,
    reset,
    setAlgorithm,
  } = props;

  const run = () => {
    if (algorithm === '') {
      alert('Please select an algorithm');
    }
    if (!ready) {
      alert(
        'Please choose a start and finish point before running by clicking on the desired squares'
      );
    }
    if (ready && algorithm) {
      propRun();
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" children={'Algo-Visualiser'} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features" children={'Features'} />
          <Nav.Link href="#pricing" children={'Pricing'} />
          <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
            <NavDropdown.Item
              id={'set-dijkstra'}
              onClick={() => setAlgorithm('dijkstra')}
              children={'Dijkstra'}
            />
            <NavDropdown.Item
              id={'set-astar-euclidean'}
              onClick={() => setAlgorithm('A* Euclidean')}
              children={'A* (Euclidean Distance)'}
            />
            <NavDropdown.Item
              id={'set-astar-manhatten'}
              onClick={() => setAlgorithm('A* Manhatten')}
              children={'A* (Manhatten Distance)'}
            />
            <NavDropdown.Divider />
            <NavDropdown.Item children={'Separated link'} />
          </NavDropdown>
          <Form>
            <Form.Check
              type="checkbox"
              id="fence-check"
              name="fences"
              label="Fences"
              style={{ color: 'white' }}
              onChange={fenceToggle}
            />
          </Form>
        </Nav>
        <Nav variant="center">
          <Button
            id="run-btn"
            variant="primary"
            onClick={run}
            children={algorithm ? `Let's Run ${algorithm}` : 'Select Algorithm'}
            disabled={!ready || algorithm === ''}
          />
          <Button
            id="reset-btn"
            style={{ backgroundColor: 'red' }}
            onClick={reset}
            variant="primary"
            children={'Reset'}
          />
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

Header.propTypes = {
  algorithm: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  run: PropTypes.func.isRequired,
  fenceToggle: PropTypes.func.isRequired,
  setAlgorithm: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
