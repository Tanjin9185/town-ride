import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Destination = () => {
    return (
        <div>
            <div>
                <Form>
                    <Form.Group controlId="formBasicStart">
                        <Form.Label>Pick Form</Form.Label>
                        <Form.Control type="text" placeholder="Form" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEnd">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" placeholder="Destination" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
            <div></div>
        </div>
    );
};

export default Destination;