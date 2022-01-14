export default class ClientsAPI {
    constructor() {
        this.URL = `http://localhost:4000/clientes`;
    }
    async getClients() {
        const response = await fetch(this.URL);
        const data = await response.json();

        return data;
    }
    async getClient(id) {
        const response = await fetch(`${this.URL}/${id}`);
        const data = await response.json();

        return data;
    }
    async newClient(client) {
        try {
            await fetch(this.URL, {
                method: 'POST',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
    async deleteClient(clientId) {
        try {
            await fetch(`${this.URL}/${clientId}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error(error);
        }
    }
    async udpdateClient(client) {
        try {
            await fetch(`${this.URL}/${client.id}`, {
                method: 'PUT',
                body: JSON.stringify(client),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}