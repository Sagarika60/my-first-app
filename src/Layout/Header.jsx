import { Link } from "react-router-dom";
function Header(){
return(
    <>
       <Link to={"/"}>Home</Link> ||
       <Link to={"/about"}>About</Link>  ||
       <Link to={"/contact"}>Contact</Link>  ||
        <Link to={"/myeffect"}>use Effect and Map</Link>    ||
        <Link to={"/mypath"}>Navigation</Link>  ||
        <Link to={"/mydata"}>MapData</Link> ||
        <Link to={"/mycontext"}>MyContext</Link>||
        <Link to ={"/callback"}>MyCallBack</Link>||
        <Link to ={"/MyMemo"}>MyMemo</Link>||
        <Link to={"/formhandling"}>FormHandling</Link>||
        <Link to={"/apiconnectivity"}>ApiConnectivity</Link>||
        <Link to={"/clmethod"}>ClMethod</Link>
    </>
)

}
export default Header;