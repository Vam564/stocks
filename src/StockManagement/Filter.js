import React,{useContext} from 'react'
import { SMSContext } from '../ContextAPI/SMSContext'
import '../CSS/Filter.css'
const  Filter=()=> {
    const {
        state:{
            filter,
            stocks,
            count,
            float,
            value,
            stockData,
            stocksBuyed
        },
        handleInput,
        updateData,
        goToPositionsBuy,
        goToPositionsSell
    }=useContext(SMSContext)
    return (
        <div className="stock shadow-bottom pb-5">

        <div>
            {stockData.search}
            {/* {count}<br></br>
            {Math.random() + float}<br></br>
            {value}
            <pre>
                {JSON.stringify(stocksBuyed, null, 4)}
            </pre> */}
            <div className="bg-light">
                <h2 className="text-center font-weight-bold py-3 mb-n1">Stock Market Watchlist</h2>
            </div>
            <ul class="list-group">
                <li class="list-group-item dis bg-dark text-light">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <p className="head">COMPANY NAME</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="text-light head">	<i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i></span>&nbsp;
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="mr-2 head">P/L %</span><span className="text-danger"></span>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className=" head">SHARE VALUE</span>
                        </div>
                    </div>
                </li>
                {filter.map((item, index) => {
                    return (
                        <li class="list-group-item dis ">
                            <div className="row ">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                            <p className="">{item.symbol}</p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                            <button type="button" class="   btn btn-sm color btn-rounded waves-effect button" data-toggle="modal" data-target="#buy">BUY</button>
                                            <button type="button" class="float-right btn-danger  btn btn-sm btn-rounded waves-effect button" data-toggle="modal" data-target="#sell">SELL</button>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    <span className="text-muted">	<i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10</span>&nbsp;
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    {item.low <= item.open >= item.low + 10 ? (
                                        <span>
                                            <span className="mr-2">+{(((item.high - item.low) / item.high) * 100).toFixed(2)}%</span><span className="text-danger"><i class='fas fa-chevron-down' style={{ fontSize: '18px' }}></i></span>
                                        </span>
                                    ) : (
                                            <span>
                                                <span className="mr-2">+{(((item.high - item.low) / item.high) * 100).toFixed(2)}%</span><span className="text-success"><i class='fas fa-chevron-up' style={{ fontSize: '18px' }}></i></span>
                                            </span>
                                        )}
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                    {item.low <= item.open >= item.low + 10 ? (<span className="text-danger">{value + item.open}</span>) : (<span className="text-success">{Number(item.open)}</span>)}

                                </div>
                            </div>
                            <div>
                                {/* Modal for buy */}
                                <div class="modal fade right" id="buy" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog cascading-modal modal-info" role="document">

                                        <div class="modal-content">

                                            <div class="modal-header info-color text-center">
                                                <h4 class="modal-title text-white w-100 font-weight-bold py-2">BUY</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body mb-1">
                                                <div class="md-form form-sm ">
                                                    <i class="fas fa-suitcase prefix info-text"></i>
                                                    <input type="number" id="quantity" class="form-control" onChange={handleInput} />
                                                    <label for="materialRegisterFormFirstName">Quantity</label>
                                                </div>
                                                <div class="md-form form-sm">
                                                    <i class="fas fa-rupee-sign prefix info-text"></i>
                                                    <input type="number" id="price" value={item.open}  class="form-control" onChange={handleInput} />
                                                    <label for="price">Price</label>
                                                </div>
                                                <label for="order"className="form-sm">Order</label>
                                                <select class="custom-select custom-select-sm mb-2" id="order" onChange={handleInput}>
                                                    <option selected>Select</option>
                                                    <option value="MARKET">MARKET</option>
                                                    <option value="LIMIT">LIMIT</option>
                                                    <option value="SL">SL</option>
                                                    <option value="SLM">SLM</option>
                                                </select>
                                                <label className="form-sm" for="variety ">Variety</label>
                                                <select class="custom-select custom-select-sm mb-2" id="variety" onChange={handleInput}>
                                                    <option selected>Select</option>
                                                    <option value="RGLR">RGLR</option>
                                                    <option value="BO">BO</option>
                                                    <option value="CO">CO</option>
                                                    <option value="AMO">AMO</option>
                                                </select>
                                                <div class="text-center mt-2">
                                                    <button class="btn btn-info" style={{ borderRadius: '30px' }} onClick={() => goToPositionsBuy(index)}  data-dismiss="modal" >Done <i class="fas fa-sign-in ml-1"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/.Content--> */}
                                    </div>
                                </div>
                                {/* Modal for sell */}

                                <div class="modal fade left" id="sell" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog cascading-modal modal-danger" role="document">

                                        <div class="modal-content">

                                            <div class="modal-header danger-color text-center">
                                                <h4 class="modal-title text-white w-100 font-weight-bold py-2">SELL</h4>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true" class="text-white">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body mb-1">
                                                <div class="md-form form-sm ">
                                                    <i class="fas fa-suitcase prefix danger-text"></i>
                                                    <input type="number" id="quantity" class="form-control" onChange={handleInput}/>
                                                    <label for="materialRegisterFormFirstName">Quantity</label>
                                                </div>
                                                <div class="md-form form-sm">
                                                    <i class="fas fa-rupee-sign prefix danger-text"></i>
                                                    <input type="number" id="price" value={item.open} class="form-control"onChange={handleInput} />
                                                    <label for="materialRegisterFormLastName">Price</label>
                                                </div>
                                                <label for="order"className="form-sm">Order</label>
                                                <select class="custom-select custom-select-sm mb-2" id="order" onChange={handleInput}>
                                                    <option selected>Select</option>
                                                    <option value="MARKET">MARKET</option>
                                                    <option value="LIMIT">LIMIT</option>
                                                    <option value="SL">SL</option>
                                                    <option value="SLM">SLM</option>
                                                </select>
                                                <label className="form-sm" for="variety ">Variety</label>
                                                <select class="custom-select custom-select-sm mb-2" id="variety" onChange={handleInput}>
                                                    <option selected>Select</option>
                                                    <option value="RGLR">RGLR</option>
                                                    <option value="BO">BO</option>
                                                    <option value="CO">CO</option>
                                                    <option value="AMO">AMO</option>
                                                </select>
                                                <div class="text-center mt-2">
                                                    <button class="btn btn-danger" style={{ borderRadius: '30px' }} onClick={() => goToPositionsSell(index)}  data-dismiss="modal" >Done <i class="fas fa-sign-in ml-1"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--/.Content--> */}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
                <li class="list-group-item dis ">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <p className="">SBI</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <button type="button" class="   btn btn-sm color btn-rounded waves-effect button" >BUY</button>
                                    <button type="button" class="float-right btn-danger  btn btn-sm btn-rounded waves-effect button" >SELL</button>

                                </div>

                            </div>

                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="text-muted">	<i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10</span>&nbsp;
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="mr-2">+1.06%</span><span className="text-danger"><i class='fas fa-chevron-down' style={{ fontSize: '18px' }}></i></span>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="text-danger">173.85</span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item dis">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <p className="">SBI</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-3 col-xs-3">
                                    <button type="button" class="   btn btn-sm color btn-rounded waves-effect button" data-toggle="modal" data-target="#buy" >BUY</button>
                                    <button type="button" class="float-right btn-danger  btn btn-sm btn-rounded waves-effect button" data-toggle="modal" data-target="#sell" >SELL</button>

                                </div>

                            </div>

                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="text-muted">	<i class='fas fa-suitcase' style={{ fontSize: '16px', color: '#666666' }}></i> 10</span>&nbsp;
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="mr-2">+1.06%</span><span className="text-success"><i class='fas fa-chevron-up' style={{ fontSize: '18px' }}></i></span>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                            <span className="text-success">173.85</span>
                        </div>
                    </div>
                </li>

            </ul>
            <div>

            </div>
            <pre>
                {JSON.stringify(stocks, null, 4)}
            </pre>

        </div>
    </div>
    )
}

export default Filter
