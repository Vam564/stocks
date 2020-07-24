import React, { useContext } from 'react'
import { SMSContext } from '../ContextAPI/SMSContext'
import '../CSS/Favourites.css'
import AnimatedLeaves from './AnimatedLeaves'

const Favourites = () => {
    const {
       state:{
        favourites,
        stocks
       } 
    } = useContext(SMSContext)
    return (
        <div>
           
            {/* <pre>
                {JSON.stringify(favourites,null,4)}
            </pre> */}
            <div className=" pb-5 shadow-bottom">
                <div className="head py-2 mb-3 ">
                    <h2 className="font-weight-bold text-center">Favourite Stocks</h2>
                </div>
<div className=" ">
                {favourites.length==0 ? (
                    <>
                        <div className=" d-flex justify-content-center ">
                            <img src="https://kite.zerodha.com/static/images/illustrations/gtt.svg" /> 
                        </div>
                        <div>

                            <h2 className="font-weight-bold text-center">Not yet added</h2>
                            <p className="text-muted text-center">Please go to stocks page and select your favourites.</p>
                        </div>
                    </>
                ) : (
                    <div className="row d-flex justify-content-center">
                        {favourites.map(stock => {
                            return (
                                <div className="box col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                <div className="glass">
        
                                </div>
                                <div className="content">
                            <h4 className="font-weight-bold">{stock.symbol}</h4>
                            <p> <i class="fas fa-rupee-sign"></i> <span>{stock.open}</span></p>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                )}
                   
                   
                </div>

            </div>
        </div>
    )
}

export default Favourites
