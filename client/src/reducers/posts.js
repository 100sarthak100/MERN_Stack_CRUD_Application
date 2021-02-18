import {FETCH_ALL, CREATE, DELETE, LIKE, UPDATE } from '../constants/actionTypes';

const reducer = (posts = [], action) => { // state is posts and is empty array initially
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
}

export default reducer;