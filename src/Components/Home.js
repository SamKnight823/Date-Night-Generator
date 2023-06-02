import React from 'react';
import Surveys from './Survey';
import Suggestions from './Suggestions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselDate from './Carousel'
export default function Home() {
	
		return(
		<div>
			<h1>Get Inspired for Your Next Date Night</h1>
		<Container>
      <Row>
        <Col className ="align-items-center"><Surveys/></Col>
		<Col><CarouselDate/></Col>
		<Col><Suggestions/></Col>
      </Row>
    </Container>		
		</div>
		) 
		
	
}

