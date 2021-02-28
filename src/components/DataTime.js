import { React, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

// API Query: 2021-02-26T12:27:50+08:00
//URL: https://api.data.gov.sg/v1/transport/traffic-images?date_time=2021-02-26T12%3A27%3A50%2B08%3A00

const DateTime = (props) => {
    const [formData, setFormData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        //manipulate the formData {date:YYYY-MM-DD, time:HH:MM} to to form a valid query string
        const encodedDateTime = encodeURIComponent(formData.date + "T" + formData.time + ":00+08:00")
        // TO ADD IN Validation: Cannot choose date after today. Show error if missing date and/or time
        props.setQueryString(encodedDateTime)
    };

    return (
        <div class="container-fluid pt-2 pb-1" id="date-time-cont">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col id="date-col" xs="auto">
                        <Form.Group as={Row} controlId="dateInput">
                            <Form.Label column sm={2}>Date:</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="date"
                                    title="date"
                                    onChange={(event) => {
                                        setFormData((state) => {
                                            return { ...state, date: event.target.value }
                                        })
                                    }}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col id="time-col" xs="auto">
                        <Form.Group as={Row} controlId="timeInput">
                            <Form.Label column sm={3}>Time:</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="time"
                                    title="time"
                                    onChange={(event) => {
                                        setFormData((state) => {
                                            return { ...state, time: event.target.value }
                                        })
                                    }}
                                />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col id="btn-col" class="py-1">
                        <Button variant="primary" type="submit">
                            Search
</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default DateTime

