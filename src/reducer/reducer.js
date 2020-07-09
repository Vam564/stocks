const reducer = (state, action) => {
    const { type, context } = action
    const { stocks, search, isAPILoaded, count, float, value, stockData,stockDataSell, stocksBuyed,totalAmount,currentStock } = state
    switch (type) {
        case 'API_SUCCESS': {
            return {
                ...state,
                ...context
            }
        }
        case 'UPDATE_AFTER': {
            return {
                ...state,
                count: 'changed'
            }
        }
        case 'UPDATE_REPEATEDLY': {
            return {
                ...state,
                float: float + 10,
                value: Math.random() + value
            }
        }
        case 'UPDATE_DATA': {
            return {
                ...state,
                float: float + 10,
                value: Math.random() + value
            }
        }
        case 'HANDLE_INPUT': {
            const { target: { value, id } } = context
           // console.log(value + "and" + id)
            return {
                ...state,
                stockData: { ...stockData, [id]: value }
            }
        }
        case 'HANDLE_INPUT_SELL': {
            const { target: { value, id } } = context
            
            return {
                ...state,
                stockDataSell: { ...stockDataSell, [id]: value }
            }
        }
        case 'GO_TO_POSITIONS_BUY': {
            const { index,isAvailable } = context
            console.log(index)
            return {
                ...state,
               stocksBuyed:[...stocksBuyed,...stocks.filter((item,i)=>i==index)],
               status:'BUY',
               totalAmount:Number((+totalAmount)-(+isAvailable))
            }
            // if (stocksBuyed.length == 0) {
            //     return {
            //         ...state,
            //         cart: [...cart, ...shoppingCart.filter((item, i) => i == index)],
                    
                    
            //     }
            // }
            // else if (cart.filter((a, i) => shoppingCart[index].productName == a.productName).length > 0) {

            //     return {
            //         ...state,
                    
            //     }
            // }
            // else {
            //     return {
            //         ...state,
            //         cart: [...cart, ...shoppingCart.filter((item, i) => i == index)],
                   
            //     }
            // }
        }
        case 'GO_TO_POSITIONS_SELL': {
            const { index,isAvailable } = context
            console.log(index)
            return {
                ...state,
               stocksBuyed:[...stocksBuyed,...stocks.filter((item,i)=>i==index)],
               status:'SELL',
               totalAmount:Number((+totalAmount)+(+isAvailable))

            }
        }
        case 'START_SEARCH': {
         console.log(stocks.filter(el => {
            return el.stockType.map(elem => elem.toLowerCase()).indexOf(stockData.search) !== -1;
        }))  
            return {
                ...state,
                filter:stocks.filter(el => {
                    return el.stockType.map(elem => elem.toLowerCase()).indexOf(stockData.search) !== -1;
                })
            }
        }
        case 'USER_DETAILS': {
            const { user } = context
            console.log(user+"and"+user.email)
            return {
                ...state,
               currentUser:user
            }
        }
        case 'ADD_FUNDS': {
            
            return {
                ...state,
               totalAmount:Number((+totalAmount)+(+stockData.amount))
            }
        }
        case 'WITHDRAW_FUNDS': {
            
            return {
                ...state,
               totalAmount:Number((+totalAmount)-(+stockData.amount))
            }
        }
        case 'COLLECT_INDEX': {
            const {index}=context
            console.log(currentStock)
            return {
                ...state,
               currentIndex:index,
               currentStock:stocks[index],
                // stockData:{
                //     price:currentStock.open
                // }
            }
        }
     

        default: {
            return state
        }
    }

}
export default reducer

// const reducer = (state, action) => {
//     const {type,  context} =action
//     const {shoppingCart, cart,search,login,reg,filterDropDown,filter } = state;
//     switch (type) {
//         case 'API_SUCCESS':{
//             return {
//                 ...state,
//                 ...context
//             }
//         }
//         default: {
//             return state    
//     }
//         }
// }

// export default reducer