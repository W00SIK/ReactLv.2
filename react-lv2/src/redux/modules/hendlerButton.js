const ADD_BUTTON = "hendlerButton/ADD_BUTTON"
const DELETE_BUTTON = "hendlerButton/DELETE_BUTTON"

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


const initialState = {
    id: 1,
    title: "리액트 공부하기",
    contents: "리액트를 공부해봅시다.",
    isDone: false,
}

const hendlerButton = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BUTTON":
            return [
                ...state,
                {
                    id: state.id = state.length + 1,
                    title: action.payload,
                    contents: action.payload
                }
            ]
        // case "DELETE_BUTTON":
        //     return {

        //     }
        default:
            return state;
    }
}

export default hendlerButton