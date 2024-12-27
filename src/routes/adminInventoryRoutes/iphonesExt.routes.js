import CustomRouter from "../customs.routes.js";
import { getIphonesItemsList, getIphoneByName } from "../../controllers/inventoryAdminControllers/inventoryController.js";

export class IphonesExtRouter extends CustomRouter {
    init() {
        this.get('/getlist', ['PUBLIC'], getIphonesItemsList)

        this.get('/getbyName', ['PUBLIC'], getIphoneByName)
    }
}



