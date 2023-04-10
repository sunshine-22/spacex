import React, { useEffect, useState } from 'react'
import "./Launch.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
export default function Launch() {

  const[launch_data, set_launch_data] = useState([])

  useEffect(()=>{
      (async()=>{await fetch("https://api.spacexdata.com/v4/launchpads").then((response)=>response.json()).then((responseData)=>{
        set_launch_data(responseData)
      })})();
  },[])

  return (
    <div>
        <div>
          <p className='launch-heading'>Our LaunchPad's</p>
        </div>
        <div>
          <Container>
            <div className='launch-cardarea'>
              {
                launch_data.map((data,key)=>(
                  <Card style={{ width: '18rem',margin: "1rem",borderRadius:"10px",boxShadow:"1px 2px 2px 2px #888888",cursor:"pointer" }}>
                    <Card.Img variant="top" src={data.images.large[0]} className='card-image' />
                    <Card.Body>
                      <Card.Title>{data.name}</Card.Title>
                      <Card.Text className='card-text'>
                        {data.details}
                      </Card.Text>
                     
                    </Card.Body>
                  </Card>
                )
                )
              }
              

              
            </div>
          </Container>
        </div>
    </div>
  )
}
