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
            aria-label="Log out"
            className="hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white/50 focus:outline-none rounded"
          >
            <FiLogOut className="w-6 h-6 text-white" />
          </button>
        ) : (
      <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton