// import React,{  useEffect,useReducer } from 'react'
// import stockReducer from '../reducer/stockReducer'

// const stockUseApi =()=> {
//     const INITIAL_STATE = {
//        stock:[],
//        isAPILoaded:false,
//        search:'',
//         login:{
//             user:'',
//             pwd:''
//         },
//         reg:{
//             userR:'',
//             email:'',
//             pwdR:''
//         },
//         User:'User'
        

//     }
    
//     const [state, dispatch] = useReducer(stockReducer, INITIAL_STATE)
//     const {stock}=state

//     useEffect(() => {

//         fetch('https://jsonblob.com/api/4e238965-8e9e-11ea-b722-d12f7d7a3eee').then(response => response.json()).then(json => {
//             //let {Meta Data, } = json
//             setTimeout(() => {
//                 dispatch({ type: 'API_SUCCESS', context: {stock:[...json], isAPILoaded: true } })
//             }, 2000)

//         })
//     }, []);
//     // useEffect((prevState) => {
//     //     dispatch({type:'UPDATE_TOTALS'})
//     // }, [shoppingCart,cart])

    
//     // const handleInput = ({target}) =>{
//     //     dispatch({ type: 'HANDLE_INPUT', context: { target } })
//     // }
 
//     // const handleInputReg=({target})=>{
       
//     //     dispatch({
//     //         type: 'HANDLE_INPUT_REG',
//     //         context:{target}
//     //     })
//     // }
//     // const handleReg=()=>{
//     //     localStorage.setItem("userR",reg.userR)
//     //     localStorage.setItem("pwdR",reg.pwdR)
//     //     console.log(reg.userR)
//     //     console.log(reg.pwdR)
//     //     alert("Hey "+reg.userR +" you are registered !!")

//     // }
//     // const handleInputLog=({target})=>{
        
//     //     dispatch({
//     //         type: 'HANDLE_INPUT_LOG',
//     //         context:{target}
//     //     })
//     // }
//     // const handleLog=()=>{
//     //     var reguser=localStorage.getItem("userR")
//     //     var regpwd=localStorage.getItem("pwdR")
//     //     console.log(reguser);
//     //     console.log(regpwd);
//     //     if(login.user==reguser&&login.pwd==regpwd)
//     //     {
//     //         dispatch({
//     //             type: 'USER_LOGIN',
//     //             context:{reguser}
//     //         })
//     //         alert(reguser +"  you have logged in succesfully")
//     //     }else{
//     //         alert("Invalid details")
//     //     }
       
//     // }
//     return {
//         state   
//     }
// }

// export default stockUseApi
