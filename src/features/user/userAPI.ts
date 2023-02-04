import {
  USER
} from "../../app/types"
//import { useSelector } from "react-redux"
const BASE_URL = "http://localhost:5000/api"

const fetchUsers = async ()=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const authTokenP = JSON.parse(authToken)
   const users = await fetch(`${BASE_URL}/users`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    console.log(users)
    return users
}
    else{
      throw new Error("not authorized ")
    }
}

const delUser = async (id:string)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const authTokenP = JSON.parse(authToken)
   const user = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        },
        method:"DELETE"
    })
    return user
}
    else{
      throw new Error("not authorized ")
    }
}

const loginUser = async (user:USER)=>{

   const userr = await fetch(`${BASE_URL}/users/user/login`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(user)
    })
    return userr
}

const registerUser = async (payload:USER)=>{
   const userr = await fetch(`${BASE_URL}/users/`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(payload)
    })
    return userr
}

const updateUser = async ({id,user}:{id:any,user:USER})=>{
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const authTokenP = JSON.parse(authToken)
   const userr = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token,
        'Content-Type':'application/json' 
             },

        method:"PUT",
        body:JSON.stringify(user)
    })

    return userr
}
    else{
      throw new Error("not authorized ")
    }
}

const fetchUser = async (id:any)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const authTokenP = JSON.parse(authToken)
   const users = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    return users
}
    else{
      throw new Error("not authorized ")
    }
}





export {
    fetchUsers,
    fetchUser,
    loginUser,
    registerUser,
    updateUser,
    delUser,
    BASE_URL
}