import ClientsAPI from "./API.js";
import loadEventListenners, { clientsList } from "./selectors.js";
import UI from "./UI.js";

window.onload = () => {
    loadEventListenners();
    loadClients();
}

export async function loadClients() {
    const clients = await new ClientsAPI().getClients();
    new UI().displayClients(clients);
}

export async function deleteClient(ev) {
    if (ev.target.classList.contains('eliminar')) {
        const clientId = parseInt(ev.target.dataset.cliente);
        
        if (confirm('Se eliminará el cliente, ¿Continuar?')) {
            await new ClientsAPI().deleteClient(clientId);
        }
    }
}