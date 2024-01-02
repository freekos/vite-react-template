import { instance } from '../base'
import type { Role, Session } from './types'

class AuthApi {
	async signup(args: { username: string; password: string; role: Role }): Promise<boolean> {
		const { username, password, role } = args
		const response = await instance.post('/api/auth', { username, password, role })
		return !!response.data
	}
	async signin(args: { username: string; password: string }): Promise<Session> {
		const { username, password } = args
		const response = await instance.post('/api/auth', { username, password })
		return response.data
	}
}

export const authApi = new AuthApi()
