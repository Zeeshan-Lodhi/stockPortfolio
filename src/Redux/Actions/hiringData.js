import axios from "axios"

export const hiringFunc = () => async (dispatch) => {
    try {
        dispatch({ type: "HIRING_DATA_REQUEST" })

        const { data } = await axios.get("https://acms-api.herokuapp.com/api/lead/get", config)
        dispatch({ type: "USER_DATA_SUCCESS", payload: data.leads })

    } catch (error) {
        dispatch({ type: "HIRING_DATA_FAIL", payload: "Error occured" })

    }
}

