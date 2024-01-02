import { Pages } from '@/pages'

import './index.scss'
import { withProvider } from './providers'

function App() {
	return (
		<div className='app'>
			<Pages />
		</div>
	)
}

export default withProvider(App)
