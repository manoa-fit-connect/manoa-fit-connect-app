import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const MapPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { name: 'Balance Ball', position: { x: 100, y: 100 }, id: 1 },
    { name: 'Basketball Court', position: { x: 300, y: 200 }, id: 2 },
    { name: 'Bench Press', position: { x: 500, y: 300 }, id: 3 },
    { name: 'Cable Crossover Machine', position: { x: 700, y: 400 }, id: 4 },
    { name: 'Chest Press Machine', position: { x: 900, y: 500 }, id: 5 },
    { name: 'Dumbbells', position: { x: 1100, y: 600 }, id: 6 },
    { name: 'Elliptical Machine', position: { x: 100, y: 700 }, id: 7 },
    { name: 'Foam Roller', position: { x: 300, y: 800 }, id: 8 },
    { name: 'Indoor Track', position: { x: 500, y: 900 }, id: 9 },
    { name: 'Lat Pulldown Machine', position: { x: 700, y: 800 }, id: 10 },
    { name: 'Leg Press Machine', position: { x: 900, y: 700 }, id: 11 },
    { name: 'Pilates Ring', position: { x: 1100, y: 600 }, id: 12 },
    { name: 'Resistance Bands', position: { x: 100, y: 500 }, id: 13 },
    { name: 'Rowing Machine', position: { x: 300, y: 400 }, id: 14 },
    { name: 'Smith Machine', position: { x: 500, y: 300 }, id: 15 },
    { name: 'Stair Climber', position: { x: 700, y: 200 }, id: 16 },
    { name: 'Stationary Bicycle', position: { x: 900, y: 100 }, id: 17 },
    { name: 'Stretching Strap', position: { x: 1100, y: 100 }, id: 18 },
    { name: 'Treadmill', position: { x: 100, y: 200 }, id: 19 },
    { name: 'Yoga Blocks', position: { x: 300, y: 300 }, id: 20 },
    { name: 'Yoga Mats', position: { x: 500, y: 400 }, id: 21 },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container fluid>
      <Row className="flex-grow-1">
        <Col className="p-0">
          <div className="map-image-container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <img
              src="https://cdn-hbjbh.nitrocdn.com/EUcURIgYaEBPqKnzFnPzsxbSgiKdYZcA/assets/images/optimized/rev-f0ee177/3dplans.com/wp-content/uploads/The-Mansfield-Level-5-1024x796.jpg"
              alt="Gym Map"
              style={{ width: '90%', height: '90%', borderRadius: '20px' }}
            />
            {items.map((item) => (
              <div
                key={item.id}
                className="circle position-absolute"
                style={{
                  left: `${(item.position.x / 2048) * 100}%`,
                  top: `${(item.position.y / 1592) * 100}%`,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: selectedItem && selectedItem.id === item.id ? 'green' : 'red',
                  cursor: 'pointer',
                }}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3">
          <Card style={{ width: '400px' }}>
            <Card.Body>
              <Card.Title>List of Items</Card.Title>
              <div className="item-list" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.id}
                      style={{ cursor: 'pointer', color: selectedItem && selectedItem.id === item.id ? 'green' : 'black' }}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MapPage;
