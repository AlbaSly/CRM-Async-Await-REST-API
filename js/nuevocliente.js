import ClientsAPI from "./API.js";
import { clientObj } from "./Globals.js";
import loadEventListenners from "./selectors.js"
import UI from "./UI.js";

window.onload = () => {
    loadEventListenners();
}

export async function createClient(ev) {
    ev.preventDefault();
    
    if (validateObj()) {
        await new ClientsAPI().newClient(clientObj);
        window.location.href = 'index.html';
    }
}

export function validateObj() {
    if (Object.entries(clientObj).some(entry => entry[1] === '' || entry[1] === 0)) {
        new UI().displayAlert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}