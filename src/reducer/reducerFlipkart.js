
const reducerFlipkart = (state, action) => {
    const {type,  context} =action
    const {shoppingCart, cart,search,login,reg,filterDropDown,filter } = state;
    switch (type) {
        case 'API_SUCCESS':{
            return {
                ...state,
                ...context
            }
        }
        case 'UPDATE_TOTALS':{
            return {
                ...state,
                totalPrice:cart.reduce((a, b) => a + Number(b.productPrice.cutOffPrice) * b.quantity, 0),
                totalCost:cart.reduce((a, b) => a + Number(b.productPrice.cutOffPrice) * b.quantity + b.quantity * b.deliveryFee, 0),
                deliveryFee:cart.reduce((a, x) => a + (x.quantity * x.deliveryFee), 0)
            }
        }
        case 'INCREMENT_COUNTERS':{
            const {index} = context
            shoppingCart[index].quantity++
            return {
                ...state,
                shoppingCart:[...shoppingCart]
            }
        }
        case 'DECREMENT_QUANTITY':{
            const {index} = context
           shoppingCart[index].quantity--
            return {
                ...state,
                shoppingCart:[...shoppingCart]
            }
        }
        case 'DELETE_ITEMS':{
            const {index} = context
            const shoppingCartItems=cart.filter((item,i) => i!= index )
            return {
                ...state,
                cart:[...shoppingCartItems]
            }
        }
        case 'ADD_TO_CART': {
            const { index } = context
            
            if(cart.length == 0 ){
                return {
                    ...state,
                    cart: [...cart,...shoppingCart.filter((item, i) => i == index)],
                    index:index,
                    count:true    
                }
            }
            else if(cart.filter((a,i)=>shoppingCart[index].productName==a.productName).length>0)
            {
                
                return {
                    ...state,
                    index:index,
                    count:false 
                }
            }
            else
            {
                return {
                    ...state,
                    cart: [...cart,...shoppingCart.filter((item, i) => i == index)],
                    index:index,
                    count:true
                }   
            }
           
           
            

        }
        case 'HANDLE_INPUT': {
            const { target: { value } } = context
            return {
                ...state,
                search: value
            }
        }
        case 'HANDLE_INPUT_REG': {
            const {target:{value,id}}=context
            return {
                ...state,
                reg:{...reg,[id]:value}
            }
        }
        case 'HANDLE_INPUT_LOG': {
            const {target:{value,id}}=context
            return {
                ...state,
                login:{...login,[id]:value}
            }
        }
        case 'USER_LOGIN': {
            const {reguser}=context
            return {
                ...state,
                User:reguser
            }
        }

        case 'DISPLAY': {
            const {search} =context
            return {
                ...state,
                filter:shoppingCart.filter(el => {
                    return el.itemType.map(elem => elem.toLowerCase()).indexOf(search) !== -1;
                })
            }

        }
        case 'DROPDOWN_FILTER': {
            const {index,target:{value},item} =context
            console.log(item)
            console.log(shoppingCart.filter((a,i)=>a.RAM==value))
            console.log(shoppingCart.filter((a,i)=>a.BRAND==value))
            console.log()
            return {
                ...state,
                filterDropDown:shoppingCart.filter((a,i)=>a.RAM==value)
            }

        }
        default: {
            return state    
    }
        }
}
 
export default reducerFlipkart