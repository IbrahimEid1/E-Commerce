import { useQuery } from "@tanstack/react-query";
import instance from "../Components/config/axios.config";

const useAuthorization = ({queryKey , url , config}) => {
return useQuery({
    queryKey, 
    queryFn:async  ()=>{
    const res =  await  instance.get(url , config) 
        return res.data  ;
        
    }
})



};

export default useAuthorization;