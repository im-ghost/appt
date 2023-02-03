import {
  USERS
} from "../../app/types"
const BASE_URL = "http://localhost:5000/api";
import { useSelector } from "react-redux"
type AUTHTOKEN = string
type AUTHTOKENP = object

const fetchAppointments = async ()=>{
    
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    const authTokenP:AUTHTOKENP = JSON.parse(authToken)
   const users :USERS = await fetch(`${BASE_URL}/users`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    console.log(users)
    return users
}

const delAppointment = async (id)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    const authTokenP = JSON.parse(authToken)
   const user = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        },
        method:"DELETE"
    })
    return user
}

const fetchDoctorAppointment = async (id)=>{

   const userr = await fetch(`${BASE_URL}/users/user/login`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(user)
    })
    return userr
}

const fetchUserAppointment = async (id)=>{
    console.log(payload)
   const userr = await fetch(`${BASE_URL}/users/`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(payload)
    })
    return userr
}

const updateAppointment = async ({id, appointment})=>{
    const authToken = localStorage.getItem("appt-app-user")
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

const fetchAppointmen = async (id)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    const authTokenP = JSON.parse(authToken)
   const users = await fetch(`${BASE_URL}/users/user/${id}`,{
        headers:{
            authorization:authTokenP.token
        }
    })
    return users
}






export {
  fetchAppointment,
  fetchUserAppointment,
  fetchDoctorAppointment,
  fetchAppointments,
  delAppointment,
  updateAppointment 
} 