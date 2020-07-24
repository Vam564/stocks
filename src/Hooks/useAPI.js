// import React,{useReducer,useEffect} from 'react'
// import reducer from '../reducer/reducer'
// const useAPI=() =>{
//     const INITIAL_STATE = {
//         stocks:[],
//         isAPILoaded:false,
//         searchValue:''

//     }
// const [state,dispatch]=useReducer(reducer,INITIAL_STATE)
// const {stocks,searchValue}=state



// useEffect(() => {

//     // fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SBI&interval=5min&apikey=397G5RXW3Y9NCP2Z.').then(response => response.json()).then(json => {
//     //     let {  } = json
//     //     setTimeout(() => {
//     //         dispatch({ type: 'API_SUCCESS', context: { stocks:[json], isAPILoaded: true } })
//     //     }, 2000)
//     // })

//     fetch('https://jsonblob.com/api/c273f6bd-b16e-11ea-93a7-e30757aec034').then(response => response.json()).then(json => {

//         setTimeout(() => {
//             dispatch({ type: 'API_SUCCESS', context: { stocks:[...json], isAPILoaded: true } })
//         }, 2000)
//     })
//     // $('#sidebarCollapse').on('click', function () {
//     //     $('#sidebar').toggleClass('active');
//     // });

// }, []);

//     return {
//         state
//     }
// }

// export default useAPI


import React, { useEffect, useReducer } from 'react'
import reducer from '../reducer/reducer'
//import firebase from '../firebase/config'
import firebase from "firebase/app";
import 'firebase/database';

const useAPI = () => {
    const INITIAL_STATE = {
        stocks: [],
        filter: [],
        stocksBuyed: [],
        stocksSelled: [],
        value: 0,
        count: 'Stocks',
        float: 5,
        check: 'BUY',
        statusBuy: 'BUY',
        statusSell: 'SELL',
        margin: null,
        fav: false,
        favourites: [],
        totalAmount: 0.00,
        stockData: {
            quantity: 0,
            price: null,
            order: '',
            variety: '',
            search: '',
            amount: 0
        },
        stockDataSell: {
            quantity: 0,
            price: null,
            order: '',
            variety: '',
            search: '',
            amount: 0
        },
        userDetails: '',
        currentStock: '',
        currentUser: '',
        currentIndex: null,
        indexArray: []
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const { stocks, searchValue, count, stockData, totalAmount, currentStock, stockDataSell, stocksBuyed, check } = state

    useEffect(() => {
        fetch('https://jsonblob.com/api/c273f6bd-b16e-11ea-93a7-e30757aec034').then(response => response.json()).then(json => {
            let { carousel, mobiles, filterDropDown } = json
            setTimeout(() => {
                dispatch({ type: 'API_SUCCESS', context: { stocks: [...json], isAPILoaded: true } })
                console.log(stocks)
            }, 2000)
            //firebase.stockInfo(stocks);
            // let data=firebase.database().ref('stocks').orderByKey().limitToLast(100);
            // firebase.database().ref('stocks').push(stocks);




        })
        // setTimeout(() => {
        //     dispatch({ type: 'UPDATE_AFTER' })
        // }, 10000)

        // const interval = setInterval(() => {
        //     dispatch({type:'UPDATE_REPEATEDLY'})
        //     console.log("hii")
        //     console.log()
        //   }, 5000);
        //   return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            firebase.database().ref('Login User/' + user.displayName).set({
                stocksBuyed: stocksBuyed,

            });
        });


    }, [stocksBuyed]);

    //https://i.pinimg.com/originals/b8/3e/c9/b83ec9d8ac7a6f2dfaa93fa4f150e3b6.gif
    // useEffect(() => {
    //     firebase.getUserState().then(user => {
    //         if(user){
    //             dispatch({type:'USER_DETAILS',context:{user}})
    //             //setUserState(user);
    //             //setUserEmail(user.email);
    //         }
    //     });
    // });


    const handleInput = ({ target }) => {

        dispatch({ type: 'HANDLE_INPUT', context: { target } })
    }

    const handleInputSell = ({ target }) => {

        dispatch({ type: 'HANDLE_INPUT_SELL', context: { target } })
    }

    const updateData = () => {
        dispatch({ type: 'UPDATE_DATA' })
    }

    // Buy Method
    const goToPositionsBuy = (index) => {

        const { price, quantity } = stockData
        //console.log(price);
        var isAvailable = Number(price) * quantity;
        console.log(isAvailable)
        if (totalAmount!=0)
        {
            if (totalAmount >= isAvailable) {
                dispatch({ type: 'GO_TO_POSITIONS_BUY', context: { index, isAvailable } })
            }
            else {
                alert("Insufficient funds, Please add funds ")
        }
        }
        else
        {
            alert("Insufficient funds, Please add funds ")
        }
        
        // firebase.stockInfo(count,stocksBuyed);

    }

    // SELL Method
    const goToPositionsSell = (index) => {
        const { price, quantity } = stockDataSell
        console.log(index)
        var isAvailable = price * quantity;
        dispatch({ type: 'GO_TO_POSITIONS_SELL', context: { index, isAvailable } })
    }

    //Search filter
    const startSearch = () => {
        dispatch({ type: 'START_SEARCH' })
    }

    // Adding Funds
    const onAddFunds = () => {
        dispatch({ type: 'ADD_FUNDS' })
    }

    //Releasing Funds
    const onWithdrawFunds = () => {
        dispatch({ type: 'WITHDRAW_FUNDS' })
    }

    const collectIndex = (index) => {
        dispatch({ type: 'COLLECT_INDEX', context: { index } })
    }

    //Add to favourites
    const addToFav = (index) => {
        dispatch({ type: 'ADD_TO_FAV', context: { index } })
    }

    return {
        state,
        handleInput,
        updateData,
        goToPositionsBuy,
        goToPositionsSell,
        startSearch,
        onAddFunds,
        onWithdrawFunds,
        collectIndex,
        handleInputSell,
        addToFav
    }
}

export default useAPI
