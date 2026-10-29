import React,{useState} from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input 
              placeholder='Send a Message' 
              type='text' 
              aria-label='Message content'
              className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button
              type='submit'
              aria-label='Send message'
              disabled={loading || !message.trim()}
              className='absolute inset-y-0 end-0 flex items-center pe-3 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:text-white'>
                {loading ? <div className='loading loading-spinner'></div> : <IoSend />}
            </button>

        </div>

    </form>
  )
}

export default MessageInput