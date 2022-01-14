import { clientObj, fillObjWInputs } from './Globals.js';
import {createClient} from './nuevocliente.js';
import {deleteClient} from './app.js';
import { updateClient } from './editarcliente.js';

export const form = document.querySelector('#formulario');
export const name_input = document.querySelector('#nombre');
export const email_input = document.querySelector('#email');
export const phone_input = document.querySelector('#telefono');
export const enterprise_input = document.querySelector('#empresa');

export const clientsList = document.querySelector('#listado-clientes');

export default function loadEventListenners() {
    if (window.location.pathname === '/nuevo-cliente.html' || window.location.pathname === '/editar-cliente.html') {

        //Fill obj
        fillObjWInputs();

        name_input.addEventListener('input', updateObjData);
        email_input.addEventListener('input', updateObjData);
        phone_input.addEventListener('input', updateObjData);
        enterprise_input.addEventListener('input', updateObjData);
    }

    switch(window.location.pathname) {
        case '/nuevo-cliente.html':
            form.addEventListener('submit', createClient);
        break;
        case '/editar-cliente.html':
            form.addEventListener('submit', updateClient);
        break;
        case '/index.html':
            clientsList.addEventListener('click', deleteClient);    
        break;
    }
}

function updateObjData(ev) {
    clientObj[ev.target.name] = ev.target.value;

    console.log(clientObj);
}
