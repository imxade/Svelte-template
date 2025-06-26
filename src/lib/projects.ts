import type { TechStack } from './icons';

export type ProjectType = {
	title: string;
	featured?: boolean;
	href: string;
	source?: string;
	image: string;
	description: string;
	techstack: TechStack[];
};

export const projects: ProjectType[] = [
	{
		title: 'My WorkSpace',
		description:
			'Explore my daily workflow setup and the array of tools I rely on for seamless productivity. Delve into details about my chosen operating system, essential tools, preferred display protocols, work environment configuration, browser preferences, office suite selection, and much more.',
		href: 'https://codeberg.org/XADE/dotbin/wiki',
		source: 'https://codeberg.org/XADE/dotbin',
		image: '/project/setup.png',
		techstack: ['Linux', 'Virtualization', 'NixOS'],
		featured: true
	},
	{
		title: 'Aunix: Linux Installer',
		description:
			'A versatile POSIX shell script designed for seamless installation of Linux distributions. Packed with features such as encryption (LUKS), LVM, and RAID support. Notably, it allows multiple installations on a single partition and offers ISO-free installation.',
		href: 'https://codeberg.org/zz/sh/wiki',
		source: 'https://codeberg.org/zz/sh',
		image: '/project/aunix.png',
		techstack: ['Bash', 'Linux', 'Virtualization'],
		featured: true
	},
	{
		title: 'PySh: Shell and Python REPL Hybrid',
		description:
			'A lightweight, cross-platform shell and Python REPL hybrid built in pure Python, supporting pipelines, redirection, tab-completion, and interactive command evaluation without external dependencies.',
		href: 'https://codeberg.org/zz/pysh/wiki',
		source: 'https://codeberg.org/zz/pysh',
		image: '/project/pysh.png',
		techstack: ['Linux', 'Python'],
		featured: true
	},
	{
		title: 'PictoPy',
		description:
			'A simpl cross-platform gallery that can classify images and videos based on their their content.',
		href: 'https://github.com/imxade/pictopyv2/wiki',
		source: 'https://github.com/imxade/pictopyv2',
		image: '/project/pictopy.png',
		techstack: ['Flask', 'SQLite', 'Docker'],
		featured: false
	},
	{
		title: 'Sketch Classifier',
		description:
			'JavaScript application, designed to identify sketches without relying on external libraries. Leveraging the power of machine learning, it employs the Nearest Neighbor algorithm to classify sketches accurately.',
		href: 'https://classifysketch.vercel.app',
		source: 'https://codeberg.org/zz/classifySketch',
		image: '/project/sketchClassifier.png',
		techstack: ['Fastify', 'NodeJS', 'JavaScript', 'Docker'],
		featured: true
	},
	{
		title: 'Pacman Strap',
		description:
			'A lightweight tool designed to generate a minimal root filesystem with a functional Pacman package manager. It focuses solely on the essentials, requiring no root privileges for execution. Additionally, it offers compatibility with Termux and is implemented in Posix shell scripting.',
		href: 'https://codeberg.org/zz/PacmanStrap/wiki',
		source: 'https://codeberg.org/zz/PacmanStrap',
		image: '/project/pacmanStrap.png',
		techstack: ['Bash', 'Linux'],
		featured: false
	},
	{
		title: 'Snake Maze',
		description:
			'A nostalgic game inspired by the classic Nokia version, now brought to life as a Progressive Web App (PWA) with offline functionality. Players can enjoy the thrill of navigating the snake through the maze using touch controls (swipe gestures) or arrow keys. With its seamless offline capability.',
		href: 'https://snakemaze.vercel.app/',
		source: 'https://codeberg.org/zz/SnakeMaze',
		image: '/project/snakeMaze.png',
		techstack: ['JavaScript'],
		featured: false
	},
	{
		title: 'Student Portal',
		description:
			'User-friendly web interface developed using Flask, Openpyxl, HTML, and Docker, designed to facilitate seamless data entry for students. With intuitive design and functionality, users can effortlessly input their data. Additionally, the entered data can be conveniently downloaded in Excel format, providing a convenient way to access and organize information.',
		href: 'https://basicflaskportal.vercel.app/',
		source: 'https://codeberg.org/zz/FlaskBasicPortal',
		image: '/project/studentPortal.png',
		techstack: ['Python', 'Flask', 'Docker'],
		featured: false
	}
];
