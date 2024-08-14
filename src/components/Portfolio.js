import React from 'react';

const Portfolio = ({ resumeData }) => {
  // Function to handle the redirection
  const handleContent = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {resumeData.portfolio && resumeData.portfolio.map((item, index) => (
              <div className="columns portfolio-item" key={index}>
                <div className="item-wrap">
                  <button onClick={() => handleContent(item.git)} style={{ border: 'none', background: 'none', padding: 0 }}>
                    <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
