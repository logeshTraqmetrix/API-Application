import React, { useContext } from 'react'
import { MyContext } from '../../MyProvider'

const AdminDashboard = () => {
  const adminData = useContext(MyContext).state.adminData
  console.log('admin data from admin dashboard',adminData)
  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard