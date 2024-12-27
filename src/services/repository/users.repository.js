export default class userRepository {
    constructor(dao) {
        this.dao = dao
    }
    getUserById = async (userId) => {
        return this.dao.getUserById(userId)
    }

    registerUser = async (newUser) => {
        return this.dao.registerUser(newUser )
    }
}