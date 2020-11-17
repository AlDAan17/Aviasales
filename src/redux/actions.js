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
