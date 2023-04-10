import React from 'react'
import "./Launches.css"
import { useState,useEffect } from 'react'
import Header from '../../Compenents/Header/Header'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function Launches() {
  
  const [header,setheader]=useState("rocket-Header")

  const [launch_data, set_launch_data] = useState([])

  const [launch_query, set_launch_query] = useState("")

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
        fetch(`https://api.spacexdata.com/v4/launches/${launch_query}`).then((response)=>response.json()).then((responsedata)=>{
            
            if(responsedata.length==undefined){
                set_launch_data([responsedata])
            }
            else{
                set_launch_data(responsedata)
            }
        })
    })();
  },[launch_query])

  const sortfunction=()=>{
    let data = launch_data.sort((a,b) => {
        if(a.name < b.name){
            return -1;
        }
    })
    set_launch_data(data)
    console.log(launch_data)
  }
  return (
    <div>
        <div className={header}>
            <Header></Header>
        </div>
        <div>
            <div className='rocket-filterarea'>
            <Form.Select aria-label="Default select example" onChange={(data)=>{if(data.target.value=="sortbyname"){sortfunction()}else{set_launch_query(data.target.value)}}}>
                <option>select category</option>
                <option value="">All</option>
                <option value="sortbyname">Sort by name</option>
                <option value="past">Past Launches</option>
                <option value="upcoming">Upcomming Launches</option>
                <option value="latest">Latest Launch</option>
                <option value="next">Next Launch</option>
            </Form.Select>
            </div>
        </div>
        <div>
            <Container>
                <div className='launch-alignment'>
                   {
                    launch_data.map((data,key) => {
                        return(
                            <Card style={{ width: '18rem',margin: "1rem",borderRadius:"10px",boxShadow:"1px 2px 2px 2px #888888",cursor:"pointer" }} key={key}>
                            <Card.Img variant="top" src={data.links.patch.large} className='launch-image' />
                            <Card.Body>
                              <Card.Title>{data.name}</Card.Title>
                              <Card.Text className='card-text'>
                                {data.details==null?(<p>not available</p>):(data.details)}
                              </Card.Text>
                              <Button variant="primary">Read More</Button>
                            </Card.Body>
                          </Card>
                        )
                    })
                   }
                </div>
            </Container>
            
        </div>
    </div>
  )
}
