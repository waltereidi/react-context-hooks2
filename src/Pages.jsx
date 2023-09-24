import React , {Fragment , useContext , useState } from 'react';
import { UserContext ,InputContext } from './UserContext';


function Username(){
    const [user , setUser] = useContext(UserContext);
    return (
        <input value={user} onChange={e => setUser(e.target.value)}>
           
        </input>
    )
}
export function Page1(){
    
    return <Fragment><h1>Page1</h1><Username/></Fragment>;
}
export function Page2(){
    return <Fragment><h1>Page2</h1><Username/></Fragment>;
}
export function Page3(){
    return <Fragment><h1>Page3</h1><Username/></Fragment>;
}