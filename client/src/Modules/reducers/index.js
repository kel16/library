import {
    combineReducers
} from 'redux'

import {
    items,
    itemsAreLoading,
    fetchItemsFailed
} from './itemReducer'

export default combineReducers({
    items,
    itemsAreLoading,
    fetchItemsFailed
})