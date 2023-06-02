import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewDateForm({setNewtype, setNewactivity, setNewMood, postNewDate,newtype, newactivity, newMood}) {
	
		return (
            <div>
                <Form>
                <Form.Group className="border border-light text-center p-3 m-3" id = "tiles" >
                    <h1>Create Your Own Date Night</h1>
                    <Form.Control className = "mb-3" type = "text" placeholder='Type' onChange={(e) => setNewtype(e.target.value)}></Form.Control>
                    <Form.Control className = "mb-3" type = "text" placeholder='Activity' onChange={(e) => setNewactivity(e.target.value)}></Form.Control>
                    <Form.Control className = "mb-3" type = "text" placeholder='Mood' onChange={(e) => setNewMood(e.target.value)}></Form.Control>
                    <Button className = "mt-3 border border-info" variant = "secondary" onClick={(e) => postNewDate(e,newtype, newactivity, newMood)}>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        );
	
}