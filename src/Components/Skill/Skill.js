import React, { useContext, useState } from 'react'
import Header from '../../Header'

import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import './Skill.css'
import { sender } from '../../Store';

const Skill = () => {
    let{mode,setMode}=useContext(sender)

    let Data = [
        {
            id: 1,
            icon: <AiFillHtml5 />,
            title: "HTML",
            colour: "Blue"

        },
        {
            id: 2,
            icon: <SiCss3 />,
            title: "CSS",
            colour: "Orange"

        },
        {
            id: 3,
            icon: <FaBootstrap />,
            title: "BOOTSTRAP",
            colour: "Voilet"

        },
        {
            id: 4,
            icon: <BiLogoJavascript />,
            title: "JAVASCRIPT",
            colour: "yellow"

        },
        {
            id: 5,
            icon: <FaReact />,
            title: "REACT",
            colour: "indigo"

        }

    ]
    let [Picker, setPicker] = useState(Data[0])


    return (
        <>
            <div className={`container-fluid  text-${mode?'light':'dark'} bg-${mode?"dark":"light"} `} id="Skill">
                <Header title="My skill" />
                <div className="row  align-items-center justify-content-center">
                    <div className="col-md-2">
                        {
                            Data.map((e) => {
                                return (
                                    <div className='border border-dark text-center mb-2 shadow'>
                                        <span  className='icon_card'onMouseEnter={() => setPicker(e)} style={{ fontSize: "60px", color: e.colour }}> {e.icon}</span>
                                    </div>

                                )
                            })

                        }

                    </div>
                    <div className="col-12 text-center border border-dark w-75 shadow rounded" >
                        <span style={{ fontSize: "200px", color: Picker.colour }}>
                            {Picker.icon}

                        </span>
                        <h1>{Picker.title}</h1>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Skill