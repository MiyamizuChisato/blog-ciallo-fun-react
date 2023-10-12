import {createSlice} from '@reduxjs/toolkit';

export interface applicationState {
    modal: {
        login: boolean
    }
}

const initialState = {
    modal: {
        login: false
    }
} as applicationState
export const application = createSlice({
    name: "application",
    initialState,
    reducers: {
        loginModalToggle(state) {
            state.modal.login = !state.modal.login
        }
    }
})
export default application.reducer
export const {loginModalToggle} = application.actions
