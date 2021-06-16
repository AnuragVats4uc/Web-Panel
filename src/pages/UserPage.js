import React, { useState } from 'react'
import SavePassword from '../components/UserLogin/SavePassword';
import UserLogin from '../components/UserLogin/UserLogin'

const UserPage = () => {

    const [isvisible,setIsVisible] = useState(false);

    if(isvisible){
        return(
            <div>
                <SavePassword onSelect={()=> setIsVisible(false)}/>
            </div>
        )
    }else{
        return (
            <UserLogin onSelect={()=>setIsVisible(true)}  />
        )
    }

    

}

export default UserPage