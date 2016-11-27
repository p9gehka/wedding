export const  next = {
    type: 'NEXT_LEVEL'
};
export const  noPrince = {
    type: 'NO_PRINCE'
};

export const timeIsOver = {
    type: 'TIME_IS_OVER',
};
export const setName = (name) => {
    return {
        type: 'SET_NAME',
        name
    };
};

export const addCoins = (coins) => {
    return {
        type: 'ADD_COINS',
        coins
    };
};

export const toRoom = () => dispatch => {
    dispatch(setTimer(false));
    dispatch(next);
};

export const selectPhoto = (name, photo) => {
    return {
        type: 'SELECT_PHOTO',
        name,
        photo
    };
};
