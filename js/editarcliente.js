import { clientObj, fillObjWInputs } from "./Globals.js";
import loadEventListenners from "./selectors.js"
import UI from "./UI.js";
import ClientsAPI from "./API.js";
import { validateObj } from "./nuevocliente.js";

window.onload = () => {
    loadEventListenners();
    getClient();
}

async function getClient() {
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = parseInt(urlParams.get('id'));

    const client = await new ClientsAPI().getClient(clientId);
    
    if (!client.id) {
        window.location.href = 'index.html';
        return;
    }

    new UI().fillForm(client);
    fillObjWInputs();
    clientObj.id = clientId;
}

export async function updateClient(ev) {
    ev.preventDefault();

    if (validateObj()) {
        await new ClientsAPI().udpdateClient(clientObj);
        window.location.href = 'index.html';
    }
}