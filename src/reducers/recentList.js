import {
    SAVE_RECENT_LIST
} from 'actions/types';

export default function (state = [], action) {

    if(action.type === SAVE_RECENT_LIST) {
        
        return [...state, action.payload];
    }

    return state;
}
