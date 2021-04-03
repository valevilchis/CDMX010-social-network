export const create = (db, publicacion) => {
    db.collection("publicaciones").doc().set({
        publicacion
    });
};

export const getPublicaciones = () => {
    const db = firebase.firestore();
    return db.collection("publicaciones").get();  
};

export const getAllPublicaciones = (callback) => {
    const db = firebase.firestore();
    return db.collection("publicaciones").onSnapshot(callback);
};

export const deletePost = (id) => {
    const db = firebase.firestore();
    return db.collection("publicaciones").doc(id).delete();
};

export const getPost = (id) => {
    const db = firebase.firestore();
    return db.collection("publicaciones").doc(id).get();
};

export const update = (id, publicacion) => {
    const db = firebase.firestore();
    return db.collection("publicaciones").doc(id).update(publicacion);
};