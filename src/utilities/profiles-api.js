import sendRequest from './send-request'

const BASE_URL = '/api/profiles'

function createProfile() { 
    return sendRequest(BASE_URL)
}

export function addToWatchList(coinId) { 
    return sendRequest(`${BASE_URL}/watchlist/${coinId}`, 'POST')
}

function pushCoinProfile(profileId) { 
    return sendRequest(`${BASE_URL}/${profileId}`)
}