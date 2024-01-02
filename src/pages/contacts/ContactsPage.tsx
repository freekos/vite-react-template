import { type Contact, contactApi } from '@/shared/api'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export function ContactsPage() {
	const [contacts, setContacts] = useState<Contact[]>([])
	const [loading, setLoading] = useState<boolean>(false)

	const fetchContacts = async () => {
		try {
			setLoading(true)
			const response = await contactApi.getContacts()
			setContacts(response)
			setLoading(false)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		fetchContacts()
	}, [])

	const handleDelete = async (id: number) => {
		try {
			const response = await contactApi.deleteContact({ id })
			fetchContacts()
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
						<ContactsTable contacts={contacts} onDelete={handleDelete} />
					</div>
				</section>
			</div>
		</main>
	)
}

function ContactsTable(props: { contacts: Contact[]; onDelete: (args: number) => void }) {
	const { contacts, onDelete } = props
	return (
		<table className={styles.contact__table}>
			<thead className={styles.contact__thead}>
				<th>Имя</th>
				<th>Номер</th>
				<th style={{ width: '10%' }}>&nbsp;</th>
			</thead>
			<tbody className={styles.contact__tbody}>
				{contacts.map((contact, index) => (
					<tr key={index}>
						<td>{contact.nickname}</td>
						<td>{contact.phone}</td>
						<td>
							<button className={styles.contact__delete} onClick={() => onDelete(contact.id)}>
								Удалить
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
