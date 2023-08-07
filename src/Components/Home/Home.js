import React, { useContext } from 'react'
import './Home.css'
import { sender } from '../../Store'
import {useEffect} from "react";

const Home = () => {
   
    let{mode,setMode}=useContext(sender)
     

    return (
        <>
            <div className={`container-fluid m-0 text-${mode?'light':'dark'} bg-${mode?"dark":"light"} `} id="Home">
                <div className="row align-items-center ">
                    <div className="col-md-6 p-5">
                        <h1 className='mt-5'>Hello!</h1>
                        <br />
                        <h2>Hi i'm Ritu Sood</h2>
                        <h3>Fronted Devloper</h3>
                        <p>creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src="image/20210706_developer-economy_01.webp" alt=""   width="100%" height="400px" style={{marginTop:'100px'}} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home