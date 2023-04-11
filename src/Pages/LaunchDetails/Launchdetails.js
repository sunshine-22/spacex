import React from 'react'
import "./Launchdetails.css"
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Header from '../../Compenents/Header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
export default function Launchdetails() {
    let data = useParams()

   
    const [header,setheader]=useState("rocket-Header")

    const [launch_data, set_launchdata] = useState([])

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
            await fetch(`https://api.spacexdata.com/v4/launches/${data.launchid}`).then((response)=>response.json()).then((responsedata)=>{
                set_launchdata([responsedata.links.patch.small,responsedata.links.youtube_id,responsedata.name,responsedata.static_fire_date_utc,responsedata.rocket,responsedata.details,responsedata.id,responsedata.links.article,responsedata.links.wikipedia])
                console.log(responsedata.name)
            })
        })();
    },[])
   
   
  return (
    <div>
        <div className={header}>
            <Header></Header>
        </div>
        <div className='launch-outline'>
     
            <Row>
                <Col md={8}>
                    <div className='launch-descriptionpage'>
                        <div className='launch-logoarea'>
                            <img src={launch_data[0]} className='launch-image'></img>
                        </div>
                        <Table striped className='mt-5'>
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{launch_data[2]}</td>
                                </tr>
                                <tr>
                                    <td>Fire_date</td>
                                    <td>{launch_data[3]}</td>
                                   
                                </tr>
                                <tr>
                                    <td>rocket_id</td>
                                    <td>{launch_data[4]}</td>
                                   
                                </tr>
                                <tr>
                                    <td>detail's</td>
                                    <td>{launch_data[5]}</td>
                                   
                                </tr>
                                <tr>
                                    <td>Launch_id</td>
                                    <td>{launch_data[6]}</td>
                                   
                                </tr>
                                <tr>
                                    <td>Article</td>
                                    <td style={{cursor:"pointer",color:"blue"}} onClick={()=>{window.open(launch_data[7])}}>{launch_data[7]}</td>
                                   
                                </tr>
                                <tr>
                                    <td>Wikepedia</td>
                                    <td style={{cursor:"pointer",color:"blue"}} onClick={()=>{window.open(launch_data[7])}}>{launch_data[8]}</td>
                                   
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col md={4}>
                <div className='launch-imageoutline'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${launch_data[1]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                </Col>
            </Row>
        
        </div>
    </div>
  )
}
