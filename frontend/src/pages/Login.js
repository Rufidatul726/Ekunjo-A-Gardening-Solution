import {Container, Card, Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Homepage() {
  return (
    <div>
        
        <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
  );
}

export default Homepage;

// Path: frontend\src\pages\Homepage.js