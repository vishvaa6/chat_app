import React from 'react'
import { FiLogOut } from "react-icons/fi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout()
   
  return (
    <div className='mt-auto'>
        {!loading ? (
          <button
            onClick={logout}
            aria-label="Logout"
            className='cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          >
            <FiLogOut className='w-6 h-6 text-white' />
          </button>
        ) : (
      <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton