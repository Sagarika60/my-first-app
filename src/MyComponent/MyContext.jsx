import React,{useContext} from "react";

const color=React.createContext("brown");
function MyContext(){
    const theme=useContext(color);
    return(
        <>
        <h1 style={{color:theme}}>HELLO EVERYONE</h1>
        </>
    )
}
export default MyContext;