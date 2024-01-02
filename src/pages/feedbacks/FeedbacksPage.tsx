import { type Feedback, feedbackApi } from '@/shared/api'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export function FeedbacksPage() {
	const [feedbacks, setContacts] = useState<Feedback[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const fetchFeedbacks = async () => {
		try {
			setLoading(true)
			const response = await feedbackApi.getFeedbacks()
			setContacts(response)
			setLoading(false)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		fetchFeedbacks()
	}, [])

	const handleDelete = async (id: number) => {
		try {
			setLoading(true)
			const response = await feedbackApi.deleteFeedback({ id })
			fetchFeedbacks()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<main className={styles.page__main}>
			<div className='container'>
				<section className={styles.contacts__section}>
					<h1 className={styles.contacts__title}>Контакты</h1>
					<div className={styles.contacts__list}>
						<FeedbacksTable feedbacks={feedbacks} onDelete={handleDelete} />
					</div>
				</section>
			</div>
		</main>
	)
}

function FeedbacksTable(props: { feedbacks: Feedback[]; onDelete: (args: number) => void }) {
	const { feedbacks, onDelete } = props
	return (
		<table className={styles.contact__table}>
			<thead className={styles.contact__thead}>
				<th>Имя</th>
				<th>Номер</th>
				<th style={{ width: '10%' }}>&nbsp;</th>
			</thead>
			<tbody className={styles.contact__tbody}>
				{feedbacks.map((feedback, index) => (
					<tr key={index}>
						<td>{feedback.firstname}</td>
						<td>{feedback.lastname}</td>
						<td>
							<button className={styles.contact__delete} onClick={() => onDelete(feedback.id)}>
								Удалить
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
