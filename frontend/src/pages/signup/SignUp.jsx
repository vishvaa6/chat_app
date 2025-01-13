import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import UseSignup from '../../hooks/useSignup.js'

const SignUp = () => {
  const [inputs,setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confrimPassword: '',
    gender: ''
  });

  const {loading, signup} = UseSignup();

  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs);
    
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-400'>
          SignUp <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Full Name
              </span>
            </label>
            <input type='text' placeholder='jhon Doe' className='input w-full input-bordered h-10'
             value={inputs.fullname}
             onChange={(e) => setInputs({...inputs, fullname: e.target.value})} 
            ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Username
              </span>
            </label>
            <input type='text' placeholder='jhon Doe' className='input w-full input-bordered h-10'
            value={inputs.username}
            onChange={(e) => setInputs({...inputs,username: e.target.value})}
            ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Password
              </span>
            </label>
            <input type='password' placeholder='1234@#$' className='input w-full input-bordered h-10 text-gray-600'
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password: e.target.value})}
            ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>
                Confrim Password
              </span>
            </label>
            <input type='password' placeholder='1234@#$' className='input w-full input-bordered h-10'
            value={inputs.confrimPassword}
            onChange={(e) => setInputs({...inputs,confrimPassword: e.target.value})}
            ></input>
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link to='/login' className="hover:underline hover:text-blue-600 mt-2 inline-block">
            Already Have an Account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm border border-slate-700 mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : 'SignUp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp