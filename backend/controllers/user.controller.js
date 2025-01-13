import User from "../modals/user.model.js";

export const getUsersForSidebar = async (req,res) =>{

    try {
        
        const loggedInUserId = req.user._id;

        const filteruser = await User.find({_id: {$ne: loggedInUserId }}).select("-password")

        res.status(200).json(filteruser);
    } catch (error) {
        console.log("Error in getUsersForSidebar:",error.message);
        res.status(500).json({error: "internal server error in user"});
    }
}
