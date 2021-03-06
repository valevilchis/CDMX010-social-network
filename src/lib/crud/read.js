export const read = () => {
    const db = firebase.firestore();
    return db.collection('posts').get();
}