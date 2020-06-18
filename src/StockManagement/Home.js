import React, { useContext } from 'react'
import { stockContext } from '../ContextAPI/stockContext'
import { FlipkartContext } from '../ContextAPI/FlipkartContext'
const Home = () => {
    
    const {
        state: {
            shoppingCart, cart, index, count
        },
        AddToCart,

    } = useContext(FlipkartContext)
    return (
        <div>
            <h1>Hello</h1>
             <pre>
                {JSON.stringify(shoppingCart, null, 4)}
            </pre> 
        </div>
    )
}

export default Home
