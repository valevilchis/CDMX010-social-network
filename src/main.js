import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Error404 from './views/pages/Error404.js';
import Invitado from './views/pages/Invitado.js';

import {parseURL} from './lib/parseURL.js';
import {create} from './lib/crud/create.js';
import {read} from './lib/crud/read.js';
import {getPost} from './lib/getPost.js';

const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register,
    '/invitado': Invitado
};

const router = async () => {
const content = null || document.getElementById("page_root");

    const { resource, id, verb } = parseURL();

    const parsserdURL = 
        (resource ? '/' + resource : '/') +
        (id ? '/:id' : '') +
        (verb ? '/' + verb : '');

        const page = routes[parsserdURL] || Error404;
        content.innerHTML = await page.render();
        await page.after_render();
    };

    const crud = async () => {
        const postForm = document.querySelector('#post-form');

        postForm.addEventListener('submit', async (e) => {

            const  description = postForm['post-description'];

            await create(description.value);

            read();
            postForm.reset();
            description.focus();

            console.log("Enviando....");
        });
    }

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);
    window.addEventListener('load',crud);

    window.addEventListener('load', async (e) => {
        const postContainer = document.querySelector('#post-container');
        getPost((querySnapshot) => {
            postContainer.innerHTML = ' ';
            querySnapshot.forEach(doc => {
                console.log(doc.data());
    
                postContainer.innerHTML += `
                    <div class="card card-body mt-2 border-primary" >
                        <p>${doc.data().description}</p>
                    </div>
                `;
            });
        });
    });
