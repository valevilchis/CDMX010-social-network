import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Invitado from './views/pages/Invitado.js';
import Page_User from './views/pages/Page_User.js';

import {parseURL} from './lib/parseURL.js';
import {create} from './lib/crud/create.js';
import {read} from './lib/crud/read.js';
import {getPost} from './lib/getPost.js';


const routes = {
    '/': Home,
    '/login': Login,
    '/registro': Register,
    '/invitado': Invitado,
    '/page_user': Page_User
};

const router = async () => {
    const content = null || document.getElementById("page_root");

    const { resource, id, verb } = parseURL();

    const parsserdURL = 
        (resource ? '/' + resource : '/') +
        (id ? '/:id' : '') +
        (verb ? '/' + verb : '');

        const page = routes[parsserdURL];
        content.innerHTML = await page.render();
        await page.after_render();
    };

    const crud = async () => {
        const postForm = document.querySelector('#post-form');
        if(postForm) {
            postForm.addEventListener('submit', async (e) => {
                // const  description = postForm['post-description'];
                // await create(description.value);
                read();
                postForm.reset();
                // description.focus();
                console.log("Enviando....");
            });
        }
    };

    const inscribirse = async () => {
        const formInscribirse = document.querySelector("#form-user-pass");
        if (formInscribirse) {
            formInscribirse.addEventListener('submit', async (e)  => {
                e.preventDefault();
                const registroEmail = document.querySelector("#regist-email").value;
                const registroPass = document.querySelector("#regist-pass").value;
                auth
                    .createUserWithEmailAndPassword(registroEmail,registroPass)
                    .then(userCredential => {
                        formInscribirse.reset();
                        console.log("Creacion de User-Email... Firebase");
                        validacionAuth();
                        ruteo('/page_user');
                        cerrarSesion();
                    })
                    .catch((error) => {
                        formInscribirse.reset();
                        alert("Usuario ya registrado.");
                    })
            });
        }
    };

    const acceso = async () => {
        const formLogin = document.querySelector("#login-usr-pass");
        if(formLogin) {
            formLogin.addEventListener('submit', async (e) => {
                e.preventDefault();
                const loginEmail= document.querySelector("#login-email").value;
                const loginPass = document.querySelector("#login-pass").value;
                auth
                    .signInWithEmailAndPassword(loginEmail,loginPass)
                    .then(userCredential => {
                        formLogin.reset();
                        console.log("Accediendo con Firebase...");
                        validacionAuth();
                        ruteo('/page_user');
                        cerrarSesion();
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    formLogin.reset();
                    console.log(errorCode,errorMessage);
                    alert("Los datos ingresados, son incorrectos")
                });
            });
        }
    };

    const cerrarSesion = async () =>  {
        const btnCerrarSesion = document.querySelector('#cerrarSesion');
        if (btnCerrarSesion) {
            btnCerrarSesion.addEventListener('click', async (e) => {
                e.preventDefault();
                auth
                    .signOut()
                    .then(() => {
                        console.log("cerrar sesion");
                        ruteo('/');
                    });
            });
        };
    };

    const validacionAuth = async () => {
        auth.onAuthStateChanged(user => {
            if(user) {
                console.log("El usuario esta en Linea...")
            } else {
                console.log("El Usuario ya no esta en Linea...");
            };
        });
    };

    const ruteo = async (pathname) => {
        const content = null || document.getElementById("page_root");
        content.innerHTML = routes[window.location.pathname];

        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        );

        const page = routes[pathname];
        content.innerHTML = await page.render();
        await page.after_render();
    };

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);

    window.addEventListener('load', inscribirse);
    window.addEventListener("load", acceso);
    window.addEventListener("load", cerrarSesion);

    window.addEventListener('load',crud);
    window.addEventListener('load', async (e) => {
        const postContainer = document.querySelector('#post-container');
        if(postContainer) {
            getPost((querySnapshot) => {
                postContainer.innerHTML = ' ';
                querySnapshot.forEach(doc => {
                    console.log(doc.data());
        
                    postContainer.innerHTML += `
                    <div class="card-header">${doc.data().title}</div>
                    <div class="card-body">
                        <p class="card-text">${doc.data().description}</p>
                    </div>
                    `;
                });
            });
        }
    });
    
