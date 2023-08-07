import React, { useContext, useState } from 'react'
import Header from '../../Header'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillSetting } from "react-icons/ai";
import { sender } from '../../Store';
import { useEffect } from "react";
const About = () => {
    let [show, setshow] = useState(false)
    let Data = [
        {
            id: 1,
            title: "Name",
            info: "Ritu Sood",
        },
        {
            id: 2,
            title: "Email",
            info: "rituSood@1232gmail.com",
        },
        {
            id: 3,
            title: "DOB",
            info: "25/02/2002",
        },
        {
            id: 4,
            title: "From",
            info: "Nagpur",

        }

    ]
    let [colorpick, setColorpick] = useState("primary")
    let { mode, setMode } = useContext(sender)
    useEffect(() => {
        AOS.init();
    }, [])
    return (

        <>

            <div className={`container-fluid position-relative text-${mode ? 'light' : 'dark'} bg-${mode ? "dark" : "light"} `} id="About">
                <Header title="About Me" />
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 " data-aos="flip-left">
                        <img src="image/developer_k02jzrgohphqyu.gif" alt="" width="100%" height="500px" />
                    </div>

                    <div className="col-12 col-md-6 ">
                       
                            <p className='p-5'>Hello,
                                I am Ritu Sood from Nagpur,  I recently completed my Bachelors of Science from j.m.patel.college Bhandara, with a specialisation in Computer Science  My CGPA is 8.25.
                                I have a deep interest in web development and have completed a few projects. My short-term objective is to find a job in a reputable organisation, and my long-term goal is to achieve a decent position where I can expand my career, contribute to the organisation. My hobbies include reading books, listening to music .</p>
                       
                    </div>
                </div>
                <div className="row ">
                    {
                        Data.map((e) => {
                            return (
                                <div className=" col-12 col-sm-6 col-md-3 ">
                                    <div className={`card text-bg-${colorpick} mb-3`} style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{e.title}</div>
                                        <div className="card-body">
                                            <p className="card-text">{e.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className=' mx-auto position-absolute top-50 end-0 translate-middle-y text-center   shadow border border-1 ' style={{ width: '50px' }}>
                    <AiFillSetting className='spinner-border border-0 ' onClick={() => setshow(!show)} style={{ fontSize: "25px" }} />
                    {
                        show &&
                        <div>
                            <button onClick={() => setColorpick("danger")} className=' mt-2 rounded-circle bg-danger text-danger'>A</button>
                            <button onClick={() => setColorpick("success")} className='rounded-circle   bg-success text-success my-2 '>B</button>
                            <button onClick={() => setColorpick("warning")} className='rounded-circle bg-warning text-warning '>C</button>
                        </div>
                    }
                </div>


            </div>


        </>
    )
}

export default About