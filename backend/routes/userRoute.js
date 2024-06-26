import express from 'express';
import { test, updateUser, deleteUser} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';
import User from '../models/userModel.js';

const router = express.Router();

// router.get('/:id', test);
// router.get("/:id",async(req,res)=>{
//     try{
    
//         const {id} = req.params;
    
//         const Info = await User.findById(id);
    
//         return res.status(200).json(Info);
//     } catch(error){
//         console.log(error.message);
//         res.status(500).send({message: error.message});
//     }
//     })
    
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser);

export default router;