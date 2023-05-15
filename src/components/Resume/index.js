import React from 'react';
import ResumeLink from "../../assets/Resume-JosiahStelzl.pdf";


function Resume() {
    return (
        <React.Fragment>
            <div className='container-fluid mx-auto bg-dark vh-height p-5'>
                <div className='row row-cols-1 row-cols-md-2 g-6'>
                    <div className='col mx-auto p-4'>
                        <div className="card border-info bg-dark p-3 align-items-center">
                            <h3 className='card-title text-center text-info mx'>Resume</h3>
                            <a className='link-info' href={ResumeLink} download>
                                <h5 className='text-info'>Download Full Resume</h5>
                            </a>

                            <h5 className="text-center text-info">Summary</h5>
                            <p className="text-center text-info">
                                Contact Josiah <br />
                                Phone: (980) 286-2752 | Email: josiahstelzl@gmail.com <br />
                                LinkedIn: https://www.linkedin.com/in/josiah-stelzl-3122b4241/ <br />
                                GitHub: https://github.com/Jstelzl <br />
                                Where: Indian Land, SC <br />
                                <br />
                                Certified Full Stack Web Developer with experience in customer services and on premise instruction. Self starter, team oriented, who is passionate about developing, testing, deploying, and maintaining apps using the latest technologies with an eye towards user experience (UX). Strengths in creativity, teamwork, and building projects from ideation to execution.
                                <br />
                                <br />
                                TECHNICAL SKILLS <br />
                                JavaScript, <br />
                                HTML, <br/>
                                CSS, <br/>
                                jQuery, <br/>
                                Responsive Design, <br/>
                                React, <br/>
                                BootStrap, <br/>
                                Tailwind, <br/>
                                APIs, <br/>
                                Node, <br/>
                                Express, <br/>
                                MySQL, <br/>
                                Sequelize, <br/>
                                MongoDB, <br/>
                                Mongoose, <br/>
                                REST, <br/>
                                GraphQL, <br/>
                                Git, <br/>
                                GitHub <br/>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Resume;