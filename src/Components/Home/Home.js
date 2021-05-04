import React from 'react';
import './Home.css'
import myImg from "../../image/anikzayed2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons'
import Slide from 'react-reveal/Reveal';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <section className="container-fluid hero pt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 selfImage p-md-5 p-3 text-center">
                    <img src={myImg} alt="" className="img-fluid w-75" />
                </div>
                <div className="col-md-7 short-des p-md-5 p-2">
                    <Slide bottom>
                        <h1 className="myName fw-bolder">I'M ZAYED IBN IBRAHIM.</h1>
                        <h3 className="text-white mt-2 title">
                            I'm a  <Typewriter
                                options={{
                                    strings: ['React Developer', 'Front-End Developer', 'Back-End Developer', 'Problem Fixing'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            
                        </h3>
                        <p>
                            I'm a creative React developer with extensive knowledge of both front-end and back-end functionalities. Excellent focus, communication, and ability to learn rapidly. Excels working in a team environment. Strong critical analysis and problem solving. I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                        <a className="resumeButton" href="https://drive.google.com/uc?export=download&id=1JKinWM2-0BOgHfZc3gLr4YBjBC07iBRg">
                            <span className="button-text">Download Resume</span>
                            <span className="button-icon"><FontAwesomeIcon icon={faFileDownload} /></span>
                        </a>
                        
                        <div className="social-link d-flex">
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/zayed-ibn-ibrahim-b51477189/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/zayedibnibrahim"><FontAwesomeIcon icon={faGithub} /></a>
                            <a rel="noreferrer" target="_blank" href="https://join.skype.com/invite/vjeiFuRXxnvK"><FontAwesomeIcon icon={faSkype} /></a>
                            <a rel="noreferrer" target="_blank" href="mailto:zayed.ibn@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Home;