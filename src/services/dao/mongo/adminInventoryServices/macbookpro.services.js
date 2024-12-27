
import MacBookProModel from "../../models/adminInventoryModels/macBookProModels.js";

export default class MacBookProServiceDao {
    constructor() {

    }

    getAll = async () => {
        const result = await MacBookProModel.find()
        console.log('service', result);

        return result
    }

    getByName = async (product) => {
        const result = await MacBookProModel.find({
            ident: {
                $regex: product,
                $options: 'i'
            }
        });
        return result;
    }

}