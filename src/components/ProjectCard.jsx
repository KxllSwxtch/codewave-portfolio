import PropTypes from 'prop-types'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({
	title,
	description,
	image,
	tech,
	demoLink,
	codeLink,
}) => {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
			<div className='overflow-hidden'>
				<img
					src={image}
					alt={title}
					className='w-full h-48 object-contain transition-transform duration-300 hover:scale-110'
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-2xl font-bold mb-2 text-black'>{title}</h3>
				<p className='text-gray-600 mb-4'>{description}</p>
				<div className='flex flex-wrap gap-2 mb-4'>
					{tech.map((item, index) => (
						<span
							key={index}
							className='text-sm bg-primaryBlue text-white px-2 py-1 rounded-md'
						>
							{item}
						</span>
					))}
				</div>
				<div className='flex justify-between'>
					<a
						href={demoLink}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-1 text-primaryRed hover:text-darkRed transition-colors'
					>
						<FaExternalLinkAlt />
						Демо
					</a>
					{/* <a
						href={codeLink}
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-1 text-primaryRed hover:text-darkRed transition-colors'
					>
						<FaGithub />
						Код
					</a> */}
				</div>
			</div>
		</div>
	)
}

// PropTypes для валидации свойств
ProjectCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	tech: PropTypes.arrayOf(PropTypes.string).isRequired,
	demoLink: PropTypes.string.isRequired,
	codeLink: PropTypes.string.isRequired,
}

// Значения по умолчанию (опционально)
ProjectCard.defaultProps = {
	image: 'https://via.placeholder.com/400x300',
	demoLink: '#',
	codeLink: '#',
}

export default ProjectCard
