import { AuthProtect } from '@/features/AuthProtect'
import { RootLayout } from '@/layouts'
import { Navigate, Outlet, Route, Routes } from 'react-router'

import { ContactsPage } from './contacts'
import { FeedbacksPage } from './feedbacks'
import { SignInPage } from './signin'

export function Pages() {
	return (
		<Routes>
			<Route path='/admin'>
				<Route index element={<Navigate to='/admin/contacts' />} />
				<Route path='signin' Component={SignInPage} />
				<Route
					element={
						<AuthProtect>
							<Outlet />
						</AuthProtect>
					}
				>
					<Route path='contacts' Component={ContactsPage} />
					<Route path='feedbacks' Component={FeedbacksPage} />
				</Route>
			</Route>
		</Routes>
	)
}
