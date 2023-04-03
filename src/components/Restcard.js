import React from "react";
import Card from "react-bootstrap/Card";

function Restcard({restdata}) {
  return (
    <>
      <Card className="ms-auto me-auto bg-black text-white" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={restdata.photograph} />
        <Card.Body>
          <Card.Title>{restdata.name}</Card.Title>
          <Card.Text>
            <p>Cuisine type: {restdata.cuisine_type}</p>
            <p>{restdata.address}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Restcard;
