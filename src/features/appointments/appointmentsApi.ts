import {
  //USERS,
  USER,
  APPOINTMENT
} from "../../app/types";
import { api } from "../../app/hooks"
//import { useSelector } from "react-redux"
const BASE_URL = "http://localhost:5000/api";
type AUTHTOKEN = string | null
type AUTHTOKENP = USER | null

const fetchAppointments = async ()=>{
    
    
}

const delAppointment = async (id:any)=>{
    
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
   // const authTokenP:AUTHTOKENP = JSON.parse(authToken)
      await api.delete<null>(`${BASE_URL}/users/user/${id}`,id)
    return {
      status:200,
      message:"Appointment deleted"
    }
    }
    else{
      throw new Error("not authorized ")
    }
}

const fetchDoctorAppointment = async (id:any)=>{
  
  
}

const fetchUserAppointment = async (id:any)=>{
}

const updateAppointment = async ({id, appointment}:{id:string, appointment: APPOINTMENT})=>{
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
   // const authTokenP:AUTHTOKENP = JSON.parse(authToken)
}
    else{
      throw new Error("not authorized ")
    }
}

const fetchAppointment = async (id:any)=>{
    
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
 // const authTokenP :AUTHTOKENP= JSON.parse(authToken)
}
    else{
      throw new Error("not authorized ")
    }
}






export {
  fetchAppointment,
  fetchUserAppointment,
  fetchDoctorAppointment,
  fetchAppointments,
  delAppointment,
  updateAppointment 
} 