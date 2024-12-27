import CustomRouter from "../customs.routes.js";
import { getmacbookProList, getmacbookProByName } from "../../controllers/inventoryAdminControllers/macbookProContollers.js";

export class MacbookProExtRouter extends CustomRouter {
    init() {
        this.get('/getlist', ['PUBLIC'], getmacbookProList)

        this.get('/getbyName', ['PUBLIC'], getmacbookProByName)
    }
}



