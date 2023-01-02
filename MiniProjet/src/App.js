import './App.css';
import Home from './components/Home'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Contacts from './components/Contacts'
import Blog from './components/Blog'

function App() {
  return (
    <Container className="col-xxl-8 px-4 py-5">
      <Router>
        <Row className="p-4 mb-5 align-items-center rounded-3 border shadow-lg">
          <Nav>
            <Nav.Item>
              <Link className="nav-link active" to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contacts">Contacts</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/blog">Blog</Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
