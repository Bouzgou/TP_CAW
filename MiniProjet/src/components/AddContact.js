import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddContact({ show, handleClose, addContact }) {
    const [name, setName] = useState("")
    const [phone_number, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!name || !phone_number || !email) return;
        addContact(name, phone_number, email);
        setName("");
        setPhone("");
        setEmail("");
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" value={phone_number} onChange={e => setPhone(e.target.value)} placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>
    )
}

export default AddContact;