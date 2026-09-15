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
            title="Logout"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            <FiLogOut className='w-6 h-6 text-white cursor-pointer' />
          </button>
        ) : (
      <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}

export default LogoutButton