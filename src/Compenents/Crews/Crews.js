import React, { useEffect, useState } from 'react'
import "./Crews.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Crews() {
    const navigate = useNavigate()

    const[crew_members, set_crewmembers] = useState([])

    useEffect(()=>{
        (async()=>{
            await fetch("https://api.spacexdata.com/v4/crew/").then((response)=>response.json()).then((responseData)=>{
                set_crewmembers(responseData)
            })
        })();
    },[])
  return (
    <div>
        <div>
            <p className='crew-text'>Our Crew Member's</p>
        </div>
        <div>
            <Container>
                <div className='crew-display'>
                {crew_members.map((data,key) =>(
                    <Card style={{ width: '18rem',margin:"1rem",boxShadow:"1px 2px 2px 2px #888888" }}>
                        <Card.Img variant="top" src={data.image} className='crew-image' onClick={()=>{window.open(data.wikipedia)}}/>
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>{data.name}({data.agency})</Card.Title>
                            
                            
                        </Card.Body>
                    </Card>
                ))}
            </div>
            </Container>
        </div>
        
    </div>
  )
}
