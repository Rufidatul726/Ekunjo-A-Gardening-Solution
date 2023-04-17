import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MyCard(props) {
    const handleClick = () => {
        window.location.href = 'https://www.example.com';
    };

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
            <Card.Title>{props.scientificName}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>{props.name}</Button>
        </Card.Body>
    </Card>
  );
}