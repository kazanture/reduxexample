/**
 * Created by kazanture on 12/26/16.
 */
const visibilityFilter = (
    state = 'SHOW_ALL',
        action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};