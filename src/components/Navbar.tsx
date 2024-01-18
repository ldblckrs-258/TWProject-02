import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC<{
	active: 'home' | 'features' | 'product' | 'clients'
}> = ({ active }) => {
	const [toggle, setToggle] = useState(false)
	return (
		<div className="item-center flex justify-between py-6">
			<img src={logo} alt="logo" className="h-[32px] w-[124px]" />
			<ul className="hidden h-[32px] list-none items-center justify-start gap-10 sm:flex ">
				{navLinks.map((navItem: any) => (
					<li
						key={navItem.id}
						className={`${active == navItem.id ? ' text-white' : 'text-dimWhite'} cursor-pointer font-poppins text-base transition-colors hover:text-white`}
					>
						<a href={`#${navItem.id}`}>{navItem.title}</a>
					</li>
				))}
			</ul>

			<div className="flex flex-1 items-center justify-end sm:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu-button"
					className="h-[28px] w-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<AnimatePresence>
					{toggle && (
						<motion.div
							className="bg-black-gradient absolute right-0 top-20 mx-4 my-2 flex rounded-xl p-6"
							initial={{ opacity: 0, x: '100%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '100%' }}
						>
							<ul className="flex h-full list-none flex-col items-center justify-start gap-3 ">
								{navLinks.map((navItem: any) => (
									<li
										key={navItem.id}
										className={`${active == navItem.id ? 'text-white' : 'text-dimWhite'}  item-center flex min-w-[120px] cursor-pointer justify-center font-poppins text-base transition-colors hover:text-white`}
										// onClick={() => setToggle((prev) => !prev)}
									>
										<a href={`#${navItem.id}`}>
											{navItem.title}
										</a>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}
export default Navbar
