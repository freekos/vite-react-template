import { instance } from '@/shared/api'
import { store } from '@/store'

instance.interceptors.request.use(
	(config) => {
		const session = store.getState().sessionReducer.session
		if (session && session.access_token) {
			config.headers['Authorization'] = `Bearer ${session.access_token}`
		}

		return config
	},
	(reject) => {
		return reject
	},
)
