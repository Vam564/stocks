
// const stockReducer = (state, action) => {
//     const {type,  context} =action
//     const {stock,search,login,reg } = state;
//     switch (type) {
//         case 'API_SUCCESS':{
//             return {
//                 ...state,
//                 ...context
//             }
//         }
//         // case 'HANDLE_INPUT': {
//         //     const { target: { value } } = context
//         //     return {
//         //         ...state,
//         //         search: value
//         //     }
//         // }
//         // case 'HANDLE_INPUT_REG': {
//         //     const {target:{value,id}}=context
//         //     return {
//         //         ...state,
//         //         reg:{...reg,[id]:value}
//         //     }
//         // }
//         // case 'HANDLE_INPUT_LOG': {
//         //     const {target:{value,id}}=context
//         //     return {
//         //         ...state,
//         //         login:{...login,[id]:value}
//         //     }
//         // }
//         // case 'USER_LOGIN': {
//         //     const {reguser}=context
//         //     return {
//         //         ...state,
//         //         User:reguser
//         //     }
//         // }

        
//         default: {
//             return state    
//         }
//     }
// }
 
// export default stockReducer