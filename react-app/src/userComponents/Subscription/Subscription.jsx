import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MyContext } from '../../MyProvider'

const Subscription = () => {
    const { state } = useContext(MyContext)


    const applyPlan = (planValue) => {

        axios.post('/server/api_application_function/userApi', { email: state.email_id, planValue })
            .then((response) => {
                console.log('response from creating api payment', response.data)
            }).catch((error) => {
                console.log('error in api creation or payment', error)
            })
    }
    return (
        <div>
           
            <div>
                <h2>Subscription Plan</h2>
                <div>
                    <h2>Free</h2>
                    <button onClick={() => applyPlan(0)}>Apply</button>
                </div>
                <div>
                    <h2>2 Rupees</h2>
                    <button onClick={() => applyPlan(2)}>Apply</button>
                </div>
                <div>
                    <h2>10 rupees</h2>
                    <button onClick={() => applyPlan(10)}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription
