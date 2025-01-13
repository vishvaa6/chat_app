import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { UseSocketContext } from '../../context/socketContext.jsx';


const Conversation = ({conversation, lastidx}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  const isselected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = UseSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  console.log("ONLINE_USERS",onlineUsers);
  console.log('_conversationID',conversation._id);

  return (
    <>
      <div className={`flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isselected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
        >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilepic} alt='user avatar'></img>
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullname}</p>
                <span className='text-xl'>👌</span>
            </div>
        </div>
      </div>

      {!lastidx && <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}

export default Conversation