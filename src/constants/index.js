import {
	close,
	creator,
	discord,
	doctoratwork,
	doctoratwork1,
	freelance,
	sql,
	analtics,
	github,
	github_alt,
	gotosite,
	javascript,
	linkedin,
	logo,
	menu,
	mobile,
	nextjs,
	python,
	keras,
	web,
	nodejs,
	ai,
	nlp,
	tensorflow,
	house,
	skin,
	chatbot,
	seo,
	posture,
	flask,
	hr,
	customer,
	attrition,
	pandas,
	numpy,
    matplotlib,
    scikitlearn,
} from '../assets';

// const githubUser = import.meta.env.VITE_APP_GITHUB_USER;
// const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER;
// const discordUser = import.meta.env.VITE_APP_DISCORD_USER;

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'Python',
		icon: python,
	},
	{
		name: 'AI',
		icon: ai,
	},
	{
		name: 'NLP',
		icon: nlp,
	},
	{
		name: 'Data Analtics',
		icon: analtics,
	},



	{
		name: 'Pandas',
		icon: pandas,
	},{
		name: 'Numpy',
		icon: numpy,
	},{
		name: 'Matplotlib',
		icon: matplotlib,
	},{
		name: 'Scikitlearn',
		icon: scikitlearn,
	},



	{
		name: 'Keras',
		icon: keras,
	},
	{
		name: 'Tensorflow',
		icon: tensorflow,
	},
	
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'flask',
		icon: flask,
	},
	{
		name: 'Nodejs',
		icon: nodejs,
	},
	{
		name: 'sql',
		icon: sql,
	},
];

// Duration:
let date1 = new Date(2024, 8, 10);
let date2 = new Date();
let year1 = date1.getFullYear();
let year2 = date2.getFullYear();
let month1 = date1.getMonth();
let month2 = date2.getMonth();
if (month1 === 0) {
	month1++;
	month2++;
}
let duration;
let months = (year2 - year1) * 12 + (month2 - month1) + 1;
let years = Math.floor(months / 12);
let diff = Math.abs(month2 - month1 + 1);

if (months > 12) {
	if (years > 1) {
		if (diff > 1) {
			duration = `${years} yrs ${diff} mos`;
		} else {
			duration = `${years} yrs ${diff} mo`;
		}
	} else {
		if (diff > 1) {
			duration = `${years} yr ${diff} mos`;
		} else {
			duration = `${years} yr ${diff} mo`;
		}
	}
} else {
	if (diff > 1) {
		duration = `${months} mos`;
	} else {
		duration = `${months} mo`;
	}
}

const experiences = [
	{
		title: 'AI Engineer',
		company_name: 'WebFix',
		icon: freelance,
		iconBg: '#383E56',
		date: `Feb 2025 - Present`,
		points: [
			"Developing AI chatbots with NLP for automated customer interactions.",
		"Training deep learning models for predictions and recommendations.",
		"Building scalable ML APIs for AI-driven web applications."
		],
	},
	{
		title: 'ML Engineer Intern',
		company_name: 'Technocolabs Softwares',
		icon: freelance,
		iconBg: '#383E56',
		date: `Octobor 2024 - Present`,
		points: [
			"Building ML models for employee attrition analysis and insights.",
		"Performing data preprocessing, feature engineering, and visualization.",
		"Integrating AI solutions into web applications with cross-team collaboration."
		],
	},
	{
		title: 'Data Science Intern',
		company_name: 'Evostra Ventures',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: 'July 2024 - September 2024',
		points: [
			"Analyzed large-scale real-world datasets for insights.",
		"Built high-quality ML datasets through web scraping.",
		"Optimized predictive models for data-driven decisions."
		],
	},
	{
		title: 'ML Engineer Intern',
		company_name: 'Digital Empowerment Networks',
		icon: freelance,
		iconBg: '#383E56',
		date: 'August 2024 - September 2024',
		points: [
			"Built ML models for predictive analytics and real-world solutions.",
		"Trained and fine-tuned deep learning models with TensorFlow & Keras.",
		"Optimized data pipelines and feature engineering for efficiency."
		],
	},
];

const projects = [{
		name: 'Home Price Prediction',
		description:
			'End-to-end machine learning project that predicts home prices based on various features. The model was built using different ML algorithms with extensive data preprocessing and feature engineering.',
		tags: [
			{
				name: 'python',
				color: 'blue-text-gradient',
			},
			{
				name: 'flask',
				color: 'green-text-gradient',
			},
			{
				name: 'scikit-learn',
				color: 'pink-text-gradient',
			},
			{
				name: 'next.js',
				color: 'yellow-text-gradient',
			},
		],
		image: house,
		source_code_link: 'https://github.com/muhammad-umar-ramzan/Machine-Learning-Projects.git',
		website_link: 'https://www.linkedin.com/posts/m-umar-ramzan_machinelearning-datascience-eda-activity-7250789425146720256-vp5a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
	},
	{
		name: 'Skin Cancer Detection',
		description:
			'Deep learning model designed to detect skin cancer from images using Convolutional Neural Networks (CNN). The project aims to assist in early diagnosis by classifying benign and malignant lesions.',
		tags: [
			{
				name: 'tensorflow',
				color: 'blue-text-gradient',
			},
			{
				name: 'keras',
				color: 'green-text-gradient',
			},
			{
				name: 'opencv',
				color: 'pink-text-gradient',
			},
			{
				name: 'cnn',
				color: 'yellow-text-gradient',
			},
		],
		image: skin,
		source_code_link: 'https://github.com/muhammad-umar-ramzan/Deep-Learning-Project/tree/f57212bb0863d63438bc6be615bd55e4335897be/Skin%20Cancer%20Detection',
		website_link: 'https://www.linkedin.com/posts/m-umar-ramzan_datascience-machinelearning-deeplearning-activity-7255591486895927298-YL9W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
	},
	{
		name: 'Posture Detection',
		description:
			'AI-powered system that detects and analyzes human posture using JavaScript libraries(ml5.js and p5.js). The system aims to provide real time feedback to improve posture and reduce strain related injuries.',
		tags: [
			{
				name: 'html & css',
				color: 'blue-text-gradient',
			},
			{
				name: 'javascript',
				color: 'green-text-gradient',
			},
			{
				name: 'ml5.js',
				color: 'pink-text-gradient',
			},
			{
				name: 'p5.js',
				color: 'yellow-text-gradient',
			},
		],
		image: posture,
		source_code_link: 'https://github.com/muhammad-umar-ramzan/Deep-Learning-Project/tree/f57212bb0863d63438bc6be615bd55e4335897be/Posture%20Dection',
		website_link: 'https://www.linkedin.com/posts/m-umar-ramzan_javascript-ml5js-p5js-activity-7274795398668386304-PetO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
	},
	{
		name: 'AI Chatbot',
		description:
			'This is a chatbot powered by the Google Gemini AI model. It is built using Streamlit and integrated with Google Generative AI for natural language processing.',
		tags: [
			{
				name: 'python',
				color: 'blue-text-gradient',
			},
			{
				name: 'Streamlit',
				color: 'green-text-gradient',
			},
			{
				name: 'api integration',
				color: 'pink-text-gradient',
			},
			{
				name: 'deployment',
				color: 'yellow-text-gradient',
			},
		],
		image: chatbot,
		source_code_link: 'https://github.com/muhammad-umar-ramzan/Umar-s-Chatbot.git',
		website_link: 'https://umar-chatbot.streamlit.app/',
	},
	{
		name: 'Customer Churn Prediction',
		description:
			'AI model predicting customer churn using advanced algorithms, hyperparameter tuning, and ANN for better insights.',
		tags: [
			{ name: 'ml', color: 'blue-text-gradient' },
		{ name: 'feature engineering', color: 'green-text-gradient' },
		{ name: 'hyperparameter tuning', color: 'pink-text-gradient' },
		{ name: 'ann', color: 'yellow-text-gradient' },
		],
		image: customer,
		source_code_link: '',
		website_link: '',
	},
	{
		name: 'Employee Attrition Prediction',
		description:
			'AI-powered model predicting employee attrition using ML algorithms, feature selection, and ANN for better accuracy.',
		tags: [
			{ name: 'ml', color: 'blue-text-gradient' },
		{ name: 'EDA', color: 'green-text-gradient' },
		{ name: 'data visualization', color: 'pink-text-gradient' },
		{ name: 'deep learning', color: 'yellow-text-gradient' },
		],
		image: attrition,
		source_code_link: 'https://github.com/muhammad-umar-ramzan/Technocolabs-Softwares/tree/6482ba1c285d91b9636db232e7a7e4a89cf76948/Employee%20Attrition%20Analysis%2C%20Visualization%20and%20Prediction',
		website_link: 'https://www.linkedin.com/posts/m-umar-ramzan_datascience-machinelearning-employeeattrition-activity-7254873083969191937-uBc7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
	},
	
	// {
	// 	name: 'SEO Content Optimizer',
	// 	description:
	// 		'Web application that helps optimize content for search engines by analyzing keywords, readability, and SEO score. The tool provides actionable recommendations to improve rankings.',
	// 	tags: [
	// 		{
	// 			name: 'html & css',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'javascript',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'nlp',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'flask',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: seo,
	// 	source_code_link: 'https://github.com/muhammad-umar-ramzan/SEO-Content-Optimizer',
	// 	website_link: 'https://github.com/muhammad-umar-ramzan/SEO-Content-Optimizer',
	// },
	{
		name: 'HR Dashboard',
		description:
			'Data driven HR analytics dashboard designed to track key HR metrics, including employee attrition, engagement, and performance. It provides visual insights to assist HR teams in making informed decisions.',
		tags: [
			{
				name: 'power bi',
				color: 'blue-text-gradient',
			},
			{
				name: 'data visualization',
				color: 'green-text-gradient',
			},
			{
				name: 'data analtics',
				color: 'pink-text-gradient',
			},
			{
				name: 'report writting',
				color: 'yellow-text-gradient',
			},
		],
		image: hr,
		source_code_link: 'https://www.linkedin.com/posts/m-umar-ramzan_datascience-powerbi-datavisualization-activity-7266777169513598978-HV9u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
		website_link: 'https://www.linkedin.com/posts/m-umar-ramzan_datascience-powerbi-datavisualization-activity-7266777169513598978-HV9u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEYfWJcBCxi6WTOMxV4yl1qjV7OWqvknYTc',
	}
	
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/m-umar-ramzan/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/muhammad-umar-ramzan/`,
	},
	{
		name: 'discord',
		icon: discord,
		link: `https://discord.com/channels/@me/`,
	},
];

export { experiences, projects, socials, technologies };
