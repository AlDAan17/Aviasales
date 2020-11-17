import {getIdFromAPI, getTicketsFromAPI} from "../services/ticket-service";

export const showAll = (isActive) => ({
    type: 'SHOW_ALL',
    active: isActive,
});

export const showNothing = (isActive) => ({
    type: 'SHOW_WITHOUT_TRANSFERS',
    active: isActive,
});

export const showOne = (isActive) => ({
    type: 'SHOW_WITH_ONE_TRANSFER',
    active: isActive,
});

export const showTwo = (isActive) => ({
    type: 'SHOW_WITH_TWO_TRANSFERS',
    active: isActive,
});

export const showThree = (isActive) => ({
    type: 'SHOW_WITH_THREE_TRANSFERS',
    active: isActive,
});

export const selectTab = (selected) => ({
    type: 'SELECT_TAB',
    selected,
});

const getTickets = (tickets) => ({
    type: 'GET_TICKETS',
    tickets,
});

export const asyncGetTickets = () => {
    return async function (dispatch) {
        try {
            const response = await getIdFromAPI();
            const {searchId} = response;

            const response2 = await getTicketsFromAPI(searchId);
            const {tickets} = response2;

            const ticketsWithIds = tickets.map((ticket) => {
                // console.log('kek', ticket)
                const id = `${ticket.price}${ticket.segments[0].duration}${ticket.segments[1].date}`;
                return {id, ...ticket};
            });

            dispatch(getTickets(ticketsWithIds));
        }
        catch (e) {
            console.log(e)
        }
    };
};