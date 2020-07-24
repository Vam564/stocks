import React, { useContext } from 'react'
import { SMSContext } from '../ContextAPI/SMSContext'
import { BrowserRouter as Router, Link, Route, Redirect, useHistory } from 'react-router-dom'


const Positions = () => {
    const {
        state: {
            statusSell,
            statusBuy,
            status,
            stocksBuyed,
            stocksSelled,
            stockData,
            stockDataSell
        }
    } = useContext(SMSContext)
    return (
        <div className="mb-5 shadow-bottom pb-5">
            <div className=" p-3">
                <h2 className="text-center font-weight-bold">Trade Book</h2>
            </div>
            {stocksBuyed.length==0 ? (
                <div className="">
                    <div className="d-flex justify-content-center  py-2 my-2">
                        <img className="shadow" src="https://kite.zerodha.com/static/images/illustrations/gtt.svg" />
                    </div>
                    <h3 className="font-weight-bold text-center">No Orders</h3>
                    <h5 className="text-muted text-center">Place an order from your watchlist</h5>
                    <div className="d-flex justify-content-center ">
                        <Link to="/stocks">
                            <button className="btn bg-primary text-white" >Click here to buy Stocks</button>
                        </Link>
                    </div>
                </div>
            ) : (<>
                <div className="d-flex justify-content-center bg-light">
                    <div className="col-6 my-2">
                        <div className="py-2 bg-success text-white text-center ">
                            <h5 className="font-weight-bold">BUY Orders</h5>
                        </div>
                        <ul class="list-group">
                            {stocksBuyed.map((item) => {
                                return (
                                    <li class="list-group-item  text-light">
                                        <div className="row ">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1 ">
                                                <p> <span className=" text-success text-center mr-2 px-2" style={{ backgroundColor: '#B7EFB1', fontWeight: '500px' }} width="30px" height="20px"><b>BUY</b></span><span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> {stockData.quantity} / {stockData.quantity} </span></p>
                                                <p className="font-weight-bold text-dark">{item.symbol}</p>
                                                <p className="text-muted">NSE</p>

                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1  ">
                                                <p className="text-success text-right">COMPLETED</p>
                                                <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">{item.open}</span></p>
                                                <p className="text-right"><span className="text-muted mr-2 ">{stockData.order}</span><span className="text-muted mr-2">{stockData.variety}</span></p>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })}
                            {/* <li class="list-group-item  text-light">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <p>{2 == 2 ? (<div className=" text-success text-center" style={{ backgroundColor: '#B7EFB1', fontWeight: '500px' }} width="30px" height="20px"><b>BUY</b></div>) : (<div className=" text-danger text-center" style={{ backgroundColor: '#E4A8A8', fontWeight: '500px' }} width="30px" height="20px"><b>SELL</b></div>)}<span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10 / 10</span></p>
                                    <p className="font-weight-bold text-dark">SBI</p>
                                    <p className="text-muted">NSE</p>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3 ">
                                    <p className="text-success text-right">COMPLETED</p>
                                    <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">192.30</span></p>
                                    <p className="text-right"><span className="text-muted mr-2 ">CNC</span><span className="text-muted mr-2">MARKET</span></p>
                                </div>

                            </div>
                        </li> */}

                        </ul>
                    </div>
                    <div className="col-6 my-2">
                        <div className="py-2 bg-danger text-white text-center ">
                            <h5 className="font-weight-bold">SELL Orders</h5>
                        </div>
                        <ul class="list-group">
                            {stocksSelled.map((item) => {
                                return (
                                    <li class="list-group-item  text-light">
                                        <div className="row ">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1 ">
                                                <p><span className=" text-danger text-center  mr-2 px-2" style={{ backgroundColor: '#E4A8A8', fontWeight: '500px' }} width="30px" height="20px"><b>SELL</b></span><span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> {stockDataSell.quantity} / {stockDataSell.quantity} </span></p>
                                                <p className="font-weight-bold text-dark">{item.symbol}</p>
                                                <p className="text-muted">NSE</p>

                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1  ">
                                                <p className="text-success text-right">COMPLETED</p>
                                                <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">{item.open}</span></p>
                                                <p className="text-right"><span className="text-muted mr-2 ">{stockDataSell.order}</span><span className="text-muted mr-2">{stockDataSell.variety}</span></p>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })}
                            <li class="list-group-item  text-light">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1 ">
                                        <p>{2 == 3 ? (<div className=" text-success text-center" style={{ backgroundColor: '#B7EFB1', fontWeight: '500px' }} width="30px" height="20px"><b>BUY</b></div>) : (<div className=" text-danger text-center" style={{ backgroundColor: '#E4A8A8', fontWeight: '500px' }} width="30px" height="20px"><b>SELL</b></div>)}<span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10 / 10</span></p>
                                        <p className="font-weight-bold text-dark">SBI</p>
                                        <p className="text-muted">NSE</p>

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-1 ">
                                        <p className="text-success text-right">COMPLETED</p>
                                        <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">192.30</span></p>
                                        <p className="text-right"><span className="text-muted mr-2 ">CNC</span><span className="text-muted mr-2">MARKET</span></p>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>)}

        </div>
    )
}

export default Positions
