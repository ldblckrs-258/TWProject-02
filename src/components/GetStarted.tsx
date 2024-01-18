import styles from '../style'
import { arrowUp } from '../assets'
import { motion } from 'framer-motion'

const GetStarted: React.FC = () => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95, opacity: 0.7 }}
			className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer select-none rounded-full p-[2px]`}
		>
			<div
				className={`${styles.flexCenter} h-full w-full flex-col rounded-full bg-primary`}
			>
				<div className={`${styles.flexStart} flex-row`}>
					<p className="mr-2 font-poppins text-lg font-medium leading-[23px]">
						<span className="text-gradient"> Get</span>
					</p>
					<img
						src={arrowUp}
						alt="arrowUp"
						className="h-[23px] w-[23px] object-contain"
					/>
				</div>
				<p className="font-poppins text-lg font-medium leading-[23px]">
					<span className="text-gradient"> Started</span>
				</p>
			</div>
		</motion.div>
	)
}
export default GetStarted
