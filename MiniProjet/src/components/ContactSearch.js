import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { contacts_list } from './mycontacts'

function ContactSearch({ show, handleClose, updateContacts, contacts }) {
    const [search_type, setSearchType] = useState()
    const [content, setContent] = useState("")

    const contactSearch = (search_type, content) => {
        switch (search_type) {
            case "1":
                return contacts.filter(contact => contact.name == content)
            case "2":
                return contacts.filter(contact => contact.phone_number == content)
            case "3":
                return contacts.filter(contact => contact.name[0] == content)
            default:
                // code block
                break;
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(contacts)
        //if (!content || search_type == 0) return;
        updateContacts(contactSearch(search_type, content));
        console.log(contactSearch(search_type, content));
        handleClose();
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Search Contacts</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formBasic">
                        <Form.Select className="mb-2" onChange={e => setSearchType(e.target.value)}>
                            <option selected>Choose...</option>
                            <option value="1" >By Name</option>
                            <option value="2" >By Phone number</option>
                            <option value="3" >By Alphabetical letter</option>
                        </Form.Select>
                        <Form.Control type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Search" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>

    )
}

export default ContactSearch