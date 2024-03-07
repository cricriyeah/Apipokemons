import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CustomCard.css'

function CustomCard({tittle, text, imagen}) {
  return (
    <Card style={{ width: '18rem'  }} id="card">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{tittle}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">Saber mas</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;