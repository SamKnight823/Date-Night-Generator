import Carousel from 'react-bootstrap/Carousel';
import CarouselItem1 from './CarouselItem1'
import CarouselItem2 from './CarouselItem2';
import CarouselItem3 from './CarouselItem3';

export default function CarouselDate() {
  return (
    <div>
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <CarouselItem1 className="d-block w-100"/>        
      </Carousel.Item>
      <Carousel.Item>
      <CarouselItem2 className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
      <CarouselItem3 className="d-block w-100"/>
      </Carousel.Item>
    </Carousel></div>
  );
}