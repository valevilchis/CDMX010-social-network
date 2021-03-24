export const read = () => {
    const db = firebase.firestore();
    return db.collection('post_invited').get();
}