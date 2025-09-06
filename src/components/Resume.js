import React from 'react';

import Chart from './Chart';
import Legend from './Legend';

function Resume({ resumeData }) {
    return (
      <section id="resume">
        
         <div className="row education">
            <div className="three columns header-col"> 
            </div>            
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      <div className="row work"> 
            <div className="three columns header-col"> 
            </div>
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
   </div> 


<div className="container">

                        <div className="three columns header-col"> 
            </div>
                                
            <ul className="nav nav-tabs">
            
              <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
              <li><a data-toggle="tab" href="#github">GitHub</a></li>
          </ul>
          

      <div className="tab-content">
          <div id="skills" className="tab-pane fade in active">

         <div className="row skill">
            <div className="three columns header-col"> 

            </div>
            
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">
               <br></br> 
               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

          </div>

          <div id="github" className="tab-pane fade">
            <div className="three columns header-col"> 
            </div>
              <h1><span>My GitHub activity</span></h1>
               <br></br>
                   
                <Legend/>
                <Chart/>
          </div>
      </div>
        </div>

      </section>
    );
}

export default Resume;