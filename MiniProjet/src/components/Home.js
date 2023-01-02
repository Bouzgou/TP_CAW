import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function Home() {
    return (
        <Row className="p-4 align-items-center rounded-3 border shadow-lg">
            <Col className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                    I am Lazy Student, Welcome to my <Badge bg="secondary">Homepage</Badge>
                </h1>
            </Col>
            <Col className="col-10 col-sm-8 col-lg-6 mt-5">
                <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png"
                    class="d-block mx-lg-auto img-fluid"
                    alt="Bootstrap Themes"
                    width="250"
                    loading="lazy"
                />
            </Col>
            <Row className="pt-5">
                <h4>
                    You can browse my page with the
                    <Link to="/contacts"> Contacts </Link>

                    or
                    <Link to="/blog"> Blog </Link>
                </h4>
            </Row>
        </Row>
    )
}

export default Home