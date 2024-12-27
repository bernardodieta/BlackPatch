import moment from "moment";
import { createHash } from "../../../utils/utils.js";

export default class UserCreateDto {
    constructor(firstName, lastName, company, roleCompany, email, cel, password, role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.roleCompany = roleCompany;
        this.email = email;
        this.cel = cel;
        this.password = createHash(password);
        this.role = role;
        this.regDate = moment().format();
    }
}