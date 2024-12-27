import CustomRouter from "../customs.routes.js";
import { regUser, getUser } from "../../controllers/userClientControllers.js";

export class UsersClientExtRouter extends CustomRouter {
    init() {
        this.get('/getUser', ['PUBLIC'], getUser)

        this.post('/regClientUser', ['PUBLIC'], regUser)
    }
}