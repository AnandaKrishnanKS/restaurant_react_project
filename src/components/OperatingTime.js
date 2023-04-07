import React from 'react'
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OperatingTime({timeData}) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

<Button id='popefect' variant="info" onClick={handleShow} className='border rounded m-2'>
        Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='text-white'>Working Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <ListGroup>
                <ListGroup.Item className='bg-dark text-white'>  Monday |     {timeData.Monday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Tuesday |    {timeData.Tuesday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Wednesday |  {timeData.Wednesday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Thursday |   {timeData.Thursday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Friday |     {timeData.Friday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Saturday |   {timeData.Saturday}</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-white'>  Sunday |     {timeData.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button className='rounded border-black' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default OperatingTime