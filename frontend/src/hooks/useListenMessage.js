import { UseSocketContext } from "../context/socketContext"
import useConversation from '../zustand/useConversation.js'
import { useEffect } from "react";


const useListenMessage = () => {
    
    const {socket} = UseSocketContext();
    const {messages,setMessages} = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            setMessages([...messages, newMessage])
        }) 
        return () => socket?.off("newMessage")
    },[socket, setMessages, messages]);

}

export default useListenMessage