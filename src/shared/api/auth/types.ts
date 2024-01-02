export type Role = 'admin' | 'user'

export interface Session {
	access_token: string
	username: string
	role: Role
}
