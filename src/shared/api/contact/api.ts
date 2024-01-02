import { instance } from '../base'
import type { Contact } from './types'

class ContactApi {
	async getContacts(): Promise<Contact[]> {
		const response = await instance.get('/api/contact')
		return response.data
	}

	async getContact(args: { id: number }): Promise<Contact> {
		const { id } = args
		const response = await instance.get('/api/contact', { params: { id } })
		return response.data
	}

	async postContact(args: { nickname: string; phone: string }): Promise<boolean> {
		const { nickname, phone } = args
		const response = await instance.post('/api/contact', { nickname, phone })
		return !!response.data
	}

	async deleteContact(args: { id: number }): Promise<boolean> {
		const { id } = args
		const response = await instance.delete('/api/contact', { params: { id } })
		return !!response.data
	}
}

export const contactApi = new ContactApi()
