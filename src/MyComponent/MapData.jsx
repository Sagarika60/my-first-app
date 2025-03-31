import { useEffect,useState } from "react";
function MapData(){
    const [userData,setUsersData]=useState([]);
    useEffect(()=>{
        setUsersData(user);
    },[]);
    let user=[
        {
            id:1,
            name:"saggy",
            email:"sagarika21@gmail.com" ,
             age:21,
        },
            {
                id:2,
                name:"rose",
                email:"rose321@gmail.com" ,
                 age:20,
            },
            {
                id:3,
                name:"priya",
                email:"priyamiss321@gmail.com" ,
                 age:22,
            },
            {
                id:4,
                name:"saurav",
                email:"saurav221@gmail.com" ,
                 age:22,
            },
            {
                id:5,
                name:"ravi",
                email:"ravi221@gmail.com" ,
                 age:22,  
            },
            {
                id:6,
                name:"riya",
                email:"riyaa221@gmail.com" ,
                 age:23,
            }
        ];
        return(
            <>
            <table border={1} width={"100%"} style={{color:"black"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            
            </>
        );
    }
    export default MapData;

        
