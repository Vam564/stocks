import React,{createContext} from 'react';
import FlipkartMainuseAPI from '../Hooks/FlipkartMainuseAPI';

export const FlipkartContext = createContext();
export const FlipkartProvider = props => {

    return(
        <FlipkartContext.Provider value={{...FlipkartMainuseAPI()}}>
            {props.children}
        </FlipkartContext.Provider>
    )}
    