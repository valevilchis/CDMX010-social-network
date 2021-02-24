export const parseURL = () => {
    const path = location.hash.slice(1).toLowerCase() || '/';
    const params = path.split('/');

    const request = {
        resource: params[0] || null,
        id: params[1] || null,
        verb: params[2] || null
    };

    console.log('App parse URL:', request);
    return request;
};