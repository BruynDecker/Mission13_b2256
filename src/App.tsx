import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Podcasts from './Podcasts';
import MovieList from './MovieCollection';
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Joel's Movies
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavItem>
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/podcasts">
                    My Podcasts
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/movie-collection">
                    Movie Collection
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/podcasts" element={<Podcasts />} />
              <Route path="/movie-collection" element={<MovieList />} />
            </Routes>
          </Container>
        </main>

        <footer className="text-center mt-5">
          <hr />
          <small>
            &copy; 2023 - Mission07_b2256
          </small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
