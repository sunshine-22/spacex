import React from 'react'
import "./Home.css"
import Header from '../../Compenents/Header/Header'
import Banner from '../../Compenents/Banner/Banner'
import Launch from '../../Compenents/Launchpads/Launch'
import { useState,useEffect } from 'react'
import Dragon from '../../Compenents/Dragons/Dragon'
import Crews from '../../Compenents/Crews/Crews'
export default function Home() {

  const [header,setheader]=useState("Home-Header")

  const listenscroll=(event)=>{

      if(window.scrollY>580){
          setheader("Home-Scroll-Header")
      }
      else{
          setheader("Home-Header")
      }
     
  }

  useEffect(()=>{
      window.addEventListener("scroll",listenscroll)

      return ()=> window.removeEventListener("scroll",listenscroll)

  },[])


  return (
    <div>
      <div className={header}>
        <Header></Header>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Launch></Launch>
      </div>
      <div>
        <Dragon></Dragon>
      </div>
      <div>
        <Crews></Crews>
      </div>
    </div>
  )
}
