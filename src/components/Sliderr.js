import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Sliderr() {
  return (
    <>
      <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_640.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_640.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item></Carousel>

</>
  )
}

export default Sliderr