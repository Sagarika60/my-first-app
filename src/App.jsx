// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './MyPage/Header'
// import Body from './MyPage/Body'
// import Footer from './MyPage/Footer'
//import JsxExample from "./component/JsxExample"
//  import PropsExample from "./component/Propsexample"
// import DefineProduct from "./component/DefineProduct"
// import StateExample from "./component/StateExample"
// import MyProps from "./component/MyProps"

// import MyHooks from "./component/MyHooks"
// import { useState} from "react";
// import MyStateAndProps from "./component/MyStateAndProps";
//import MyUseEffect from "./component/MyUseEffect";
// import MyHooks from "./component/MyHooks"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Home from "./MyComponent/Home"
import About from "./MyComponent/About"
import Contact from "./MyComponent/Contact"
import MyNavigate from "./MyComponent/MyNavigate"
import MapData from "./MyComponent/MapData"
import MyContext from "./MyComponent/MyContext"
import MyCallBack from "./MyComponent/MyCallBack"
import MyMemo from "./MyComponent/MyMemo"
import FormHandling from "./MyComponent/FormHandling"
import ApiConnectivity from "./MyComponent/ApiConnectivity"
import ClMethod from "./MyComponent/ClMethod"



 function App() 
 {
  // const [name, setName] = useState('saggy');
   // const [role, setRole] = useState('student');
   // function handleClick(){
  //   setName('Saggy');
   //   setRole('student');
  //}
      
  // let a = 10;
  // let b = 20;

  return (
    <>

    {/* <PropsExample a={a} b={b} /> */}
    {/* <Header />
    <Body />
    <Footer /> */}
    {/* <JsxExample /> */}
    {/* <PropsExample /> */}
    {/* <DefineProduct/> */}
    {/* <StateExample/> */}
    {/* <MyProps name='saggy' role='student'/> */}
    {/* <MyHooks/> */}
    {/* <MyStateAndProps name={name} role={role} /> */}
      {/* <button onClick={() => {
        setName("Sagyy")
        setRole("student")
       } }>login1</button>

       <button onClick={()=> {
        setName ("lisa")
        setRole("teacher")
       }}>login2</button>

<button onClick={() => {
        setName("priya")
        setRole("model")
       } }>login3</button> */}
       {/* <MyUseEffect/> */}
       <BrowserRouter>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mypath" element={<MyNavigate/>}/>
          <Route path="/mydata" element={<MapData />}/>
          <Route path="/mycontext" element={<MyContext/>}/>
          <Route path="/callback" element={<MyCallBack/>}/>
          <Route path="/mymemo" element={<MyMemo/>}/>
          <Route path="/formhandling" element={<FormHandling/>}/>
          <Route path="/apiconnectivity" element={<ApiConnectivity/>}/>
          <Route path="/clmethod" element={<ClMethod favColor={"Brown"}/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>       
    </>
  )
}

export default App
