import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './UserReducer'

const store = configureStore({
    reducer:{
        user: UserReducer,
        userTwo: UserReducer,
    }
})

export default store;