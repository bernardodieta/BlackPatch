import { userModel } from "../models/usersModel.js"

export default class UsersServicesDao {
    constructor() {

    }

    getUserById = async (userId) => {
        const result = await userModel.findById(userId)

        return result
    }

    registerUser = async (newUser) => {
        const result = await userModel.create(newUser);
        return result;
    }


}