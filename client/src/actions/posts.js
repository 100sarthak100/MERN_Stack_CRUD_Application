import {FETCH_ALL, CREATE, DELETE, LIKE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

// action creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
};

export const create = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        const action = {
            type: CREATE,
            payload: data // only new post in the data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const update = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);
        const action = {
            type: UPDATE,
            payload: data // only the updated post is here
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const deleteP = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = {
            type: DELETE,
            payload: id
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const like = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        const action = {
            type: LIKE,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};
