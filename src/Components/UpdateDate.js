import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function UpdateDate({index, setupdatetype, setUpdateactivity, setUpdateMood, updateDate, updatetype, updateactivity, updateMood}) {
	
		return (
            <div>
                <Form border="secondary" >
                <Form.Group className="mb-3">       
                  <Form.Control type = "text" placeholder = "Change Type?" size="sm"
                    onChange={(e) => setupdatetype(e.target.value)}
                  />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <Form.Control type = "text" placeholder = "Change Activity?" size="sm"
                    onChange={(e) => setUpdateactivity(e.target.value)}
                  />
                  </Form.Group>
                  <Form.Group className="mb-3">
                  <Form.Control type = "text" placeholder = "Change Mood?" size="sm"
                    onChange={(e) => setUpdateMood(e.target.value)}
                  />
                  </Form.Group>
                  <Button className = "border border-info" variant= "secondary" onClick={(e) => updateDate(e,updatetype,updateactivity,updateMood, index)}>Update</Button>
                </Form>
            </div>
        );
	
}
