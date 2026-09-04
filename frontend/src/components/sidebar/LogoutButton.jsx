import { FiLogOut } from "react-icons/fi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout()
   
  return (
    <div className='mt-auto'>
        {!loading ? (
          <button
            aria-label="Logout"
            onClick={logout}
            className='focus-visible:ring-2 focus-visible:outline-none rounded-md'
          >
            <FiLogOut  className='w-6 h-6 text-white cursor-pointer' />
          </button>
        ) : (
      <span className='loading loading-spinner' aria-label="Logging out"></span>
      )}

    </div>
  )
}

export default LogoutButton