import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import ViewPlantDetails from '../pages/services/viewPlantDetails';
import { Link } from 'react-router-dom';

export default function MyCard({plantName, plantInfo}) {
  const [isRemoved, setIsRemoved] = useState(false);

    const handleClick = () => {
        // window.location.href = 'https://en.wikipedia.org/wiki/Mango';
      console.log(plantInfo, plantName);
    };

    const handleRemove = () => {
      setIsRemoved(true) ;
    };

  if(isRemoved) {
    console.log("removed");
    return null;
  }

  return (
<Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src={imgsrc} /> */}
  <Card.Body>
    <Card.Title>{plantName}</Card.Title>
    <Card.Text>{plantInfo}</Card.Text>
    <button
      onClick={handleRemove}
      style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        height: '1.5rem',
        width: '1.5rem',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
      }}
    >
    x
    </button>
  </Card.Body>
</Card>



  );
}