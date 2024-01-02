import { useAppSelector } from '@/store'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router'

interface AuthProtectProps {
	children: ReactNode
}

export function AuthProtect(props: AuthProtectProps) {
	const { children } = props
	const token = useAppSelector((state) => state.sessionReducer.session?.access_token)
	const isAuth = !!token

	if (!isAuth) {
		return <Navigate to='/admin/signin' />
	}

	return <>{children}</>
}
