import React from 'react';
import Surprise from './Surprise';
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import RandomDate from './RandomDate';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Random() {
	
let dates = [
	{
		type: "Entertainment",
		activity: "Watch A Movie At Home",
		mood: "Relaxing"
	},
	{
		type: "Culinary",
		activity: "Cook Dinner Together",
		mood: "Bonding"
	},
	{
		type: "Adventure",
		activity: "Rock Climbing",
		mood: "Fun"
	},
	{
		type: "Relaxing",
		activity: "Exchange Massages",
		mood: "Romance"
	}
]

let date = dates[Math.floor(Math.random()*dates.length)]
const [randomDate, setRandomDate] = useState({});
		return(
		<div>
		<Container>
        <Row>
			<p>If you are feeling stuck in a rut, our random date night generator can help you to try new things and shake up the status quo. 
				Keep your relationship fresh and exciting!
				It can also suggest affordable activities that are still fun and enjoyable, helpful if you are on a tight budget.
				Sometimes, the best date nights are the ones that are unplanned, so use our date night generator 
				to help you be more spontaneous and to have fun without the hassle of planning.
			</p>
		</Row>
		<Row>
        <Col><Surprise dates = {dates}/></Col>
		<Col className='text-center'>
			<h1>Click The Button Below To Generate A Fresh New Date Idea As Often As You Like!</h1>
		<RandomDate randomDate={randomDate}/>
		<Button variant="secondary" onClick={() => {
          setRandomDate(date);
        }}>
            Choose Random Date
        </Button>
		</Col>
        </Row>
        </Container>		
		</div>);
		
}