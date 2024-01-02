import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import { sessionReducer } from './session'

const rootReducer = combineReducers({
	sessionReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['session'],
}

export const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer),
	middleware: [thunk],
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
