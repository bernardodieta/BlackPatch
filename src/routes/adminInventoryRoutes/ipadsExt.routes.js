import CustomRouter from "../customs.routes.js";
import { getIpadList, getIpadByName } from "../../controllers/inventoryAdminControllers/ipadsController.js";

export class IPadExtRouter extends CustomRouter {
    init() {
        this.get('/getlist', ['PUBLIC'], getIpadList)

        this.get('/getByName', ['PUBLIC'], getIpadByName)
    }
}