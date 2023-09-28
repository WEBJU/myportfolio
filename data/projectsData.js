import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Enesst Platform',
		url: 'https://enesst.com/',
		category: 'Web Application',
		img: '/images/enest.png',
		ProjectHeader: {
			title: 'Enesst Platform',
			publishDate: 'Jul 26, 2022',
			tags: 'Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Enesst Platform',
				img: '/images/enest.png',
			},
			{
				id: uuidv4(),
				title: 'Enesst Platform',
				img: '/images/enesst-1.png',
			},
			{
				id: uuidv4(),
				title: 'Enesst Platform',
				img: '/images/enesst-2.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Enesst Academy',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Elearning',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://enesst.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To develop a learning management system',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Codeigniter',
						
					],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'The Enesst Academy Learning Management System (LMS) Development project involved designing, developing, and implementing a comprehensive and user-friendly digital platform to enhance the learning experience for students and streamline administrative tasks for educators and administrators. The LMS included three core modules: Courses, Quizzes, and Administration, each tailored to meet the specific needs of Enesst Academy.',
				},
				{
					id: uuidv4(),
					details:
						'The Enesst Academy Learning Management System (LMS) consisted of three key modules: the Course Module, Quiz Module, and Administrator Module. The Course Module was designed to provide an intuitive and interactive platform for instructors to create, organize, and deliver educational content while enabling students to access course materials and monitor their progress. The Quiz Module facilitated the creation and administration of quizzes and assessments, offering students instant feedback and performance tracking. The Administrator Module empowered Enesst Academy staff with tools for user account management, progress monitoring, report generation, and overall system administration. These modules collectively aimed to enhance the learning experience, streamline administrative tasks, and support data-driven decision-making within the institution.',
				},
				{
					id: uuidv4(),
					details:
						'The Enesst Academy Learning Management System (LMS) boasted a range of key features aimed at optimizing the educational experience. These included a user-friendly dashboard accessible to instructors, students, and administrators, fortified by secure user authentication and authorization protocols. The system supported comprehensive course creation and management with multimedia content integration, real-time progress tracking for both students and educators, and the ability to design, grade, and provide feedback on quizzes and assignments. Additionally, a notification system kept users informed of announcements and updates, while robust user profile management was in place. The LMS also provided reporting and analytics tools for administrators, empowering data-driven decision-making and offering scalability for future customization and expansion.',
				},
				{
					id: uuidv4(),
					details:'',
				},
			],
			SocialSharingHeading: 'Share This',
			
		},
	},
	{
		id: 2,
		title: 'SofthubKe',
		url: 'https://softhubke.com/',
		category: 'Web Application',
		img: '/images/softhub.png',
		ProjectHeader: {
			title: 'SofthubKe',
			publishDate: 'Jul 3, 2023',
			tags: 'Web Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'SofthubKe',
				img: '/images/softhub.png',
			},
			{
				id: uuidv4(),
				title: 'SofthubKe',
				img: '/images/softhub-1.png',
			},
			{
				id: uuidv4(),
				title: 'SofthubKe',
				img: '/images/softhub-1.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'SoftHubKe Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Professional Unlocker',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://softhubke.com/',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a platform that would allow the client to sell unlocking tools online',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Laravel',
						
					],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'The SofthubKe Website project was undertaken to design and develop an all-encompassing online platform dedicated to providing professional unlocking and activation services for a range of devices, including Xiaomi, Samsung, iPhone, Nokia, Oppo, and Huawei, as well as offering a streamlined solution for Frp (Factory Reset Protection) bypass. This project aimed to create a user-friendly and efficient digital space for users seeking to unlock and activate their devices quickly and securely.'
				},
				{
					id: uuidv4(),
					details:'',
				},
				{
					id: uuidv4(),
					details: '',
				},
				{
					id: uuidv4(),
					details:'',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},

			// UI/UX Design
			// ],
		},
	},
	{
		id: 3,
		title: 'MiRight',
		url: 'project-management-ui',
		category: 'Mobile Application',
		img: '/images/miright.png',
		ProjectHeader: {
			title: 'MiRight',
			publishDate: 'Jul 26, 2021',
			tags: 'Mobile Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'MiRight',
				img: '/images/miright-1.jpeg',
			},
			{
				id: uuidv4(),
				title: 'MiRight',
				img: '/images/miright-2.jpeg',
			},
			{
				id: uuidv4(),
				title: 'MiRight',
				img: '/images/miright-3.jpeg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'MiRight Organization',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Legal Literacy and Legal Aid',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://miright.co.ke',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:'To develop a content platform for MiRight Organization',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Laravel',
					],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:'The MiRight Mobile Application project was conceived with the aim of developing a comprehensive platform that empowers users with legal literacy by simplifying complex legal concepts and providing easy access to legal aid resources. This mobile application served as a user-friendly gateway to the constitution and a vital resource for individuals seeking legal information and assistance.'
				},
				{
					id: uuidv4(),
					details:'The MiRight Mobile Application offers a range of essential features designed to simplify legal literacy and provide easy access to legal aid resources. Its user-friendly interface simplifies complex legal concepts, making the constitution and other legal documents easily understandable. Users can search for specific legal topics and access a directory of legal professionals and organizations for expert guidance. The app also provides educational content, notifications of legal updates, and news, ensuring users stay informed about important legal matters. MiRight serves as an inclusive platform, empowering individuals with legal knowledge and connecting them to legal aid when needed, thus promoting legal awareness and access to justice.',
				},
				{
					id: uuidv4(),
					details: '',
				},
				{
					id: uuidv4(),
					details:'',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 4,
		title: 'Startup Success Predictor',
		url: 'cloud-storage-platform',
		category: 'Web Application',
		img: '/images/startupeye.png',
		ProjectHeader: {
			title: 'Startup Eye',
			publishDate: 'Jul 26, 2022',
			tags: 'Machine Learning',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Startup Eye',
				img: '/images/startupeye.png',
			},
			{
				id: uuidv4(),
				title: 'Startup Eye',
				img: '/images/startup-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Startup Eye',
				img: '/images/startup-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Startup Eye',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Early Stage startup success evaluation',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://wezadynamics.startupeye.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a platform that predicts success or failure of a startup using ML',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Python',
						'Google Colab',
						
					],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'The project represented an ambitious endeavor focused on harnessing the power of Machine Learning to revolutionize the way Venture Capitalists (VCs) evaluate and predict the success of startups. At its core, the platform was designed to serve as an intelligent decision-support tool for VCs, streamlining and enhancing the startup investment process. Rather than relying solely on traditional methods, VCs were provided with a dynamic interface where they could input essential information about a startup by filling out a detailed form. This form served as a data collection mechanism, capturing vital details about the startups business model, market analysis, team composition, and financial projections, among other factors. Once the form was submitted, a sophisticated API (Application Programming Interface) took over, seamlessly transmitting the gathered data to a robust Machine Learning model specially trained to assess startup viability.',
				},
				{
					id: uuidv4(),
					details: 'The magic unfolded within the depths of this Machine Learning model, where complex algorithms, statistical analysis, and historical data converged to generate insightful predictions. The model meticulously processed the input data, scrutinizing it for patterns, correlations, and indicators that had been fine-tuned through extensive training. It then employed this wealth of knowledge to deliver a predictive verdict on the likelihood of the startups success or potential pitfalls.',
				},
				{
					id: uuidv4(),
					details: 'The results, once computed, were transmitted back to the VC through the same user-friendly platform. These results provided VCs with valuable insights, effectively augmenting their decision-making process. Armed with these data-driven predictions, VCs were better equipped to make informed investment choices, mitigating risks, and optimizing their portfolios for success.',
				},
				{
					id: uuidv4(),
					details:'',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 5,
		title: 'Blockchain Based Online Library',
		url: 'wetalk-social-app',
		category: 'Mobile Application',
		img: '/images/ebook.png',
		ProjectHeader: {
			title: 'Blockchain Based Online Library',
			publishDate: 'Jan 26, 2023',
			tags: 'Blockchain',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'E-book Marketplace',
				img: '/images/ebook.png',
			},
			{
				id: uuidv4(),
				title: 'E-book Marketplace',
				img: '/images/ebook-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'E-book Marketplace',
				img: '/images/ebook-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Esther',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'E book Libary',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: '',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a decentralized network for publishers and authors to publish and buy books',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next Js',
						'Polygon',
						'Typescript',
						'Ganache',
						'TailwindCSS',
						
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'The developed system was meticulously designed to empower users with the capability to independently upload and purchase books directly through the platform, eliminating the need for intermediaries or third-party services. This fundamental shift in the book distribution model aimed to enhance accessibility for both authors and readers, fostering a more direct and equitable connection. However, the projects ambition extended beyond mere convenience. Its overarching objective was to combat the persistent challenge of ebook piracy that has plagued the digital publishing industry. To achieve this, cutting-edge blockchain technology was harnessed as the linchpin of security and trust. By leveraging blockchains immutable ledger and cryptographic safeguards, the system ensured that once a book was uploaded and purchased, its ownership and distribution rights were unassailably secured. This pioneering approach not only protected the intellectual property of authors but also engendered a sense of integrity and transparency within the ebook ecosystem, thereby bolstering confidence in digital publishing for all stakeholders.',
				},
				{
					id: uuidv4(),
					details: '',
				},
				{
					id: uuidv4(),
					details: '',
				},
				
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/realstoman',
			// 	},
			// ],
		},
	},
	{
		id: 6,
		title: 'HR Turnover Prediction',
		url: 'apple-new-design-system',
		category: 'Web Application',
		img: '/images/dashboard.png',
		ProjectHeader: {
			title: 'Employee Attrition Prediction',
			publishDate: 'Mar 2, 2023',
			tags: 'Machine Learning / Web Development',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'HR Attrition Prediction',
				img: '/images/dashboard.png',
			},
			{
				id: uuidv4(),
				title: 'HR Attrition Prediction',
				img: '/images/predic.jpg',
			},
			{
				id: uuidv4(),
				title: 'HR Attrition Prediction',
				img: '/images/login.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: '',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Employee Turnover Prediction',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: '',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: ' To develop an attrition prediction tool',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Laravel',
						
					],
				},
			],
			ProjectDetailsHeading: 'Project Details',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:'The development of this system was driven by the imperative need for HR managers to gain insights into employee retention and the ability to proactively address potential attrition issues within their organizations. By harnessing the power of machine learning techniques, the system was designed to provide HR managers with a sophisticated predictive tool. It leveraged historical employee data, including factors such as job satisfaction, performance metrics, tenure, and career progression, to create predictive models that could estimate the likelihood of an employee leaving their current position. These machine learning algorithms, with their capacity to analyze large datasets and identify subtle patterns, enabled HR managers to identify at-risk employees and take preventive measures. This not only helped in retaining valuable talent but also contributed to a more proactive and strategic approach to human resource management, ultimately fostering a healthier and more stable work environment. The implementation of this predictive system marked a significant step toward data-driven HR decision-making, empowering organizations to prioritize employee engagement and retention strategies with greater precision and effectiveness.',
				},
					],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
];
