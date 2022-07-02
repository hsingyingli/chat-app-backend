import express from 'express'
import { getUser, getOneUser, createUser, deleteUser, updateUser } from '../controllers/user'
const router = express.Router()
// all route here start with /user
router.get('/:userId', getOneUser)
router.post('/', createUser)

// need auth
router.get('/', getUser)
router.delete('/', deleteUser)
router.patch('/', updateUser)

export default router
