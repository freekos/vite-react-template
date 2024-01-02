import { instance } from '../base'
import type { Feedback } from './types'

class FeedbackApi {
	async getFeedbacks(): Promise<Feedback[]> {
		const response = await instance.get('/api/feedback')
		return response.data
	}

	async getFeedback(args: { id: number }): Promise<Feedback> {
		const { id } = args
		const response = await instance.get('/api/feedback', { params: { id } })
		return response.data
	}

	async postFeedback(args: {
		firstname: string
		lastname: string
		email: string
		description: string
	}): Promise<boolean> {
		const { firstname, lastname, email, description } = args
		const response = await instance.post('/api/feedback', { firstname, lastname, email, description })
		return !!response.data
	}

	async deleteFeedback(args: { id: number }): Promise<boolean> {
		const { id } = args
		const response = await instance.delete('/api/feedback', { params: { id } })
		return !!response.data
	}
}

export const feedbackApi = new FeedbackApi()
