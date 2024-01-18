import styles from '../style'
import { stats } from '../constants'
const Stats: React.FC = () => {
	return (
		<section
			className={`${styles.flexStart} mb-6 flex-grow flex-wrap sm:mb-20`}
		>
			{stats.map((item: any, index) => (
				<div
					className={`mb-2 flex flex-row items-center justify-start gap-7 lg:mb-0`}
					key={item.id}
				>
					{index !== 0 && (
						<span className="h-[13.5px] bg-[rgba(255,255,255,0.6)] md:ml-10 md:mr-3 md:w-[1px]"></span>
					)}
					<h4 className="font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px]">
						{item.value}
					</h4>
					<p className="text-gradient font-poppins text-[15px] font-semibold uppercase leading-[21px] text-white xs:text-[20px] xs:leading-[26px]">
						{item.title}
					</p>
				</div>
			))}
		</section>
	)
}
export default Stats
