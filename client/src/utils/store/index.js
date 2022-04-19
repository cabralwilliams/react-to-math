import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    user: {},
    administrators: null,
    assignedUsers: null,
    activeRoute: "/",
    userLoggedIn: false
}

const store = createStore(reducer,initialState);

export default store;