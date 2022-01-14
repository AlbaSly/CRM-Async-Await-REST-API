import { email_input, enterprise_input, name_input, phone_input } from "./selectors.js";

export let clientObj = {
    nombre: '',
    email: '',
    telefono: '',
    empresa: ''
}

export function fillObjWInputs() {
    clientObj.nombre = name_input.value;
    clientObj.email = email_input.value;
    clientObj.telefono = phone_input.value;
    clientObj.empresa = enterprise_input.value;
}