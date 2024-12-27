export default class ipadsRepository {
    constructor(dao) {
        this.dao = dao
    }

    getAll = async () => {
        return this.dao.getAll()
    }

    getByName = async (product) => {
        return this.dao.getByName(product)
    }
 

}