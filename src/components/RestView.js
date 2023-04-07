import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Reviews from "./Reviews";
import OperatingTime from "./OperatingTime";

function RestView() {
  const params = useParams();
  // console.log(params.id);

  var [restaurants, setRestaurant] = useState([]);

  const fetchRest = async () => {
    const result = await fetch("/restaurants.json");
    result.json().then((data) => {
      setRestaurant(data.restaurants);
    });
  };

  const restFindById = restaurants.find((item) => item.id == params.id);
  // console.log(restFindById);

  // console.log(restaurants);
  useEffect(() => {
    fetchRest();
  }, []);

  return (
    <>
      {restFindById ? (
        <div className="bg-primary">
          <Container className="px-5">
            <Row className="p-5">
              <Col id="popefect" lg={6} md={6} className="mt-1">
                <img
                  className="rounded border p-2"
                  style={{height:"48rem"}}
                  src={restFindById.photograph}
                  alt="..."
                />
              </Col>
              <Col lg={6} md={6} className="mb-2 overflow-hidden">
                <Row id="popefect">
                  <Col className="pt-1">
                    <ListGroup className="p-2 rounded border text-white">
                      <span className="p-3 bg-dark rounded">
                        <h2 className=" text-white fw-bold overflow-hidden">
                          {restFindById.name}
                        </h2>
                        <hr />
                        <p className="fs-4"><span className="fw-bold ">Cuisine Type :</span>{" "}
                          {restFindById.cuisine_type}
                        </p>
                        <p className="fs-4"><span className="fw-bold ">Address :</span>{" "}
                          {restFindById.address}
                        </p>
                        <p className="fs-4"><span className="fw-bold ">Neighborhood :</span>{" "}
                          {restFindById.neighborhood}
                        </p>
                        <hr/>
                        <Row>
                          <Col className=" text-center">
                            <OperatingTime timeData={restFindById.operating_hours} />
                            <Reviews reviewData={restFindById.reviews} />
                          </Col>
                        </Row>
                      </span>
                    </ListGroup>
                  </Col>
                </Row>

                <Row id="popefect">
                  <Col className="text-center">
                    <img
                      className="rounded border w-100 p-2 mt-2"
                      src="https://imgs.search.brave.com/hoD2DSYlF_HnGAFpPheECKhD4ywt8vSUMxzMuljgpbc/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzUwMjYy/MC9zY3JlZW5zaG90/cy8xODQ2NDA1L2No/ZWYuZ2lm.gif"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RestView;
