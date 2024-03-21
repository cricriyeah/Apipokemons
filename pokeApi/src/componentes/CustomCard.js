import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomModal from './CustomModal'; // Importamos el componente CustomModal
import './CustomCard.css';

function CustomCard({ title, text, imagen, types, textModal }) {
  const [modalShow, setModalShow] = useState(false); // Estado para controlar la visibilidad del modal

  return (
    <>
      <Card style={{ width: '18rem' }} className="card" id={types}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>Saber más</Button>
        </Card.Body>
      </Card>
      <CustomModal // Renderizamos el componente CustomModal condicionalmente
        show={modalShow} // Propiedad para controlar la visibilidad del modal
        onHide={() => setModalShow(false)} // Función para ocultar el modal al hacer clic en el botón "Cerrar"
        title={title} // Propiedad para pasar el título al modal
        text={textModal} // Propiedad para pasar el texto al modal
      />
    </>
  );
}

export default CustomCard;
