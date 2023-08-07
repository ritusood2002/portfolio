import React, { useContext } from 'react'
import Form from './Form'
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import Header from '../../Header';
import { sender } from '../../Store';



const Contact = () => {
    let { mode, setMode } = useContext(sender)
    return (
        <>

            <div  className={`container-fluid py-3 text-${mode ? 'light' : 'dark'}  bg-${mode ? "dark" : "light"}`} id="Contact">
                <Header title="Contact Me" />
                <div className="row">
                    <div className="col-6">
                        <h1>Let's  Get touch</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor quis nihil officiis ab placeat animi modi dolorem? Minus, ea temporibus?</p>
                        <h5>Living in:</h5>
                        <p>Nagpur</p>
                        <h5>Call</h5>
                        <p>+91 8446408468</p>
                        <a href="https://github.com/ritusood2002" fontSize="200px" className='me-2'><BsGithub /></a>
                        <a href="https://www.instagram.com/the_ritu_sood/"className='me-2'><BsInstagram /></a>
                        <a href="https://www.linkedin.com/in/ritu-sood-05a4b7243/" className='me-2'><BsLinkedin /></a>

                    </div>
                    <div className="col-6">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact