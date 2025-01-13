import {useAuthContext} from "../../context/authContext"
import { extractTime } from "../../utlis/extractTime";
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromeMe = message.senderId === authUser.id;
  const formattedTime = extractTime(message.createdAt)
  const chatclassName = fromeMe ? 'chat-end' : 'chat-start';
  const profilepic = fromeMe ? authUser.profilepic: selectedConversation?.profilepic;
  const bubbleBgColor = fromeMe ? 'bg-blue-500' : "";
  const shakeClass = message.shouldShake ? "shake" : "";


  return (
    <div className={`chat ${chatclassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilepic} alt='ava'></img>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message