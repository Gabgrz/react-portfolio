import React from 'react';

import Chart from './Chart';
import Legend from './Legend';

function Resume({ resumeData }) {
    return (
      <section id="resume">
        
         <div className="row education" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{marginBottom: '50px'}}>
               <h1 style={{fontSize: '3rem', color: '#313131', fontWeight: 'bold', marginBottom: '10px'}}><span style={{borderBottom: '3px solid #11ABB0', paddingBottom: '6px'}}>Education</span></h1>
            </div>

            <div style={{width: '100%'}}>
              {
                resumeData.education && resumeData.education.map((item, index)=>{
                  return(
                    <div key={index} style={{marginBottom: '40px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef'}}>
                       <div>
                          <h3 style={{fontSize: '1.8rem', color: '#313131', marginBottom: '15px', fontWeight: 'bold'}}>{item.UniversityName}</h3>
                          <p style={{fontSize: '1.2rem', color: '#6E7881', marginBottom: '15px', fontWeight: '500'}}>
                          {item.specialization}
                          <span style={{margin: '0 10px', color: '#11ABB0'}}>&bull;</span> 
                          <em style={{color: '#11ABB0', fontStyle: 'normal', fontWeight: '600'}}>{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p style={{fontSize: '1.1rem', color: '#6E7881', lineHeight: '1.6', margin: '0'}}>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      <div className="row work" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '0 20px'}}> 
            <div style={{marginBottom: '50px'}}>
               <h1 style={{fontSize: '3rem', color: '#313131', fontWeight: 'bold', marginBottom: '10px'}}><span style={{borderBottom: '3px solid #11ABB0', paddingBottom: '6px'}}>Work</span></h1>
            </div>

            <div style={{width: '100%'}}>
              {
                resumeData.work && resumeData.work.map((item, index) => {
                  return(
                    <div key={index} style={{marginBottom: '40px', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '10px', border: '1px solid #e9ecef'}}>
                       <div>
                          <h3 style={{fontSize: '1.8rem', color: '#313131', marginBottom: '15px', fontWeight: 'bold'}}>{item.CompanyName}</h3>
                          <p style={{fontSize: '1.2rem', color: '#6E7881', marginBottom: '15px', fontWeight: '500'}}>
                          {item.specialization}
                          <span style={{margin: '0 10px', color: '#11ABB0'}}>&bull;</span> 
                          <em style={{color: '#11ABB0', fontStyle: 'normal', fontWeight: '600'}}>{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p style={{fontSize: '1.1rem', color: '#6E7881', lineHeight: '1.6', margin: '0'}}>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
   </div> 


<div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '1000px', margin: '0 auto', padding: '0 20px'}}>

            <ul className="nav nav-tabs" style={{display: 'flex', justifyContent: 'center', marginBottom: '40px', listStyle: 'none', padding: '0'}}>
              <li className="active" style={{margin: '0 10px'}}><a data-toggle="tab" href="#skills" style={{padding: '10px 20px', backgroundColor: '#11ABB0', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold'}}>Skills</a></li>
              <li style={{margin: '0 10px'}}><a data-toggle="tab" href="#github" style={{padding: '10px 20px', backgroundColor: '#e9ecef', color: '#313131', textDecoration: 'none', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold'}}>GitHub</a></li>
          </ul>
          

      <div className="tab-content" style={{width: '100%'}}>
          <div id="skills" className="tab-pane fade in active" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>

         <div className="row skill" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: '800px', margin: '0 auto'}}>
            <div style={{marginBottom: '50px'}}>
               <h1 style={{fontSize: '3rem', color: '#313131', fontWeight: 'bold', marginBottom: '10px'}}><span style={{borderBottom: '3px solid #11ABB0', paddingBottom: '6px'}}>Skills</span></h1>
            </div>

            <div style={{width: '100%'}}>
               <p style={{fontSize: '1.2rem', color: '#6E7881', marginBottom: '40px', lineHeight: '1.6'}}>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars" style={{width: '100%', maxWidth: '600px', margin: '0 auto'}}>

   				   <ul className="skills" style={{listStyle: 'none', padding: '0', margin: '0'}}>
                {
                  resumeData.skills && resumeData.skills.map((item, index) => {
                    return(
                      <li key={index} style={{marginBottom: '30px', position: 'relative', backgroundColor: '#e9ecef', height: '40px', borderRadius: '20px', overflow: 'hidden'}}>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`} style={{position: 'absolute', left: '0', top: '0', height: '100%', backgroundColor: '#11ABB0', borderRadius: '20px', transition: 'width 2s ease-in-out'}}>
                      </span><em style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#313131', fontWeight: 'bold', fontSize: '1rem', zIndex: '1'}}>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

          </div>

          <div id="github" className="tab-pane fade" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div style={{marginBottom: '50px'}}>
              <h1 style={{fontSize: '3rem', color: '#313131', fontWeight: 'bold', marginBottom: '10px'}}><span style={{borderBottom: '3px solid #11ABB0', paddingBottom: '6px'}}>My GitHub Activity</span></h1>
            </div>
            <div style={{width: '100%', maxWidth: '800px'}}>
                <Legend/>
                <Chart/>
            </div>
          </div>
      </div>
        </div>

      </section>
    );
}

export default Resume;