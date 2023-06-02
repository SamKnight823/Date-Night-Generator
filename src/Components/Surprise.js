import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

export default function Surprise({dates}) {
return (
	<Container>
    <Row>
      <h1>Here Are Some Date Suggestions:</h1>    
 {dates.map((idea, index) => (<>   
      <Col key={index} className ="border border-light text-center p-3 m-3" id ="tiles">
       <h1>Date Type: {idea.type}</h1>  
         <p id = "white">To Set The Mood For: {idea.mood}</p>
         <p id = "white">Do This: {idea.activity}</p>
      </Col></>                 
 ))}</Row> 
 </Container>
)
}
