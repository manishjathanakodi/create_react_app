import { useState, useEffect } from "react";

const useNetworkStatus = () =>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("online", () => {
            setIsOnline(true);
        })
        window.addEventListener("offline", () => {
            setIsOnline(false);
        })

    },[]);
    return isOnline;
  
}

export default useNetworkStatus;
