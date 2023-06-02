import React from 'react'
import { dateNightApi } from '../dateNightApi';
import {useEffect, useState, Component} from 'react'
import NewDateForm from './NewDateForm';
import UpdateDate from './UpdateDate';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MyDateNight() {
  const [dateNightIdeas, setDateNightIdeas] = useState([])
  async function getIdeas() {
    const data = await dateNightApi.get();
        setDateNightIdeas(data)   
  }
async function deleteDate(id){
  await dateNightApi.delete(id);
  getIdeas();
 }
  const [newtype, setNewtype] = useState('')
  const [newactivity, setNewactivity] = useState('')
  const [newMood, setNewMood] = useState('')

  async function postNewDate(e, newtype,newactivity, newMood) {
    e.preventDefault()
    const data = {type:newtype, activity: newactivity, mood:newMood}
   await dateNightApi.post(data); 
   getIdeas();
  }

  const [updatetype, setupdatetype] = useState('')
  const [updateactivity, setUpdateactivity] = useState('')
  const [updateMood, setUpdateMood] = useState('')

  async function updateDate(e, updatetype, updateactivity, updateMood, id) {
    e.preventDefault()
    const data = {type:updatetype, activity: updateactivity, mood:updateMood}
   await dateNightApi.put(data,id); 
   getIdeas();
  }
  useEffect(() => {
    getIdeas();
    
  }, [])
  return (
    <div>
      <Container>
        <h1 id='border'>What are your favorite date nights? What do you want to try? Keep your ideas here to remind you later
          of what worked or just fun ideas that you want to remember!
        </h1>
        <Row>
          <Col className='col-3 border border-light'>
            <p>Make up your own date ideas here, be creative!!</p>
    <NewDateForm setNewtype = {setNewtype} 
    setNewactivity = {setNewactivity} 
    setNewMood = {setNewMood} 
    postNewDate = {postNewDate}
    newtype = {newtype}
    newactivity = {newactivity}
    newMood = {newMood}/></Col>    
    <Col>
    <p id='center'>Here are your saved dates:</p>
    <div className='d-flex flex-wrap'>    
 {dateNightIdeas.map((idea, index) => ( 
     <div key={index} className ="border border-light text-center p-3 m-3" id = "tiles">      
      <h1>Type: {idea.type} </h1>
        <p id = "white">Activity: {idea.activity}</p>
        <p id = "white">Mood: {idea.mood}</p>
        <Button className = "mb-3 border border-info" variant = "secondary"  onClick={() => deleteDate(idea.id)}>Delete</Button>
        <UpdateDate index = {idea.id}
 updatetype = {updatetype}
 updateactivity = {updateactivity}
 updateMood = {updateMood}
 setupdatetype = {setupdatetype}
 setUpdateactivity = {setUpdateactivity}
 setUpdateMood={setUpdateMood}
 updateDate={updateDate}/>
 </div>))}</div>  
 </Col>
 </Row>
 </Container>
 </div>)}