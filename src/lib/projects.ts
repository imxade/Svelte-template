import type { TechStack } from "./components/site";

export type ProjectType = {
	title: string;
	href: string;
	image: string;
	description: string;
	techstack: TechStack[];
};

export const projects: ProjectType[] = [
	{
		title: 'Corgi-AI: Create anything with AI',
		description:
			'Corgi AI is a collection of AI tools for different usecases. It includes a chatGPT clone with streaming responses, Image Generation, Audio Generation, Image Restoration and PDF Chat(beta). It is a full fledged SaaS application with stripe payments. It is Deployed using Docker with a VPS hosting on fly.io',
		href: 'https://corgi-ai.fly.dev',
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Fcorgi-ai-dashboard.png&w=1080&q=75',
    techstack: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Docker', 'Drizzle'],
	},
	{
		title: 'Dall-E Clone: AI Image Generation',
		description:
			'Created a Dall-E Clone using SvelteKit, OpenAI API, TailwindCSS, TypeScript, Dirzzle ORM and MySQL Database. Converted it into fully working SaaS which inludes Stripe Payment Integration, User Authentication (Github & Google), and User Friendly Interface. The app is deployed with Vercel for easy setup and scalability.',
		href: 'https://dall-e-sveltekit.vercel.app/',
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Fdall-e-svelte.png&w=1080&q=75',
		techstack: ['SvelteKit', 'TypeScript', 'MySQL', 'Drizzle']
	},
	{
		title: 'AI-SaaS App: MultiGPT',
		description:
			'Created an AI-SaaS app using NextJS, React. It features a subscription based payment system using Stripe, user authentication, and a user-friendly interface. The app is deployed with Vercel for easy setup and scalability. It has several features like Chatbot, Code Generation, Image Generation, Audio Generation and Video Generation.',
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Fmultigpt.png&w=1080&q=75',
		href: 'https://multigpt-pk.vercel.app/',
		techstack: ['NextJS', 'React', 'JavaScript']
	},
	{
		title: 'Full Stack Todo App',
		description: `Created a Todo application using SvelteKit, FastAPI, and PostgreSQL. It features JWT-based authentication for security and includes task categorization into sections like current todos, upcoming, overdue, and completed. Users can easily update, delete, and mark tasks as complete.`,
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Fsvelte-todo.png&w=1080&q=75',
		href: 'https://sveltekit-todo-prabhu.vercel.app/',
		techstack: ['SvelteKit', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL']
	},
	{
		title: 'PDF Assistant: AI Powered Q&A for PDFs',
		description: `Built a PDF Assistant tool using OpenAI's LLM to answer questions from uploaded PDF files. It has a user-friendly web interface with StreamLit, Firebase authentication for security, real-time updates via Firebase, a guest mode for no authentication, and easy Docker deployment.`,
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2FPDF_Assistant.png&w=1080&q=75',
		href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker',
		techstack: ['Python', 'Streamlit', 'Docker']
	},
	{
		title: 'GFPGAN Streamlit App: Face Restoration',
		description: `Created a Streamlit app for the GFPGAN model to restore faces in images. It has a user-friendly interface, and easy Docker deployment.`,
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2FGFPGAN.png&w=1080&q=75',
		href: 'https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN',
		techstack: ['Python', 'Streamlit', 'Docker']
	},
	{
		title: 'College Student API: FastAPI with MongoDB',
		description: `Developed a high-performance API using FastAPI and MongoDB Cloud Database for managing college student information. It includes CRUD operations and secure data handling. The API is deployed with Docker for easy setup and scalability.`,
		image:
			'https://prabhukirankonda.vercel.app/_next/image?url=%2Fstatic%2Fimages%2FFastAPI_MongDB.png&w=1080&q=75',
		href: 'https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB',
		techstack: ['Python', 'FastAPI', 'MongoDB', 'Docker']
	}
];