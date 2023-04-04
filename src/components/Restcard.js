import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Restcard({restdata}) {
  return (
    <>
      <Link to={`/RestaurantDetails/${restdata.id}`}>
        <Card className="ms-auto me-auto bg-black text-white" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={restdata.photograph} />
          <Card.Body>
            <span className="fs-3 fw-bold">{restdata.name}</span>
            <Card.Text>
              <p>Cuisine type: {restdata.cuisine_type}</p>
              <p>{restdata.address}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default Restcard;
