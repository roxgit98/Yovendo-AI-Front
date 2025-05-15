import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { Gear, PersonFill } from "react-bootstrap-icons";

function Home() {
  const messages = [{ message: "ciao" }, { message: "come va?" }];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        {messages.map((msg, index) => (
          <Row
            key={index}
            className="d-flex flex-row-reverse justify-content-center mb-1"
          >
            <Col sm={2}>
              <Card className="mt-5 bg-secondary">
                <Card.Body>
                  <Card.Text>{msg.message}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}

        <Row>
          <Col sm={2}>
            <Row>
              <Col sm={1}>
                <Button variant="outline-secondary">
                  <Gear color="white"></Gear>
                  Impostazioni
                </Button>
                <Button
                  variant="outline-secondary"
                  className="mt-3"
                  onClick={handleShow}
                >
                  <PersonFill color="white"></PersonFill>
                  Accedi
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Form.Label htmlFor="chat" className="text-white fs-1">
              {" "}
              Benvenuto
            </Form.Label>
            <Form.Control type="text" id="chat" placeholder="Fai una domanda" />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci le credenziali</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Home;
