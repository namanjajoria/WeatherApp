import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function File3({data}) {
  return (
    <div>
        <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.Cardtitle}</Card.Title>
          <Card.Text>
            {data.CardText}
          </Card.Text>
          <Button variant="primary" href={data.link}>Click to go Marvel Official Website</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default File3
