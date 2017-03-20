import Config from '../configs/core';

export function get(url) {
    return fetch(url)
        .then((response) => response.json());
}

export function searchArtists(query) {
    const requestUrl = `${Config.BASE_URL}artist.search?q_artist=${query}&page_size=20&page=0&apikey=${Config.API_KEY}`;
    return get(requestUrl)
        .then((response) => {
            const artistList = response.message.body.artist_list;
            return artistList ? artistList : [];
        });
}

export function searchAlbums(query) {
    const requestUrl = `${Config.BASE_URL}artist.albums.get?artist_id=${query}&g_album_name=1&apikey=${Config.API_KEY}`;
    return get(requestUrl)
        .then((response) => {
            const albumList = response.message.body.album_list;
            return albumList ? albumList : [];
        });
}

export function searchTracks(query) {
    const requestUrl = `${Config.BASE_URL}album.tracks.get?album_id=${query}&f_has_lyrics=1&apikey=${Config.API_KEY}`;
    return get(requestUrl)
        .then((response) => {
            const trackList = response.message.body.track_list;
            return trackList ? trackList : [];
        });
}
