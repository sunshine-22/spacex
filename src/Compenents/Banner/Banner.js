import React from 'react'
import "./Banner.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
export default function Banner() {

    const[frame_link, set_frame_link] = useState([])
  
    useEffect(()=>{
        (async()=>{
            await fetch("https://api.spacexdata.com/v4/launches/latest")
            .then(response => response.json()).then((responseData)=>{
                set_frame_link(responseData.links)
                
            })
           
        })();
    },[])

  return (
    <div className='banner-outline'>
        <Container>
            <Row>
                <Col  lg={5}>
                        <div>
                           <p className='banner-launchdetails'>RECENT LAUNCH</p>
                           <p className='banner-launchdettext'>Know more about the latest Launch & Mission Detail's</p>
                           <div className='banner-readmorebutton' onClick={()=>{window.open(frame_link.wikipedia)}}>
                                <p className='banner-redirect'>Read More</p>
                           </div>
                        </div>
                </Col>
                <Col  lg={7} className='d-none d-md-block'>
                    <div className='banner-imageoutline'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${frame_link.youtube_id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>            
                </Col>
             </Row>
        </Container>
      
    </div>
  )
}
