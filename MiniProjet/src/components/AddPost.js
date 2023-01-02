import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddPost({ show, handleClose, addPost }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image_link, setImage] = useState("")
    const [date_added, setDate] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        if (!title || !content || !image_link || !date_added) return;
        addPost(title, content, image_link, date_added);
        setTitle("");
        setContent("");
        setImage("");
        setDate("");
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Post</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Image Link</Form.Label>
                        <Form.Control type="text" value={image_link} onChange={e => setImage(e.target.value)} placeholder="Image Link" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" value={date_added} onChange={e => setDate(e.target.value)} placeholder="Date" />
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

export default AddPost