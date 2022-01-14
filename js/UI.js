import { email_input, enterprise_input, form, name_input, phone_input } from "./selectors.js";

export default class UI {
    constructor() {}
    displayAlert(message, timing = 2.5) {
        if (document.querySelector('.alert')) document.querySelector('.alert').remove();

        const alert = document.createElement('p');

        alert.classList.add(
            'bg-red-100',
            'border-red-400',
            'text-red-700',
            'px-4',
            'py-3',
            'rounded',
            'max-w-lg',
            'mx-auto',
            'mt-6',
            'text-center',
            'alert'
        );

        alert.style.animation = `fade-in-out ${timing}s`;

        alert.innerHTML = `
            <strong class="font-bold">ERROR</strong>
            <span class="block sm:inline">${message}</span>
        `;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, timing*1000);
    }
    displayClients(clients) {
        const tbody = document.querySelector('#listado-clientes');

        clients.forEach(client => {
            const {nombre, email, telefono, empresa, id} = client;

            tbody.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;
        });
    }
    fillForm(client) {
        const {id, nombre, email, telefono, empresa} = client;

        name_input.value = nombre;
        email_input.value = email;
        phone_input.value = telefono;
        enterprise_input.value = empresa;
    }
}