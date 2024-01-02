import { instance } from '../base'

class AccountApi {
	static async deleteAccount(args: { username: string }): Promise<boolean> {
		const { username } = args
		const response = await instance.delete('/api/user', { data: { username } })
		if (response.status === 200) return true
		return false
	}
}

export const accountApi = new AccountApi()
