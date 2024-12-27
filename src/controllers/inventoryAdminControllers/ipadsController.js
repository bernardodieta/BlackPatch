import { ipadService } from "../../services/services.js";
import { response } from "../../utils/response.js";
import { IPadAirOutputDTO } from "../../services/dto/output/iPadDTO_OUTPUT.js";



export const getIpadList = async (req, res) => {
    try {
        const result = await ipadService.getAll();

        if (!Array.isArray(result)) {
            console.error("El resultado no es un array:", result);
            response(res, 500, { message: "Formato inesperado en los datos obtenidos" });
            return;
        }
        const dtoResult = result.map(data => new IPadAirOutputDTO(data));

        response(res, 200, dtoResult);
    } catch (error) {
        console.error("Error en el controlador:", error);
        response(res, 500, { message: "Error al obtener los items" });
    }
};

export const getIpadByName = async (req, res) => {
    try {
        const { ident } = req.query;  // Cambiado de req.body a req.query
        console.log(ident);

        const result = await ipadService.getByName(ident);

        // Si no se encuentra el producto
        if (!result || result.length === 0) {
            return response(res, 404, { message: "Producto no encontrado" });
        }

        response(res, 200, result);
    } catch (error) {
        console.log('Error:', error);
        response(res, 500, { message: "Error al obtener el item por nombre" });
    }
};



