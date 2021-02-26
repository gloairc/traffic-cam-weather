import React from "react";
import {
    Form,
    FormControl,
    Row,
    Col,
    Button
} from "react-bootstrap";

const DateTime = () => {

    return (
        <div class="container-fluid d-flex" id="date-time-cont">
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="date.ControlInput">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                type="date"
                                title="date"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="time.ControlInput">
                            <Form.Label>Time:</Form.Label>
                            <Form.Control
                                type="time"
                                title="time"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="dark">
                            Search
</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default DateTime

