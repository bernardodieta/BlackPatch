
import MacBookAirModel from "../../models/adminInventoryModels/macBookAirModels.js";

export default class MacBookAirServiceDao {
    constructor() {

    }

    getAll = async () => {
        const result = await MacBookAirModel.find()
        console.log('service', result);

        return result
    }

    getByName = async (product) => {
        const result = await MacBookAirModel.find({
            ident: {
                $regex: product,
                $options: 'i'
            }
        });
        return result;
    }

}