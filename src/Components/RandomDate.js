import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function RandomDate({randomDate}) {
return (
	<>    
     <Container>
      <Row>
        <Col className ="border border-light text-center p-3 m-3" id ="tiles">
       <h1>Your Date Will Be For: {randomDate.type}</h1>
         <p id = "white">Get Ready To: {randomDate.activity}</p>
         <p id = "white">To Set The Mood For: {randomDate.mood}</p>
         </Col>
         </Row>              
 </Container>      
 </>
)
}
