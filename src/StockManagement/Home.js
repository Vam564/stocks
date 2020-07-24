import React, { useContext } from 'react'
import '../CSS/Home.css';
import { FlipkartContext } from '../ContextAPI/FlipkartContext'
import { SMSContext } from '../ContextAPI/SMSContext'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Home = () => {

    const {
        state: {
            stocks,
            isAPILoaded
        },
        AddToCart,

    } = useContext(SMSContext)
    return (
        <div className="shadow-bottom pb-5">
           <Link to="/">
           <div>
            <div className="mb-5">
                <div className="img d-flex justify-content-center mb-4">
                    <img src="https://zerodha.com/static/images/landing.png" width="100%" height="320px" style={{maxWidth:'500px'}}/>
                </div>
                <div className="text-center">
                    <p className="pText">Invest in everything</p>
                    <p className="pText1">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-1 d-flex justify-content-center">
                    <img src="https://zerodha.com/static/images/largest-broker.svg" width="100%" height="238px" style={{maxWidth:'296px'}}/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-3 col-xs-1">
          <h2 className="p2Text">Largest stock broker in India</h2>
          <p className="p2Text1">
            2+ million Zerodha clients contribute to
            over 15% of all retail order volumes in India daily by trading and
            investing in:
          </p>
          <div class="row text">
            <div class="col-lg-6 col-md-6 col-sm-2">
              <ul class="list-items">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-2">
              <ul class="list-items">
                <li>Stocks &amp; IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <p class="press-strip">
            <a href="/media"><img class="img" src="https://zerodha.com/static/images/press-logos.png" width="100%" height="20px" style={{maxWidth:'361px'}}/></a>
          </p>
        </div>
            </div>
            </div>
           </Link>
            

        
        </div>
        
    )
}

export default Home
