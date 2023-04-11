import React from 'react'
import "./History.css"
import { useState,useEffect } from 'react'
import Header from '../../Compenents/Header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function History() {
  
  var historydisplay = []

  const [header,setheader]=useState("rocket-Header")

  const[history_data, sethistory_data] = useState([])
 const [data_length,setdata_length] = useState(0)
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
        await fetch("https://api.spacexdata.com/v4/landpads").then((response)=>response.json()).then((responsedata)=>{
          sethistory_data(responsedata)
          if(responsedata.length%2==0){
            setdata_length(responsedata.length)
          }
          else{
            setdata_length(responsedata.length-1)
          }
        })
  })();
},[])
for(let i=0;i<data_length;i+=2){
  console.log(history_data.length)
  historydisplay.push(
    <div>
        <Row className='mt-5'>
          <Col md={8}>
            <div>
              <p className='history-historyname'>{history_data[i].name}</p>
              <p className='history-historytext'>{history_data[i].details}</p>
            </div>
            <div className='history-readmorebutton' onClick={()=>{window.open(history_data[i].wikipedia)}}>
                <p className='history-redirect'>Read More</p>
              </div>
          </Col>
          <Col md={4}>
              <div className='history-videoarea'>
                 <img src={history_data[i].images.large[0]} className='history-image'></img>
              </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4}>
                <div className='history-videoarea'>
                  <img src={history_data[i+1].images.large[0]} className='history-image'></img>
                </div>
            </Col>
            <Col md={8}>
              <div>
                <p className='history-historyname'>{history_data[i+1].name}</p>
                <p className='history-historytext'>{history_data[i+1].details}</p>
              </div>
              <div className='history-readmorebutton' onClick={()=>{window.open(history_data[i+1].wikipedia)}}>
                <p className='history-redirect'>Read More</p>
              </div>
            </Col>
          
        </Row>
    </div>
  )

}


  return (
    <div>
      <div className={header}>
          <Header></Header>
      </div>
      <div>
     
       {historydisplay}
      </div>
    </div>
  )
}
