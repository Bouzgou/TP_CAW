import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import AddPost from './AddPost';
import { posts_list } from './myposts'

function Blog() {
    const [posts, setPost] = useState(posts_list);

    const addPost = (title, content, image_link, date_added) => {
        const newPosts = [...posts, { title, content, image_link, date_added }];
        setPost(newPosts);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPost, setShowPost] = useState(false);
    const handleClosePost = () => setShowPost(false);
    const handleShowPost = () => setShowPost(true);


    return (
        <Row className="p-4 align-items-center rounded-3 border shadow-lg">
            <Col className="col-lg-8">
                <h1>Blog</h1>
            </Col>
            <Col className="col-lg-4">
                <ButtonGroup>
                    {
                        !showPost && (
                            <Button variant="outline-primary" onClick={handleShowPost}>Show Posts</Button>
                        )
                    }
                    {
                        showPost && (
                            <Button variant="outline-primary" onClick={handleClosePost}>Close Posts</Button>
                        )
                    }
                    <Button variant="primary" onClick={handleShow}>Add Post</Button>
                </ButtonGroup>
            </Col>
            {
                showPost && (
                    <Row xs={1} md={3} className="g-4">
                        {posts.map(post => (
                            <Col>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={post.image_link} />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>{post.content}</Card.Text>
                                        <Card.Text><small className="text-muted">{post.date_added}</small></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )
            }
            <AddPost show={show} handleClose={handleClose} addPost={addPost} />
        </Row>
    )
}

export default Blog