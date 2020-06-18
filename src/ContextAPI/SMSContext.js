import React,{createContext} from 'react';
import useAPI from '../Hooks/useAPI'
export const SMSContext = createContext();
export const SMSProvider = props =>{
    return (
        <SMSContext.Provider vale={{...useAPI()}}>
            {props.children}
        </SMSContext.Provider>
    )
} 