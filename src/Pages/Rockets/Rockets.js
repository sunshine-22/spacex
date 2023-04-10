import React from 'react'
import "./Rockets.css"
import Header from '../../Compenents/Header/Header'
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Rockets() {

  const [rocketdata, setrocketdata] = useState([])

  const [header,setheader]=useState("rocket-Header")

  const listenscroll=(event)=>{

      if(window.scrollY>580){
          setheader("rocket-Scroll-Header")
      }
      else{
          setheader("rocket-Header")
      }
     
  }

  useEffect(()=>{
      window.addEventListener("scroll",listenscroll)

      return ()=> window.removeEventListener("scroll",listenscroll)

  },[])

  useEffect(()=>{
    (async()=>{
        await fetch("https://api.spacexdata.com/v4/rockets").then((response)=>response.json()).then((responsedata)=>{
            setrocketdata(responsedata)
        })
    })();
  })

  const sortfunction=()=>{
    let data = rocketdata.sort((a,b) => {
        console.log(b)
        if(a.name < b.name){
            return -1;
        }
    })
  setrocketdata(data)
  }
  return (
    <div>
        <div className={header}>
            <Header></Header>
        </div>
        <div>
            <div className='rocket-filterarea'>
            <Form.Select aria-label="Default select example" onChange={(data)=>{if(data.target.value=="sortbyname"){sortfunction()}}}>
                <option>select category</option>
                <option value="all">All</option>
                <option value="sortbyname">Sort by name</option>
            </Form.Select>
            </div>
        </div>
        <Container>
            <div className='rocket-area'>
                    {
                        rocketdata.map((data,key)=>(
                            <Card style={{ width: '18rem',margin: "1rem",borderRadius:"10px",boxShadow:"1px 2px 2px 2px #888888",cursor:"pointer" }}>
                    <Card.Img variant="top" src={data.flickr_images[0]} className='card-image' onClick={()=>{window.open(data.wikipedia)}} />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text className='card-text'>
                        {data.description}
                      </Card.Text>
                      <Button variant="primary">Read More</Button>
                    </Card.Body>
                  </Card>
                        ))
                    }
            </div>
        </Container>
    </div>
  )
}
