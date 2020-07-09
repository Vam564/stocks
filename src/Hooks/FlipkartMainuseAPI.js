import React,{  useEffect,useReducer } from 'react'
import reducerFlipkart from '../reducer/reducerFlipkart'

const FlipkartMainuseAPI =()=> {
    const INITIAL_STATE = {
        shoppingCart: [],
        dropDown: [],
        carousel:[],
        isAPILoaded: false,
        cart: [],
        search:'',
        filter:[],
        filterDropDown:[],
        totalCost:0,
        totalPrice:0,
        deliveryFee:0,
        login:{
            user:'',
            pwd:''
        },
        index:null,
        count:true,
        reg:{
            userR:'',
            email:'',
            pwdR:''
        },
        User:'User'
        

    }
    
    const [state, dispatch] = useReducer(reducerFlipkart, INITIAL_STATE)
    const {search,shoppingCart,dropDown,cart,login,reg,count}=state

    useEffect(() => {
        //document.getElementById("myinput").style.background = 'linear-gradient(to right, #2874f0 0%, #2874f0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'

        fetch('https://jsonblob.com/api/4e238965-8e9e-11ea-b722-d12f7d7a3eee').then(response => response.json()).then(json => {
            let { carousel, mobiles, filterDropDown } = json
            setTimeout(() => {
                dispatch({ type: 'API_SUCCESS', context: { shoppingCart: [...mobiles], dropDown: [...filterDropDown],carousel:[...carousel], isAPILoaded: true } })
            }, 2000)

        })
    }, []);
    // useEffect((prevState) => {
    //     dispatch({type:'UPDATE_TOTALS'})
    // }, [shoppingCart,cart])

    // const AddToCart = (index) => {
    //     dispatch({ type: 'ADD_TO_CART', context: { index } })
        
       
    // }
    // const display =()=>{
    //     dispatch({ type: 'DISPLAY',context:{search} })
       
    // }
    // const handleInput = ({target}) =>{
    //     dispatch({ type: 'HANDLE_INPUT', context: { target } })
    // }
    // const incrementCounter = (index) => {
      
    //     dispatch({type:'INCREMENT_COUNTERS',context:{index}})
    // }
    // const decrementCounter = (index) => {
    //     dispatch({type:'DECREMENT_QUANTITY',context:{index}})

    // }
    // const deleteItem = (index) => {
       
    //     dispatch({type:'DELETE_ITEMS',context:{index}})
    // }
    // const handleInputReg=({target})=>{
       
    //     dispatch({
    //         type: 'HANDLE_INPUT_REG',
    //         context:{target}
    //     })
    // }
    // const handleReg=()=>{
    //     localStorage.setItem("userR",reg.userR)
    //     localStorage.setItem("pwdR",reg.pwdR)
    //     console.log(reg.userR)
    //     console.log(reg.pwdR)
    //     alert("Hey "+reg.userR +" you are registered !!")

    // }
    // const handleInputLog=({target})=>{
        
    //     dispatch({
    //         type: 'HANDLE_INPUT_LOG',
    //         context:{target}
    //     })
    // }
    // const handleLog=()=>{
    //     var reguser=localStorage.getItem("userR")
    //     var regpwd=localStorage.getItem("pwdR")
    //     console.log(reguser);
    //     console.log(regpwd);
    //     if(login.user==reguser&&login.pwd==regpwd)
    //     {
    //         dispatch({
    //             type: 'USER_LOGIN',
    //             context:{reguser}
    //         })
    //         alert(reguser +"  you have logged in succesfully")
    //     }else{
    //         alert("Invalid details")
    //     }
       
    // }
    // const dropDownFilter = (index,e,item) => 
    // {
    //     console.log(e.target.value , index)
    //     const {target}=e
    //     dispatch({
    //         type: 'DROPDOWN_FILTER',
    //         context:{index,target,item}
    //     })
    // }
   

    return {
        state
        // AddToCart,
        // display,
        // handleInput,
        // incrementCounter,
        // decrementCounter,
        // deleteItem,
        // handleInputLog,
        // handleInputReg,
        // handleLog,
        // handleReg,
        // dropDownFilter
}
}

export default FlipkartMainuseAPI
