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
    return request(`https://front-test.beta.aviasales.ru/search`);
}

export const getTicketsFromAPI = (searchId) => {
    return request(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
}