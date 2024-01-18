import {
	// Billing,
	// Business,
	// Button,
	// CardDeal,
	// Clients,
	// CTA,
	// FeedbackCard,
	// Footer,
	// GetStarted,
	Hero,
	Navbar,
	Stats,
	// Testimonials,
} from './components'
import styles from './style'

const App = () => {
	return (
		<div className="w-full overflow-hidden bg-primary">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar active="home" />
				</div>
			</div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					{/* 
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer /> */}
				</div>
			</div>
		</div>
	)
}

export default App
