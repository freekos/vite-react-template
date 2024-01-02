import { type ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

export function withRouter(children: () => ReactNode) {
	return () => {
		return <BrowserRouter>{children()}</BrowserRouter>
	}
}
