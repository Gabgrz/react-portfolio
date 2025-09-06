import React from 'react';

function ContactUs({ resumeData }) {
    return (
      <section id="contact" style={{padding: '80px 20px', backgroundColor: '#191919', color: '#636363'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <div style={{marginBottom: '50px'}}>
              <h1 style={{fontSize: '3rem', color: '#EBEEEE', fontWeight: 'bold', marginBottom: '20px'}}>Contact Me</h1>
              <p style={{fontSize: '1.3rem', color: '#636363', lineHeight: '1.6', margin: '0'}}>
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
            <div style={{width: '100%', maxWidth: '600px'}}>
              <div style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <h4 style={{fontSize: '1.8rem', color: '#EBEEEE', marginBottom: '20px', fontWeight: 'bold'}}>LinkedIn</h4>
                <p style={{fontSize: '1.2rem', color: '#11ABB0', margin: '0', wordBreak: 'break-all'}}>
                  {resumeData.linkedinId}
                </p>
              </div>
            </div>
          </div>
        </section>
        );
}

export default ContactUs;