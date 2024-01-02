import axios from 'axios'

export type RequestStatus = 'idle' | 'pending' | 'success' | 'fail'

export const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})
