
import iPhonesModels from '../../models/adminInventoryModels/iPhonesModels.js'

export default class IphonesServicesDao {
    constructor() {

    }

    getAll = async () => {
        const result = await iPhonesModels.find()
        return result
    }

    getByName = async (product) => {
        const result = await iPhonesModels.find({ 
            ident: { 
                $regex: product, 
                $options: 'i'    
            } 
        });
        return result;
    }
    
}