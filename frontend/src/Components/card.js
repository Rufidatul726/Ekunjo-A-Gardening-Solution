import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function MyCard(props) {
  const [isRemoved, setIsRemoved] = useState(false);

    const handleClick = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Mango';
    };

    const handleRemove = () => {
        setIsRemoved(true);
    };

  if(isRemoved) return null;

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
            <Card.Title>{props.scientificName}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>{props.name}</Button>
            <button onClick={handleRemove}
                style={{position: "absolute", top: "0", right: "0", padding: "0.5rem 1rem", border: "none", backgroundColor: "transparent", cursor: "pointer"}}
            >x</button>
        </Card.Body>
    </Card>
  );
}