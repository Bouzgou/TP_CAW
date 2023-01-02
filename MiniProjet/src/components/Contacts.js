import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AddContact from './AddContact';
import ContactSearch from './ContactSearch';
import { contacts_list } from './mycontacts'
import { FaSearch } from 'react-icons/fa'

function Contacts() {
    const [contacts, setContact] = useState(contacts_list);

    let prev_contacts = contacts_list;

    const addContact = (name, phone_number, email) => {
        prev_contacts = [...contacts, { name, phone_number, email }];
        setContact(prev_contacts);
    };

    const updateContacts = new_contacts => {
        setContact(new_contacts);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show_search, setShowSearch] = useState(false);
    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);

    const [showContact, setShowContact] = useState(false);
    const handleCloseContact = () => {
        setShowContact(false);
    }
    const handleShowContact = () => {
        setShowContact(true);
    }

    return (
        <Row className="p-4 align-items-center rounded-3 border shadow-lg">
            <Col className="col-lg-8">
                <h1>Contacts</h1>
            </Col>
            <Col className="col-lg-4">
                <ButtonToolbar>
                    <ButtonGroup className="me-2">
                        {
                            !showContact && (
                                <Button variant="outline-primary" onClick={handleShowContact}>Show Contacts</Button>
                            )
                        }
                        {
                            showContact && (
                                <Button variant="outline-primary" onClick={handleCloseContact}>Close Contacts</Button>
                            )
                        }
                        <Button variant="primary" onClick={handleShow}>Add Contact</Button>
                    </ButtonGroup>
                    <ButtonGroup className="me-2">
                        <Button variant="outline-primary" onClick={handleShowSearch}><FaSearch /></Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Col>
            {
                showContact && (
                    <Container className="mt-3">
                        {contacts.map((contact, index) => (
                            <Card className="mb-3">
                                <Card.Body>
                                    <Card.Title>{contact.name}</Card.Title>
                                    <Card.Subtitle className="text-muted">{contact.phone_number}, {contact.email}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        ))}
                    </Container>
                )
            }
            <AddContact show={show} handleClose={handleClose} addContact={addContact} />
            <ContactSearch show={show_search} handleClose={handleCloseSearch} updateContacts={updateContacts} contacts={prev_contacts} />
        </Row>

    )
}

export default Contacts