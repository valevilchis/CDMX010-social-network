import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Error404 from './views/pages/Error404.js';
import Invitado from './views/pages/Invitado.js';

import navBar from './views/components/navbar.js';
import Footer from './views/components/Footer.js';
import {parseURL} from './lib/parseURL.js';

// import {authGoogle, authFacebook} from '../../lib/index.js';

// const btnGoogle = document.querySelector("#login-google");
// const btnFacebook = document.querySelector("#login-facebook");

const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register,
    '/invitado': Invitado
};

const router = async () => {
    const header = null || document.getElementById("header_root");
    const content = null || document.getElementById("page_root");
    const footer = null || document.getElementById("footer_root");

    // header.innerHTML = await navBar.render();
    // await navBar.after_render();

    // footer.innerHTML = await Footer.render();
    // await Footer.after_render();

    const { resource, id, verb } = parseURL();

    const parsserdURL = 
        (resource ? '/' + resource : '/') +
        (id ? '/:id' : '') +
        (verb ? '/' + verb : '');

        const page = routes[parsserdURL] || Error404;
        content.innerHTML = await page.render();
        await page.after_render();
    };

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);

    // //Eventos
// btnGoogle.addEventListener("click", e => {
//     authGoogle(e);
// })

// btnFacebook.addEventListener("click", e => {
//     authFacebook(e);
// })