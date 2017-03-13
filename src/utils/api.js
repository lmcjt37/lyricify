export function get(url) {
    return fetch(url)
        .then((response) => response.json());
}

export function search(query) {
    const requestUrl = "";
    return get(requestUrl)
        .then((response) => {
            return response.songs ? response.songs : [];
        });
}
