import React from 'react';

function Portfolio({ resumeData }) {
    return (
      <section id="portfolio" style={{padding: '80px 20px', backgroundColor: '#ebeeee'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{width: '100%'}}>
          <h1 style={{fontSize: '3rem', color: '#313131', fontWeight: 'bold', marginBottom: '50px'}}>Check Out Some of My Works</h1>
          <div id="portfolio-wrapper" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto'}}>
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                <div key={index} className="portfolio-item" style={{marginBottom: '0'}}>
                  <div className="item-wrap" style={{backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
                    <a href="#modal-01" style={{display: 'block', textDecoration: 'none'}}>
                      <img src={`${item.imgurl}`} className="item-img" alt={item.name} style={{width: '100%', height: '250px', objectFit: 'cover'}}/>
                      <div className="overlay" style={{position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', backgroundColor: 'rgba(17, 171, 176, 0.9)', opacity: '0', transition: 'opacity 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="portfolio-item-meta" style={{textAlign: 'center', color: '#fff', padding: '20px'}}>
                          <h5 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: '#fff'}}>{item.name}</h5>
                          <p style={{fontSize: '1rem', margin: '0', color: '#fff'}}>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
}

export default Portfolio;