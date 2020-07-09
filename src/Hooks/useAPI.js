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


import React,{  useEffect,useReducer } from 'react'
import reducer from '../reducer/reducer'
import firebase from '../firebase/config'

const useAPI =()=> {
    const INITIAL_STATE = {
        stocks: [],
        filter:[],
        stocksBuyed:[],
        value:0,
        count:'change',
        float:5,
        check:'BUY',
        status:'BUY',
        margin:null,
        totalAmount:0.00,
        stockData:{
            quantity:0,
            price:null,
            order:'',
            variety:'',
            search:'',
            amount:0
        },
        stockDataSell:{
            quantity:0,
            price:null,
            order:'',
            variety:'',
            search:'',
            amount:0
        },
        userDetails:'',
        currentStock:'',
        currentUser:'',
        currentIndex:null
    }
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    const {stocks,searchValue,count,stockData,totalAmount,currentStock}=state

    useEffect(() => {
        fetch('https://jsonblob.com/api/c273f6bd-b16e-11ea-93a7-e30757aec034').then(response => response.json()).then(json => {
            let { carousel, mobiles, filterDropDown } = json
            setTimeout(() => {
                dispatch({ type: 'API_SUCCESS', context: { stocks: [...json],  isAPILoaded: true } })
                console.log(stocks)
            }, 2000)

           

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

const handleInput =({target})=>
{
    
dispatch({type:'HANDLE_INPUT',context:{target}})
}
const handleInputSell =({target})=>
{
    
dispatch({type:'HANDLE_INPUT_SELL',context:{target}})
}
const updateData = () =>{
    dispatch({type:'UPDATE_DATA'})
}
const goToPositionsBuy = (index) =>{

const {price,quantity}=stockData
console.log(price);
var isAvailable=Number(price)*quantity;
console.log(isAvailable)
    if(totalAmount>=isAvailable){
        dispatch({type:'GO_TO_POSITIONS_BUY',context:{index,isAvailable}})
    }
    else(
        alert("Insufficient funds, Please add funds ")
    )
    
}
const goToPositionsSell = (index) =>{
    const {price,quantity}=stockData
var isAvailable=price*quantity;
    dispatch({type:'GO_TO_POSITIONS_SELL',context:{index,isAvailable}})
}
const startSearch = () =>{
    
    dispatch({type:'START_SEARCH'})

}
const onAddFunds = () =>{
    dispatch({type:'ADD_FUNDS'})
}
const onWithdrawFunds = () =>{
    dispatch({type:'WITHDRAW_FUNDS'})
}
const collectIndex=(index)=>
{
    
    dispatch({type:'COLLECT_INDEX',context:{index}})
    

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
        handleInputSell
}
}

export default useAPI
