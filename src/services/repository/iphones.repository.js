export default class iphonesRepository {
    constructor(dao) {
        this.dao = dao
    }

    saveQuestion = async (productId) => {
        return this.dao.saveQuestion(productId)
    }

    getAll = async () => {
        return this.dao.getAll()
    }

    getByName = async (product) => {
        return this.dao.getByName(product)
    }
 

}