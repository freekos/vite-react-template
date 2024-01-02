import { persistor, store } from '@/store'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export function withRedux(children: () => ReactNode) {
	return () => (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children()}
			</PersistGate>
		</Provider>
	)
}
