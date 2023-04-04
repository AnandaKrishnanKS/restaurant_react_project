
import { useParams } from 'react-router-dom'
import { React,useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


function RestView() {

  const params=useParams()
  // console.log(params.id);
  
   
  var[restaurants,setRestaurant]=useState([])

  const fetchRest= async ()=>{
const result=await fetch('/restaurants.json')
     result.json().then(
      data=>{
        setRestaurant(data.restaurants)
        
     }
     )
}

const restFindById=restaurants.find(item=>item.id==params.id)
// console.log(restFindById);


// console.log(restaurants);
useEffect(()=>{
  fetchRest()
},[])
  
  return (
<>
  {restFindById?(
    <div  className='bg-dark'>
      <Container>
        <Row className='p-5 bg-primary'>
          <Col lg={6} md={6} className='mb-2'>
            <img className='rounded border p-2 w-100' src={restFindById.photograph} alt='...'/>
          </Col>
          <Col  lg={6} md={6} className='mb-2'>
          <Row>
            <ListGroup className='p-2 rounded border mb-2' >
          <ListGroup.Item  className='fs-3'><span className='fw-bold '>Restaurant Name :</span> {restFindById.name}</ListGroup.Item>
          <ListGroup.Item className='fs-3'><span className='fw-bold '>Cuisine Type :</span> {restFindById.cuisine_type}</ListGroup.Item>
          <ListGroup.Item className='fs-3'><span className='fw-bold '>Address :</span> {restFindById.address}</ListGroup.Item>
          <ListGroup.Item className='fs-3'><span className='fw-bold '>Neighborhood :</span> {restFindById.neighborhood}</ListGroup.Item>
        </ListGroup>
          </Row>
          <Row>
            <Col>
               <img className='rounded border p-2 w-100' src='https://imgs.search.brave.com/hoD2DSYlF_HnGAFpPheECKhD4ywt8vSUMxzMuljgpbc/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzUwMjYy/MC9zY3JlZW5zaG90/cy8xODQ2NDA1L2No/ZWYuZ2lm.gif'/>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  ):""}
    
    
</>
  )
}

export default RestView