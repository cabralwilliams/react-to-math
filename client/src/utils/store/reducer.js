import {
    GET_USER,
    LOG_OUT_USER,
    SET_ADMINISTRATORS,
    SET_ASSIGNED_USERS,
    SET_ACTIVE_ROUTE
} from './actions';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_ASSIGNED_USERS:
            return { ...state, assignedUsers: action.assignedUsers };
        case SET_ADMINISTRATORS:
            return { ...state, administrators: action.administrators };
        case GET_USER:
            return { ...state, user: action.user, userLoggedIn: true };
        case SET_ACTIVE_ROUTE:
            return { ...state, activeRoute: action.activeRoute };
        case LOG_OUT_USER:
            return { ...state, user: {}, assignedUsers: null, administrators: null, userLoggedIn: false };
        default:
            return state;
    }
}

export default reducer;