import {memo}from "react";
function Button({handleClick,text}){
    console.log("Button");
    return(
        <>
        <button onClick={handleClick}>{text}</button>
        </>
    )
}
export default memo(Button);