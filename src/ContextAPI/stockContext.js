import React,{createContext} from 'react';
import stockUseApi from '../Hooks/stockUseApi.js';
import FlipkartMainuseAPI from '../Hooks/FlipkartMainuseAPI';

export const stockContext = createContext();
export const stockProvider = props => {

    return(
        <stockContext.Provider value={{...FlipkartMainuseAPI()}}>
            {props.children}
        </stockContext.Provider>
    )}
    