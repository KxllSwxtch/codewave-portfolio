import { ProjectCard } from '../components'

const projects = [
	{
		title: 'Glory Traders',
		description: 'Сайт по Подбору Авто',
		image:
			'https://res.cloudinary.com/pomegranitedesign/image/upload/v1740135661/GloryTraders/logo.png',
		tech: ['Python', 'React.js', 'TailwindCSS'],
		demoLink: 'https://glory-traders.org/',
		// codeLink: 'https://github.com/example/repo1',
	},
	{
		title: 'Poshfair',
		description: 'Продажа Платьев в г. Оттава (Канада)',
		image:
			'https://res.cloudinary.com/pomegranitedesign/image/upload/v1740135999/poshfair/logo_poshfair.avif',
		tech: ['Shopify', 'HTML', 'CSS'],
		demoLink: 'https://poshfair.com/',
		// codeLink: 'https://github.com/example/repo1',
	},
	{
		title: 'Nobel Maine Coon',
		description: 'Продажа котов Maine Coon в Канаде и США',
		image:
			'https://res.cloudinary.com/pomegranitedesign/image/upload/v1740136106/nobelmaincook/logo_nobel.avif',
		tech: ['Shopify', 'HTML', 'CSS'],
		demoLink: 'https://www.nobelmainecoon.com/',
		// codeLink: 'https://github.com/example/repo1',
	},
]

const Projects = () => {
	return (
		<div className='min-h-screen bg-primaryBlue text-white py-12 mt-20'>
			<div className='max-w-7xl mx-auto px-4'>
				<h1 className='text-4xl font-bold mb-8'>Проекты</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							tech={project.tech}
							demoLink={project.demoLink}
							codeLink={project.codeLink}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
