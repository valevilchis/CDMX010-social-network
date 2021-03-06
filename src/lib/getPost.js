export const getPost = (callback) => {
    const db = firebase.firestore();
    return db.collection('posts').onSnapshot(callback);
}