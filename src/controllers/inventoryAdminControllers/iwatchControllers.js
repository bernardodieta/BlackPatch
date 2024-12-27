import { iwatchService } from "../../services/services.js";
import { response } from "../../utils/response.js";
import { IWatchOutputDTO } from "../../services/dto/output/appleWatchDTO_OUTPUT.js";



export const getIwatchList = async (req, res) => {
    try {
        const result = await iwatchService.getAll();

        if (!Array.isArray(result)) {
            console.error("El resultado no es un array:", result);
            response(res, 500, { message: "Formato inesperado en los datos obtenidos" });
            return;
        }
        const dtoResult = result.map(data => new IWatchOutputDTO(data));

        response(res, 200, dtoResult);
    } catch (error) {
        console.error("Error en el controlador:", error);
        response(res, 500, { message: "Error al obtener los items" });
    }
};

export const getIwatchByName = async (req, res) => {
    try {
        const { ident } = req.query; 
        console.log(ident);

        const result = await iwatchService.getByName(ident);
     
        if (!result || result.length === 0) {
            return response(res, 404, { message: "Producto no encontrado" });
        }

        response(res, 200, result);
    } catch (error) {
        console.log('Error:', error);
        response(res, 500, { message: "Error al obtener el item por nombre" });
    }
};



