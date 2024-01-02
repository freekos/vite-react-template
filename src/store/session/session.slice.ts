import type { RequestStatus, Session } from '@/shared/api'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
	session: Session | null
	status: RequestStatus
}

const initialState: SessionState = {
	session: null,
	status: 'idle',
}

const sessionSlice = createSlice({
	name: 'session',
	initialState: initialState,
	reducers: {
		removeSession() {
			return { session: null, status: 'idle' }
		},
		setSession(state, action: PayloadAction<Session>) {
			return { ...state, session: action.payload }
		},
	},
})

export const { removeSession, setSession } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer
