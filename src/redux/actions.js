import {getIdFromAPI, getTicketsFromAPI} from "../services/ticket-service";
import {
    SHOW_ALL,
    SHOW_WITHOUT_TRANSFERS,
    SHOW_WITH_ONE_TRANSFER,
    SHOW_WITH_TWO_TRANSFERS,
    SHOW_WITH_THREE_TRANSFERS,
    SELECT_TAB,
    TICKETS_RECEIVED,
    TICKETS_NOT_RECEIVED,
} from './action-types';

export const showAll = (isActive) => ({
    type: SHOW_ALL,
    active: isActive,
});

export const showNothing = (isActive) => ({
    type: SHOW_WITHOUT_TRANSFERS,
    active: isActive,
});

export const showOne = (isActive) => ({
    type: SHOW_WITH_ONE_TRANSFER,
    active: isActive,
});

export const showTwo = (isActive) => ({
    type: SHOW_WITH_TWO_TRANSFERS,
    active: isActive,
});

export const showThree = (isActive) => ({
    type: SHOW_WITH_THREE_TRANSFERS,
    active: isActive,
});

export const selectTab = (selected) => ({
    type: SELECT_TAB,
    selected,
});

const ticketsReceived = (tickets, stop) => ({
    type: TICKETS_RECEIVED,
    tickets,
    stop,
});

const ticketsNotReceived = () => ({
    type: TICKETS_NOT_RECEIVED,
});

export const asyncGetTickets = () => {
    return async function (dispatch) {
        try {
            const response = await getIdFromAPI();
            const {searchId} = response;

            while (true) {
                const {tickets, stop} = await getTicketsFromAPI(searchId);
                const ticketsWithIds = tickets.map((ticket) => {
                    const id = `${ticket.price}${ticket.segments[0].duration}${ticket.segments[1].date}`;
                    return {id, ...ticket};
                });
                dispatch(ticketsReceived(ticketsWithIds, stop));
                if (stop) {
                    break;
                }
            }
        } catch (e) {
            dispatch(ticketsNotReceived());
        }
    };
};