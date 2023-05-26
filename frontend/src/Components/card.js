import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function MyCard({ plantName, plantInfo, optimalTemp, suntime }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleToggleExpand}>
          {plantName}
        </Card.Title>
        {isExpanded && (
          <>
            <Card.Text>{plantInfo}</Card.Text>
            {optimalTemp && (
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Optimal Temperature:</span> {optimalTemp}
              </Card.Text>
            )}
            {suntime && (
              <Card.Text>
                <span style={{ fontWeight: 'bold' }}>Sunlight Time:</span> {suntime}
              </Card.Text>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
