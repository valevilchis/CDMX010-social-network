export const getPost = (callback) => {
    const db = firebase.firestore();
    return db.collection('post_invited').onSnapshot(callback);
}