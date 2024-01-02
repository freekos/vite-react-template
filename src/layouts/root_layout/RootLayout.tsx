import { Logo } from '@/shared/assets'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

interface NavLink {
	title: string
	href: string
}

const NAV_LINKS: NavLink[] = [
	{ title: 'Контакты', href: '/admin/contacts' },
	{ title: 'Отзывы', href: '/admin/feedbacks' },
]

export function RootLayout() {
	return (
		<div className={styles.root}>
			<aside className={styles.root__aside}>
				<div className={styles.nav__logo}>
					<img src={Logo} alt='' />
				</div>
				{NAV_LINKS.map((item, index) => (
					<Link to={item.href} className={styles.nav__item} key={index}>
						<h5>{item.title}</h5>
					</Link>
				))}
			</aside>
			<div className={styles.root__content}>
				<Outlet />
			</div>
		</div>
	)
}
