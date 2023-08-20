export const buy = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'buy',
            payload: amount
        })
    }
}

export const refund = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'refund',
            payload: amount
        })
    }
}