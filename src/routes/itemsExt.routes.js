import CustomRouter from "./customs.routes.js";


export class ItemsExtRouter extends CustomRouter{
    init(){
        this.get('/',['PUBLIC'], getItemsList)
    }
}