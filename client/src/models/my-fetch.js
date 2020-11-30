const API_ROOT = process.env.API_ROOT || 'http://localhost:3001/';

export function myGet(url) {
    return fetch(API_ROOT + url)
        .then(x => x.json())
}

export function myPost(url, data) {
    return fetch(API_ROOT + url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(x => x.json())
}

export function myPut(url, data) {
    return fetch(API_ROOT + url, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(x => x.json())
}

export function myDel(url) {
    return fetch(API_ROOT + url, {
        method: 'DELETE',
    })
        .then(x => x.json())
}