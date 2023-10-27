import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYAH0blDyC-Bfp0Foh1INXtIM91OsQwQs6A&usqp=CAU" />
    <Card.Body>
      <Card.Title>T-shirt</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      
      <Card.Title>35 TND</Card.Title>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>
  )
}

export default Card1