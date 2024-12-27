import CustomRouter from "../customs.routes.js";
import { getIwatchList, getIwatchByName } from "../../controllers/inventoryAdminControllers/iwatchControllers.js";

export class IwatchExtRouter extends CustomRouter {
    init() {
        this.get('/getlist', ['PUBLIC'], getIwatchList)

        this.get('/getbyName', ['PUBLIC'], getIwatchByName)
    }
}



