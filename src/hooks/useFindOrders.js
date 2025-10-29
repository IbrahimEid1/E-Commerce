import { useQuery } from '@tanstack/react-query'
import React from 'react'
import instance from '../../Config/InstanceAxios'

const useFindOrders = () => {
  const token = localStorage.getItem("token")
return useQuery({
  queryKey:["FindOrder"],
  queryFn: async()=>{
    const res = await instance.get("orders?populate=*", {
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return res.data
  }
})
}

export default useFindOrders