import { useQuery } from '@tanstack/react-query'
import instance from "../../Config/InstanceAxios";
export const useAds = ()=>{
  return useQuery({
    queryKey:["Ads"], 
    queryFn:async()=>{
    const  {data} = await instance.get("/ads-twos?populate=*")
      return data.data
    }
  })
}