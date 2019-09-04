import axios from 'axios'
import {
    ITEMS_ARE_LOADING,
    FETCH_ITEMS_FAILED,
    FETCH_ITEMS_SUCCEDED
} from '../actions/types'

export function fetchItemsFailed(state = false, action) {
    switch (action.type) {
        case FETCH_ITEMS_FAILED:
            return action.fetchFailed

        default:
            return state
    }
}

export function itemsAreLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_ARE_LOADING:
            return action.areLoading

        default:
            return state
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case FETCH_ITEMS_SUCCEDED:
            return action.items

        default:
            return state
    }
}