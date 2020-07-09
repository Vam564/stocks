import React, { useContext } from 'react'
import '../CSS/Funds.css'
import { SMSContext } from '../ContextAPI/SMSContext'


const Funds = () => {
    const {
        state:{
            margin,
            totalAmount,
        },
        onAddFunds,
        onWithdrawFunds,
        handleInput
    }=useContext(SMSContext)
    return (
        <div className="shadow-bottom pb-5">
            <div className="">
                <h2 className="font-weight-bold text-center ">Equity Funds</h2>
            </div>
            <div className="d-flex justify-content-center bg-light container pt-2">
                <div className="col-md-6 py-2 ">
                    <div className="d-flex justify-content-center">
                        <div className="shadow-blue shadow  bg-white p-1">
                            <p className="text-center text">Margin Available</p>
                            <h3 className="text-big text-center"><i class="fas fa-rupee-sign mr-2" style={{ fontSize: '24px' }}></i>{totalAmount}</h3>
                        </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                        <button type="button" class="btn btn-success px-3" style={{ width: '180px', borderRadius: '5px' }} data-toggle="collapse" data-target="#addFunds"  ><i class="fas fa-plus mr-1" aria-hidden="true"></i>Add</button>
                        <button type="button" class="btn btn-info px-3" style={{ width: '180px', borderRadius: '5px' }} data-toggle="collapse" data-target="#withdraw"  ><i class="fas fa-undo mr-1" aria-hidden="true"></i>Withdraw</button>

                    </div>
                    <div class="collapse bg-white p-2" id="addFunds">
                        <div class="mt-3 bal">
                            <span><b>Balance : </b><span className=""><i class="fas fa-rupee-sign mr-1" style={{ fontSize: '14px' }}></i>{totalAmount}</span></span>
                        </div>
                        <div>
                            <div class="md-form mb-5">
                                <i class="fas fa-rupee-sign prefix "></i>
                                <input type="number" id="amount" name="amount" class="form-control validate" onChange={handleInput} />
                                <label data-error="wrong" data-success="right" for="amount">Amount</label>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button class="btn btn-info" style={{ borderRadius: '30px' }} data-dismiss="modal" onClick={onAddFunds}>Submit <i class="fas fa-sign-in ml-1"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="collapse bg-white p-2" id="withdraw">
                        <div class="mt-3">
                        <div class="mt-3 bal">
    <span><b>Balance : </b><span className=""><i class="fas fa-rupee-sign mr-1" style={{ fontSize: '14px' }}></i>{totalAmount}</span></span>
                        </div>
                        <div>
                            <div class="md-form mb-5">
                                <i class="fas fa-rupee-sign prefix "></i>
                                <input type="number" id="amount" name="amount" class="form-control validate" onChange={handleInput} />
                                <label data-error="wrong" data-success="right" for="amount">Amount</label>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button class="btn btn-info" style={{ borderRadius: '30px' }} data-dismiss="modal" onClick={onWithdrawFunds}>Submit <i class="fas fa-sign-in ml-1"></i></button>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Funds
