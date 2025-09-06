import React from 'react';

function Footer({ resumeData }) {
    return (
      <footer style={{padding: '40px 20px', textAlign: 'center', backgroundColor: '#2B2B2B', color: '#303030'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{width: '100%', marginBottom: '30px'}}>
          <ul className="social-links" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item, index)=>{
                return(
                  <li key={index} style={{margin: '0'}}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '50px',
                      height: '50px',
                      backgroundColor: '#11ABB0',
                      color: '#fff',
                      borderRadius: '50%',
                      textDecoration: 'none',
                      fontSize: '24px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#fff';
                      e.target.style.color = '#11ABB0';
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#11ABB0';
                      e.target.style.color = '#fff';
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
                    }}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div id="go-top" style={{marginTop: '20px'}}>
          <a className="smoothscroll" title="Back to Top" href="#home" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            backgroundColor: '#525252',
            color: '#fff',
            borderRadius: '50%',
            textDecoration: 'none',
            fontSize: '20px',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#11ABB0';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#525252';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
          }}>
          <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
    );
}

export default Footer;