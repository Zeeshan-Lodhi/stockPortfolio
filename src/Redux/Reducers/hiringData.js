export const hiringReducer = (state = {}, action) => {
    switch (action.type) {
        case "HIRING_DATA_REQUEST":
            return { loading: true }

        case "HIRING_DATA_SUCCESS":
            return {
                hiringInfo: action.payload,
                ...state,
                loading: false,
            }

        case "HIRING_DATA_FAIL":
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}
