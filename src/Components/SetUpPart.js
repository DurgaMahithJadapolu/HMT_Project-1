import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Img from '../images/What sets us apart.jpg'

const WhatSetsUsApart = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center text-center">
        <Col md={10}>
          <h1 className="text-primary">
            🌐 What Sets Us Apart
          </h1>
        </Col>
      </Row>
      <Row className="align-items-center mt-4">
        <Col md={6}>
          <p className="text-muted">
            Himotech Global has established itself as a trusted name in the IT
            industry, recognized for delivering reliable services and managing
            projects with precision. Since 2021, we have been dedicated to
            helping businesses create a strong digital identity in an
            increasingly competitive technological landscape. Our mission is to
            leverage the latest advancements in computer science, making IT
            solutions accessible, efficient, and user-friendly for all. With a
            committed team of experts, we continuously strive to build trust
            with our clients, ensuring consistent quality and dependable
            outcomes.
          </p>
        </Col>
        <Col md={6}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={Img}
              alt="Team image"
              className="rounded"
            />
          </Card>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col md={6}>
          <h4 className="text-primary">
            Our Journey, Your Success
          </h4>
        </Col>
        <Col md={6}>
          <p>We’re here to help you shine online!</p>
          <Button variant="primary">Let’s Talk</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatSetsUsApart;
