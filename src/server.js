import express from 'express'


const server = express()
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log('Server en puerto:', PORT);
})


