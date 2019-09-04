import {
    ITEMS_ARE_LOADING,
    FETCH_ITEMS_FAILED,
    FETCH_ITEMS_SUCCEDED
} from '../actions/types'

import axios from 'axios'

export function fetchItemsFailed(bool) {
    return {
        type: FETCH_ITEMS_FAILED,
        fetchFailed: bool
    }
}

export function itemsAreLoading(bool) {
    return {
        type: ITEMS_ARE_LOADING,
        areLoading: bool
    }
}

export function fetchItemsSucceded(items) {
    return {
        type: FETCH_ITEMS_SUCCEDED,
        items: items
    }
}

export function fetchItems(url) {
    return (dispatch) => {
        dispatch(itemsAreLoading(true))

        axios.get(url)
            .then(function (response) {
                if (response.status != 200) {
                    throw Error(`Response status: ${response.status}`)
                } else {
                    dispatch(fetchItemsSucceded(response.data))
                }
            })
            .catch(function (error) {
                console.log(error)
                dispatch(fetchItemsFailed(true))
            })

        dispatch(itemsAreLoading(false))
    }
}