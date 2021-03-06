export const create = (description) => {
    const db = firebase.firestore();
    const response = db.collection('posts').doc().set({
        description
    });
    return response;
};