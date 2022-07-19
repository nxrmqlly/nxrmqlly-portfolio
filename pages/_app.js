import '../styles/globals.css'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
	return (
		<motion.div
			key={router.route}
			initial="init"
			animate="anim"
			variants={{
				init: {
					opacity: 0.3
				},
				anim: {
					opacity: 1
				},
			}}>
			<Component {...pageProps} />
		</motion.div>
	)
}

export default MyApp
