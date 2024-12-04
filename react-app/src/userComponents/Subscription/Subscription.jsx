import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Subscription = () => {
    // const [plan,setPlan] = useState('')
    const [email,setEmail] = useState('')

    useEffect(()=>{
        axios.get('/server/api_application_function/getuserdetails')
            .then((response)=>{
                console.log('user details response',response)
                setEmail(response.data.email_id)
            }).catch((error)=>{
                console.log('error in getting user details',error)
            })
    },[])

    const applyPlan = (planValue)=>{
        axios.post('/server/api_application_function/userApi',{email,planValue})
            .then((response)=>{
                console.log('response from creating api payment',response)
            }).catch((error)=>{
                console.log('error in api creation or payment',error)
            })
    }
  return (
    <div>
        <div>
            <h2>Free</h2>
            <button onClick={()=>applyPlan(0)}>Apply</button>
        </div>
        <div>
            <h2>2 Rupees</h2>
            <button onClick={()=>applyPlan(2)}>Apply</button>
        </div>
        <div>
            <h2>10 rupees</h2>
            <button onClick={()=>applyPlan(0)}>Apply</button>
        </div>
    </div>
  )
}

export default Subscription