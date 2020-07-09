import React, { useContext } from 'react'
import { SMSContext } from '../ContextAPI/SMSContext'

const Positions = () => {
    const {
        state: {
            status,
            stocksBuyed,
            stockData
        }
    } = useContext(SMSContext)
    return (
        <div className="mb-5 shadow-bottom pb-5">
            <div className=" p-3">
                <h2 className="text-center font-weight-bold">Trade Book</h2>
            </div>
            <div className="d-flex justify-content-center bg-light">
                <div className="col-6 my-2">
                    <ul class="list-group">
                        {stocksBuyed.map((item) => {
                            return (
                                <li class="list-group-item  text-light">
                                    <div className="row ">
                                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                            <p>{status == 'BUY' ? (<span className=" text-success text-center mr-2 px-2" style={{ backgroundColor: '#B7EFB1', fontWeight: '500px' }} width="30px" height="20px"><b>BUY</b></span>) : (<span className=" text-danger text-center  mr-2 px-2" style={{ backgroundColor: '#E4A8A8', fontWeight: '500px' }} width="30px" height="20px"><b>SELL</b></span>)}<span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> {stockData.quantity} / {stockData.quantity} </span></p>
                            <p className="font-weight-bold text-dark">{item.symbol}</p>
                                            <p className="text-muted">NSE</p>

                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3 ">
                                            <p className="text-success text-right">COMPLETED</p>
                            <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">{item.open}</span></p>
                            <p className="text-right"><span className="text-muted mr-2 ">{stockData.order}</span><span className="text-muted mr-2">{stockData.variety}</span></p>
                                        </div>

                                    </div>
                                </li>
                            )
                        })}
                        <li class="list-group-item  text-light">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <p>{status == 'BUY' ? (<div className=" text-success text-center" style={{ backgroundColor: '#B7EFB1', fontWeight: '500px' }} width="30px" height="20px"><b>BUY</b></div>) : (<div className=" text-danger text-center" style={{ backgroundColor: '#E4A8A8', fontWeight: '500px' }} width="30px" height="20px"><b>SELL</b></div>)}<span className="text-muted"><i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10 / 10</span></p>
                                    <p className="font-weight-bold text-dark">SBI</p>
                                    <p className="text-muted">NSE</p>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3 ">
                                    <p className="text-success text-right">COMPLETED</p>
                                    <p className="font-weight-bold text-dark text-right"><b>Avg : </b><span className="">192.30</span></p>
                                    <p className="text-right"><span className="text-muted mr-2 ">CNC</span><span className="text-muted mr-2">MARKET</span></p>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Positions
