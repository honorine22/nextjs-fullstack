import { combineReducers } from "redux";
import { authReducer } from "./userReducers";
import { allRoomsReducer, roomDetailsReducer } from "./roomReducers";
const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomDetailsReducer,
    auth: authReducer
})

export default reducer