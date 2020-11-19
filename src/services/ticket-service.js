async function request(url, options = {}) {
    let body;
    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw Error(`Could not fetch ${url}. Status: ${res.status}`);
        }

        body = await res.json();
    } catch (err) {
        return request(url, options);
    }
    return body;
}

export const getIdFromAPI = () => {
    return request(`https://aviasales-test-api.java-mentor.com/search`);
}

export const getTicketsFromAPI = (searchId) => {
    return request(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`);
}