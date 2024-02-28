import { configureStore} from '@reduxjs/toolkit'
import cryptoReducer from './reducer/actions'
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        crypto: cryptoReducer}
})


export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;