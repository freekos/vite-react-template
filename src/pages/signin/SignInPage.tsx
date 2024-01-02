/* eslint-disable jsx-a11y/label-has-associated-control */
import { authApi } from '@/shared/api'
import { setSession, useAppDispatch, useAppSelector } from '@/store'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Navigate } from 'react-router'

import styles from './styles.module.scss'

interface FormData {
	username: string
	password: string
}

export function SignInPage() {
	const [loading, setLoading] = useState<boolean>(false)
	const {
		formState: { errors },
		control,
		handleSubmit,
		setError,
		reset,
	} = useForm<FormData>({
		defaultValues: {
			username: '',
			password: '',
		},
	})
	const token = useAppSelector((state) => state.sessionReducer.session?.access_token)
	const isAuth = !!token
	const dispatch = useAppDispatch()

	const onSubmit = async (data: FormData) => {
		try {
			setLoading(true)
			const response = await authApi.signin(data)
			dispatch(setSession(response))
			setLoading(false)
			reset()
		} catch (err) {
			setError('username', { message: 'Не правильный имя пользователя' })
			setError('username', { message: 'Не правильный пароль' })
		}
	}

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<main className={styles.page__main}>
			<div className='container'>
				<section className={styles.page__signin}>
					<h1 className={styles.signin__title}>Вход</h1>
					<form className={styles.signin__form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							control={control}
							name='username'
							rules={{
								required: {
									message: 'Поле обьязательное',
									value: true,
								},
							}}
							render={({ field }) => (
								<div className={styles.signin__textfield}>
									<label className={styles.signin__label}>Имя пользователя</label>
									<input className={styles.signin__input} {...field} />
									{errors.username && <span className={styles.signin__error}>{errors.username.message}</span>}
								</div>
							)}
						/>
						<Controller
							control={control}
							name='password'
							rules={{
								required: {
									message: 'Поле обьязательное',
									value: true,
								},
							}}
							render={({ field }) => (
								<div className={styles.signin__textfield}>
									<label className={styles.signin__label}>Пароль</label>
									<input className={styles.signin__input} {...field} />
									{errors.password && <span className={styles.signin__error}>{errors.password.message}</span>}
								</div>
							)}
						/>
						<button className={styles.signin__send} disabled={loading}>
							Войти
						</button>
					</form>
				</section>
			</div>
		</main>
	)
}
