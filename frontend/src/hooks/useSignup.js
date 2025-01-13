import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

const UseSignup = () => {

    const[loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({fullname,username,password,confrimPassword,gender}) =>{
        const success = handleInputErrors({fullname,username,password,confrimPassword,gender})
        if(!success) return;

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullname,username,password,confrimPassword,gender}),
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            console.log(data)
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    };

    return {loading, signup}
};

export default UseSignup;

function handleInputErrors({fullname, username, password, confrimPassword, gender}){
    if(!fullname || !username || !password || !confrimPassword || !gender){
        toast.error("Please fill in the all fields");
        return false;
    }

    if(password !== confrimPassword){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Passwords must be at least 6 characters")
        return false;
    }
    return true;
}