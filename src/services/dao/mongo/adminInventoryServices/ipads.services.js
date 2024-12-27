
import IPadModel from "../../models/adminInventoryModels/iPadsModels.js"

export default class IpadsServicesDao {
    constructor() {

    }

    getAll = async () => {
        const result = await IPadModel.find()
        return result
    }

    getByName = async (product) => {
        const result = await IPadModel.find({
            ident: {
                $regex: product,
                $options: 'i'
            }
        });
        return result;
    }

}