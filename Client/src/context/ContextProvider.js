import React, { createContext } from 'react'
import { useState } from 'react';



export const LoginContext = createContext(null);



export default function ContextProvider({children}) {
    
    const [account, setAccount] = useState('');
    return (
        <LoginContext.Provider 
        value={{account,setAccount}} >
            {children}
        </LoginContext.Provider>
    )
}
