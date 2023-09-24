import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext(); 
export const InputContext = createContext();

function fetchUser() {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve({ id: 1, name: "Adam" });
    }, 1000);
    });

    
   }


export function UserProvider({ children }) {
 const user = useState('sd');


 return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
