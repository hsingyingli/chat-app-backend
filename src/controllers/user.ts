import {ControllerInterface} from "../types/common/controller";

export const getOneUser: ControllerInterface = (req, res) => {
  const param = req.params
  return res.send(param)
}

export const getUser: ControllerInterface = (req, res)=> {
  return res.send('hello world')
}

export const createUser: ControllerInterface = (req, res) => {
}

export const deleteUser: ControllerInterface = (req, res) => {
} 

export const updateUser: ControllerInterface = (req, res) => {
}




