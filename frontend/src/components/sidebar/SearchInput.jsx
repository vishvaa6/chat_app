import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation.js';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search , setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return
    if(search.length < 3){
      return toast.error("Search Tearm must atleast 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation);
      console.log(conversation)
      setSearch("");
    } else toast.error("No User Found")
  }
  return (
    <form onSubmit={handleSubmit}  className='flex items-center gap-2'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search...' className='input input-bordered rounded-full'></input>

      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-6 h-6 outline-none'/>
      </button>

    </form>
  )
}

export default SearchInput