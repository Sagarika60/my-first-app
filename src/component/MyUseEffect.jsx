import { useEffect,useState } from "react";

function MyUseEffect(){
    const[users,setUsers] = useState([]);
    useEffect(()=>{
       setUsers(allusers);
       console.log(users);
    },[])
    const allusers=[
        {id:1,name:'saggy',email:'sagarika21@gmail.com' , age:21},
        {id:2,name:'rose',email:'rose321@gmail.com' , age:20},
        {id:3,name:'priya',email:'priyamiss321@gmail.com' , age:22},
        {id:3,name:'saurav',email:'saurav221@gmail.com' , age:22},
    ]
    return(
         <>
          <table border={2} width={"100%"} cellPadding={0} cellSpacing={0} style={{textAlign:"center"}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                        </tr>
                        

                    ))}
                </tbody>
            </table>
        </>
    )

}
export default MyUseEffect;