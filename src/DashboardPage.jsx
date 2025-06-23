import React from 'react'
import { useData } from './context/DataProvider';

const DashboardPage = () => {
    const {
        username,
        setUsername,
        admins,
        setAdmins,
        isAdmin,
        setIsAdmin,
        cartItems,
        setCartItems,
      } = useData();

  return (
    <>
    {!isAdmin ? 
    (<div className='min-h-screen flex place-items-center justify-center'>
        <p>sign in to continue:</p>
    </div>):
    (<div>
        
    </div>)}
    </>
  )
}

export default DashboardPage