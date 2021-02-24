import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Error404 from './views/pages/Error404.js';

import navBar from './views/components/navbar.js';
import {parseURL} from './lib/parseURL.js';

const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register
};

const router = async () => {
    const header = null || document.getElementById("header_root");
    const content = null || document.getElementById("page_root");

    header.innerHTML = await navBar.render();
    await navBar.after_render();

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