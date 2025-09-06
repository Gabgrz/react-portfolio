import React from 'react';

function Testimonials({ resumeData }) {
    return (
      <section id="testimonials" style={{
        background: 'linear-gradient(rgba(31, 31, 31, 0.8), rgba(31, 31, 31, 0.8)), url(../images/testimonials-bg.jpg) no-repeat center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        padding: '80px 20px',
        position: 'relative',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{marginBottom: '60px'}}>
            <h1 style={{
              fontSize: '3rem',
              color: '#fff',
              fontWeight: 'bold',
              marginBottom: '10px',
              textShadow: '0px 1px 3px rgba(0, 0, 0, 0.8)'
            }}>
              <span style={{borderBottom: '3px solid #11ABB0', paddingBottom: '6px'}}>Testimonials</span>
            </h1>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '800px'
          }}>
            {
              resumeData.testimonials && resumeData.testimonials.map((item, index) => {
                return(
                  <div key={index} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '40px',
                    borderRadius: '15px',
                    marginBottom: '30px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    width: '100%',
                    maxWidth: '600px'
                  }}>
                    <blockquote style={{
                      margin: '0',
                      padding: '0',
                      border: 'none',
                      position: 'relative'
                    }}>
                      <p style={{
                        fontFamily: "'librebaskerville-italic', serif",
                        fontSize: '1.4rem',
                        lineHeight: '1.8',
                        color: '#fff',
                        marginBottom: '20px',
                        fontStyle: 'italic',
                        textShadow: '0px 1px 3px rgba(0, 0, 0, 0.8)'
                      }}>
                        "{item.description}"
                      </p>
                      <cite style={{
                        display: 'block',
                        fontSize: '1.1rem',
                        fontStyle: 'normal',
                        color: '#11ABB0',
                        fontWeight: 'bold',
                        marginTop: '15px'
                      }}>
                        — {item.name}
                      </cite>
                    </blockquote>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
        );
}

export default Testimonials;