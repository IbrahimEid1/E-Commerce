import { useMutation } from "@tanstack/react-query"
import instance from "../../Config/InstanceAxios"

export const useCreate = ()=>{
const token = localStorage.getItem("token")
  return useMutation({
    mutationKey:["create"], 
    mutationFn: async (create)=>{ 
     const res = instance.post("categories" , create , {
        headers:{
          Authorization:`Bearer ${token}` , 
          "Content-Type": "multipart/form-data"
        }
        
      })
      return res.data
      
    }
  } )
}