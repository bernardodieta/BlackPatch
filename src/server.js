import express from 'express'
import { IphonesExtRouter } from './routes/adminInventoryRoutes/iphonesExt.routes.js';
import MongoSingleton from './config/mongodb-singleton.js';
import { IPadExtRouter } from './routes/adminInventoryRoutes/ipadsExt.routes.js';
import { IwatchExtRouter } from './routes/adminInventoryRoutes/iwatchExt.routes.js';
import { MacbookProExtRouter } from './routes/adminInventoryRoutes/macbookProExt.routes.js';
import { MacbookAirExtRouter } from './routes/adminInventoryRoutes/macbookAirExt.routes.js';
import { UsersClientExtRouter } from './routes/auth/clientAuth.routes.js';


const server = express()
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const macbookairExtRouter = new MacbookAirExtRouter()
const iwatchExtRouter = new IwatchExtRouter()
const iphonesExtRouter = new IphonesExtRouter()
const ipadExtRouter = new IPadExtRouter()
const macbookProExtRouter = new MacbookProExtRouter()
const usersExtRouter = new UsersClientExtRouter()

server.use('/api/users', usersExtRouter.getRouter())
server.use('/api/macbookair', macbookairExtRouter.getRouter())
server.use('/api/macbookpro', macbookProExtRouter.getRouter())
server.use('/api/iwatch', iwatchExtRouter.getRouter())
server.use('/api/ipads', ipadExtRouter.getRouter())
server.use('/api/iphones', iphonesExtRouter.getRouter())




const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log('Server en puerto:', PORT);
})

const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance()
    } catch (error) {
        // req.logger.error(`${req.method} en ${req.url} - Error:'Error al Conectar con la base de datos.' ${error} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)
        //throw new DatabaseError('Error al Conectar con la base de datos.')
        console.log('error al contectar a la base de datos');

    }
};
mongoInstance();