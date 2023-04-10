import React, { useEffect, useState } from 'react'
import "./Dragon.css"
import Carousel from 'react-bootstrap/Carousel';
export default function Dragon() {
    const [dragons, set_dragons] = useState([])

    useEffect(()=>{
        (async()=>{
            await fetch("https://api.spacexdata.com/v4/dragons").then((response)=>response.json()).then((responedata)=>{
                set_dragons(responedata)
            })
        })();
    },[])
  return (
   <div>
    <Carousel slide={false}>


        {
            dragons.map((data,key)=>(
                <Carousel.Item>
                <img
                  className="d-block w-100 dragon-imageheight"
                  src={data.flickr_images[2]}
                  alt="First slide"
                />
               
              </Carousel.Item>
            ))
        }
      
      
    </Carousel>
   </div>
  )
}
