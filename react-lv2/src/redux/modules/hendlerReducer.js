const ADD_BUTTON = "hendlerButton/ADD_BUTTON"
const DELETE_BUTTON = "hendlerButton/DELETE_BUTTON"
const CHANGE_BUTTON = "hendlerButton/CHANGE_BUTTON"


export const addBtn = (payload) => {
    return {
        type: ADD_BUTTON,
        payload
    }
}
export const deleteBtn = (payload) => {
    return {
        type: DELETE_BUTTON,
        payload
    }
}

export const changeBtn = (payload) => {
    return {
        type: CHANGE_BUTTON,
        payload
    }
}


export const initialState = [
    {
        id: 1,
        title: "리액트 공부하기",
        contents: "리액트를 공부해봅시다.",
        isDone: false,
    },
];


const hendlerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUTTON:
            return [...state, action.payload];
        case DELETE_BUTTON:
            return state.filter((item) => item.id !== action.payload);
        case CHANGE_BUTTON:
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, isDone: !item.isDone };
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
};

export default hendlerReducer