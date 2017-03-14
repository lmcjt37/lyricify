import Config from '../configs/core';

export function get(url) {
    return fetch(url)
        .then((response) => response.json());
}

export function searchArtist(query) {
    const requestUrl = `${Config.BASE_URL}artist.search?q_artist=${query}&page_size=20&page=0&apikey=${Config.API_KEY}`;
    return get(requestUrl)
        .then((response) => {
            return response.songs ? response.songs : [];
        });
}

export function searchSong(query) {
    const requestUrl = `${Config.BASE_URL}matcher.lyrics.get?q_track=${query}&apikey=${Config.API_KEY}`;
    return get(requestUrl)
        .then((response) => {
            return response.songs ? response.songs : [];
        });
}
