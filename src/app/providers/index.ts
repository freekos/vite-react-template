import compose from 'compose-function'

import { withRedux } from './with_redux'
import { withRouter } from './with_router'

export const withProvider = compose(withRouter, withRedux)
