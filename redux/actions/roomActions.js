import axios from 'axios'
import absoluteUrl from 'next-absolute-url'
import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS,
    ROOM_DETAILS_FAIL,
    ROOM_DETAILS_SUCCESS
} from '../constants/roomConstants'

// Get All rooms
export const getRooms = (req) => async (dispatch) => {
    try {
        const { origin } = absoluteUrl(req)
        const { data } = await axios.get(`${origin}/api/rooms`)
        dispatch({
            type: ALL_ROOMS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_ROOMS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get Room Details
export const getRoomDetails = (req, id) => async (dispatch) => {
    try {
        const { origin } = absoluteUrl(req)
        const { data } = await axios.get(`${origin}/api/rooms/${id}`)
        dispatch({ 
            type: ROOM_DETAILS_SUCCESS,
            payload: data.room
        })
    } catch (error) {
        dispatch({
            type: ROOM_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}