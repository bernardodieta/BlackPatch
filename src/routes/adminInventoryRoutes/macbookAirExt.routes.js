import CustomRouter from "../customs.routes.js";
import { getmacbookAirList, getmacbookAirByName } from "../../controllers/inventoryAdminControllers/macbookAirControllers.js";

export class MacbookAirExtRouter extends CustomRouter {
    init() {
        this.get('/getlist', ['PUBLIC'], getmacbookAirList)

        this.get('/getbyName', ['PUBLIC'], getmacbookAirByName)
    }
}



