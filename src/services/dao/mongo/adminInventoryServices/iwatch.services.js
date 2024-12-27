
import IwatchModels from "../../models/adminInventoryModels/appleWatchModels.js"

export default class IwatchServiceDao {
    constructor() {

    }

    getAll = async () => {
        const result = await IwatchModels.find()
        console.log('service', result);

        return result
    }

    getByName = async (product) => {
        const result = await IwatchModels.find({
            ident: {
                $regex: product,
                $options: 'i'
            }
        });
        return result;
    }

}