import { useState} from "react";

function MyHooks(){
    const[num,setNum] = useState(0);
    return(
        <>
           <h3>{num}</h3>
           <button onClick={()=>setNum(num+1)}>CLICK MEE</button>
        
        </>
    )
}
export default MyHooks;