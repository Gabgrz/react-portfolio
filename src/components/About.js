import React from 'react';

function About({ resumeData }) {
  return (
    <section id="about">
       <div className="row" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>

          <div style={{marginBottom: '30px'}}>
             <img className="profile-pic" src="images/profilepic.jpg" alt="Profile" style={{width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover'}} />
          </div>

          <div style={{width: '100%'}}>
             <h2 style={{marginBottom: '30px', fontSize: '3.5rem', color: '#fff', fontWeight: 'bold'}}>About Me</h2>
             <p style={{fontSize: '1.4rem', lineHeight: '1.8', color: '#7A7A7A', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px auto'}}>
             {
               resumeData.aboutme
             }
             </p>

             <div style={{marginTop: '60px'}}>
                <h2 style={{marginBottom: '30px', fontSize: '2.5rem', color: '#fff', fontWeight: 'bold'}}>Contact Details</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
     						<div style={{textAlign: 'center'}}>
     						   <span style={{display: 'block', fontWeight: 'bold', color: '#fff', fontSize: '1.4rem', marginBottom: '8px'}}>{resumeData.name}</span>
     						   <span style={{display: 'block', fontSize: '1.2rem', color: '#7A7A7A', marginBottom: '8px'}}>
                   {resumeData.address}
                  </span>
                  <span style={{display: 'block', fontSize: '1.2rem', color: '#7A7A7A'}}>{resumeData.website}</span>
     						</div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

export default About;