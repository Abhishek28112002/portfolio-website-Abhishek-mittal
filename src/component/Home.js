import React from 'react'
import './Home.css';
import file from './ABHISHEK_resume.pdf'
import { init } from "ityped";
import { useEffect, useRef } from "react";

import img2 from './Images/abhi12.jpg';

function Home() {
    
    const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 500,
      backSpeed:100,
      loop:true,
      strings: ["Student" ,"Web Developer", "Software Engineer"],
    });
  }, []);
  
    return (
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#aboutmyfamily" className="menu-btn">About My Family</a></li>
                        <li><a href="#teams" className="menu-btn">My Projects</a></li>
                        <li><a href="#skills" className="menu-btn">Skills</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
                </div>
            </nav>

            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Hello, my name is</div>
                        <div className="text-2">Abhishek Mittal</div>
                        <div className="text-3">And I'm a <span ref={textRef}></span></div>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title">About me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={img2} alt=""></img>
                        </div>
                        <div className="column right">
                            <div className="text">I'm abhishek Mittal  <span >Nice to meet you.</span></div>
                            <p> I am persuing BTech from iit dharwad in mechanical 
                                department.</p>
                                
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
                            <a href={file}>Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about" id="aboutmyfamily">
                <div className="max-width">
                    <h2 className="title">About My Family</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={img2} alt=""></img>
                        </div>
                        <div className="column right">
                            <div className="text">I'm abhishek Mittal</div>
                            <p>I live in Kundera,Sawai Madhopur,Rajasthan,India.My birth date is 28 novemeber 2002.
                                My father name is Mr DHARM CHAND MITTAL , he is a Shopkeeper.
                                My mother name is Mrs GUDDI MITTAL she is housewife.
                                We are four siblings: two brother and two sister,i am younger in all
                                .My younger brother name is Mr KAMAL KUMAR MITTAL,
                                sisters name are Miss NEELAM MITTAL and Miss MINAKSHI MITTAL.</p>
        
                        </div>
                        </div>
                </div>
            </section>
            <div>
            <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">My Projects</h2>
            <div class="carousel owl-carousel">
                
                <div class="card">
                    <div class="box">
                        <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <img src={img2} alt=""></img>
                        <div class="text">Someone name</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </div>
            <div>
                <section className="skills" id="skills">
                    <div className="max-width">
                        <h2 className="title">My skills</h2>
                        <div className="skills-content">
                            <div className="column left">
                                <div className="text">My creative skills & experiences.</div>
                                <p>
            Expert in front-end development including technologies like
            <span className="tech-tag">HTML5</span>,
            <span className="tech-tag">CSS3</span>,
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">React</span>,
            <span className="tech-tag">TypeScript</span>,
            <br></br>
            <br></br>
            Expert in Software development including technologies like
            <span className="tech-tag">C++</span>,
            <span className="tech-tag">Data Structure </span>,
            <span className="tech-tag">Algorithm</span>,
            <span className="tech-tag">Pyhton</span>,
            <span className="tech-tag">My Sql</span>,
            <span className="tech-tag">Git</span>, etc.
          </p>
          <p>I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
                                <a href="#">Read more</a>
                            </div>
                            <div className="column right">
                                <div className="bars">
                                    <div className="info">
                                        <span>HTML</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line html"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>CSS</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line css"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>JavaScript</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="line js"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>React</span>
                                        <span>70%</span>
                                    </div>
                                    <div className="line react"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>MySQL</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line mysql"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>C++</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line c"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Data structure</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="line ds"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Algorithm</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line algo"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Bootstrap</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line bootstrap"></div>
                                </div>
                                <div className="bars">
                                    <div className="info">
                                        <span>Python</span>
                                        <span>60%</span>
                                    </div>
                                    <div className="line python"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact me</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <div className="text">Get in Touch</div>
                            <p> I am interested in software development, web development opportunities or any other opportunity similer to my interest. However, if you have other request or
            question, don’t hesitate to contact me using below details
            either.</p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Abhishek Mittal
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">sawai madhopur,Rajasthan,India</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title"><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKkVJwqkLSgbrVWNlJbtlVdtCDxTrfPvGgtJGsGxZlWtJXxtxflpJpjbjMtQqGHwMKRqjWW">200030003@iitdh.ac.in</a></div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Contact No</div>
                                        <div className="sub-title">+91 9509495157</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">INSTAGRAM :  <a href="https://www.instagram.com/abhishekmittal2002/">Instagram Id</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" required></input>
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" required></input>
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" required></input>
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <span>Created By Abhishek mittal | <span className="far fa-copyright"></span> 2020 All rights reserved.</span>
            </footer>
        </div>
    )
}
export default Home