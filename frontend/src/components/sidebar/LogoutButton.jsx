import React from 'react'
import { FiLogOut } from "react-icons/fi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout()
   
  return (
    <div className='mt-auto'>
        {!loading ? (
          <FiLogOut  className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
        ) : (
      <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton