import Home from './views/pages/Home.js';
import Login from './views/pages/Login.js';
import Register from './views/pages/Register.js';
import Invitado from './views/pages/Invitado.js';
import Page_User from './views/pages/Page_User.js';

import {parseURL} from './lib/parseURL.js';
import {create, getAllPublicaciones, deletePost, getPost, update} from './lib/index.js'

const db = firebase.firestore();
let estadoEditar = false;
let id = "";

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

    const publicaciones = async () => {
        const formPubli = document.querySelector("#form-publicaciones");
        if(formPubli) {
            formPubli.addEventListener("submit", async (e) =>{
                e.preventDefault();
                const publicacion = formPubli["publicacion-descripcion"];

                if(!estadoEditar) {
                    await create(db, publicacion.value);
                } else {
                    await update(id, {
                        publicacion: publicacion.value })
                }

                estadoEditar = false;
                formPubli["btn-publicar"].innerText = "Publicar";

                formPubli.reset();
                publicacion.focus();
            });
        };
    };

    window.addEventListener('hashchange', router);
    window.addEventListener('load', router);

    window.addEventListener('load', inscribirse);
    window.addEventListener("load", acceso);
    window.addEventListener("load", cerrarSesion);
    window.addEventListener("load", publicaciones);

    window.addEventListener("load", async (e) => {
        const containerPost = document.querySelector("#container-publicaciones");

        if (containerPost) {
            getAllPublicaciones((querySnapshot) => {
                containerPost.innerHTML = "";
                querySnapshot.forEach(element => {
                    const descripcion = element.data();
                    descripcion.id = element.id;

                    containerPost.innerHTML += `
                    <div class="card card-body mt-2 border-primary">
                        <p>${descripcion.publicacion}</p>
                        <div>
                            <button class="btn btn-warning btn-editar" data-id="${descripcion.id}">Editar</button>
                            <button class="btn btn-danger btn-eliminar" data-id="${descripcion.id}">Eliminar</button>
                        </div>
                    </div>
                    `;

                    const btnsEliminar = document.querySelectorAll(".btn-eliminar");
                    btnsEliminar.forEach(btn => {
                        btn.addEventListener("click", async (e) =>  {
                            await deletePost(e.target.dataset.id);
                        });
                    });

                    const btnsEditar = document.querySelectorAll(".btn-editar");
                    btnsEditar.forEach(btn => {
                        const formPubli = document.querySelector("#form-publicaciones");
                        btn.addEventListener("click", async (e) =>  {
                            const doc = await getPost(e.target.dataset.id);
                            estadoEditar = true;
                            id = doc.id;
                            formPubli["publicacion-descripcion"].value = doc.data().publicacion;
                            formPubli["btn-publicar"].innerText = "Actualizar";
                        });
                    });
                });
            });
        }
    });