import MyForm from "./MyForm";
function PropsExample(){

    return (
        <>
            <MyForm type={"text"} name={"name"} placeholder={"Enter your name"} />
            <MyForm type={"email"} name={"email"} placeholder={"Enter your email"} />
            <MyForm type={"password"} name={"password"} placeholder={"Enter your password"} />
        </>
    )
}
export default PropsExample;