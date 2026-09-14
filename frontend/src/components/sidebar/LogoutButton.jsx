import React from 'react'
import { FiLogOut } from "react-icons/fi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout()
   
  return (
    <div className='mt-auto'>
        {!loading ? (
          <button aria-label="Logout" className="focus-visible:ring-2 rounded-full outline-none" onClick={logout}>
            <FiLogOut  className='w-6 h-6 text-white cursor-pointer' />
          </button>
        ) : (
      <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton