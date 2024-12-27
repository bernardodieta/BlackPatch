import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();

program
    .option('-d', 'Variable para debug', false)
    .option('-p <port>', 'Puerto del servidor', 9090)
    .option('--mode <mode>', 'Modo de trabajo', 'develop')
program.parse();

console.log("Mode Option: ", program.opts().mode);

const environment = program.opts().mode;

dotenv.config({
    path: environment === "production" ? ".env" : ".env"
});


export default {
    port: process.env.SERVER_PORT,  
    mongoUrl: process.env.MONGO_URL, 

}
