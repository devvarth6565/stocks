import React from 'react';


function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col-4 mt-5 p-5'>
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a style={{textDecoration: "none"}} href=''>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>

                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-5 p-5'>
                    <div className='row text-center'>
                        <div className='col-6 p-2 border'>
                            <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>
                            Free equity delivery and
                            <br />
                            direct mutual funds
                            </p>
                        </div>
                        <div className='col-6 p-2 border'>
                        <h1><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>
                            Intraday and F&O
                            </p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
     );
}

export default Pricing;