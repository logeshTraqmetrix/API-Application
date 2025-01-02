import React from 'react'
import Navbar from './Navbar'
import CustomSidebar from './CustomSidebar'
import { Outlet } from 'react-router-dom'
import Styles from './layout.module.css'

const CustomLayout = () => {
  return (
    <>
      <Navbar />
      <div className={Styles.mainDiv}>
        <CustomSidebar />
        <div className={Styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CustomLayout