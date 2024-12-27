import { userService } from "../services/services.js"
import { response } from "../utils/response.js"
import UserCreateDto from "../services/dto/inputs/userClientDTO.js"
export const getUser = async (req, res) => {
    try {
        const { userId } = req.body
        const result = await userService.getUserById(userId)
        response(res, 200, result)
    } catch (error) {
        console.log('ocurrio un error al obtener el usuario');
    }
}

export const regUser = async (req, res) => {
    try {
        const { firstName, lastName, company, roleCompany, email, cel, password, role } = req.body;

        // Crea un nuevo usuario
        const newUser = new UserCreateDto(firstName, lastName, company, roleCompany, email, cel, password, role);
console.log(newUser);

        // Registra el usuario con el objeto completo
        const result = await userService.registerUser(newUser);

        // Respuesta exitosa
        response(res, 200, result);
    } catch (error) {
        console.log(error);

        // Respuesta en caso de error
        response(res, 500, { message: "Error al registrar el usuario" });
    }
};