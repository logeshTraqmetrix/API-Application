import React from 'react'
import styles from './landingPage.module.css'
import LoginDetails from '../LoginDetails/LoginDetails'

const LandingPage = () => {


    return (
        <div>
            <nav className={styles.navbar}>
                <div>
                    logo
                </div>
                <div>
                    <a href="/__catalyst/auth/login">Login</a>
                    <a href="/__catalyst/auth/signup">SignUp</a>
                </div>
                
            </nav>

           
        </div>
    )
}

export default LandingPage
