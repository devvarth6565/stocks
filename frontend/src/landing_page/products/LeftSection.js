import React from 'react';


function LeftSection({imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL}/>
                </div>
                <div className='col-6 p-3 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        
                </div>

            </div>
        </div>
    );
}

export default LeftSection;