import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





function Header() {
  return (
    <>

<Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://imgs.search.brave.com/Ppy71vKmE5rPM9xP56qqZ2FtjRdhxxB7vMBuxaTdLpg/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/Q29va1NpZ24ucG5n"
              width="35"
              height="35"
              className="d-inline-block align-top"
            />
             <span className='aling-left fs-2 ms-2 '>TOP Restaurant</span >
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header