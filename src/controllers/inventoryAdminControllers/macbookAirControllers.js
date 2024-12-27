import { MacBookAirOutputDTO } from "../../services/dto/output/macBookAirDTO_OUTPUT.js";
import { response } from "../../utils/response.js";
import { macbookAirService } from "../../services/services.js";

export const getmacbookAirList = async (req, res) => {
  try {
    const result = await macbookAirService.getAll();

    if (!Array.isArray(result)) {
      console.error("El resultado no es un array:", result);
      response(res, 500, {
        message: "Formato inesperado en los datos obtenidos",
      });
      return;
    }

    const dtoResult = result.map((data) => new MacBookAirOutputDTO(data));

    response(res, 200, dtoResult);
  } catch (error) {
    console.error("Error en el controlador:", error);
    response(res, 500, { message: "Error al obtener los items" });
  }
};

export const getmacbookAirByName = async (req, res) => {
  try {
    const { ident } = req.query; 
    console.log(ident);

    const result = await macbookAirService.getByName(ident);


    if (!result || result.length === 0) {
      return response(res, 404, { message: "Producto no encontrado" });
    }

    response(res, 200, result);
  } catch (error) {
    console.log("Error:", error);
    response(res, 500, { message: "Error al obtener el item por nombre" });
  }
};
