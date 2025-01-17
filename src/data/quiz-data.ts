import { Question, Result } from '@/type/quiz';

export const questions: Question[] = [
	{
		id: 'value',
		text: 'What do you value most in a game?',
		imageUrl: '/images/value.jpg',
		options: [
			{
				id: 'action',
				text: 'Thrills and fast-paced action',
				score: { adventurous: 2, competitive: 1 },
			},
			{
				id: 'story',
				text: 'A deep and engaging story',
				score: { immersive: 2, creative: 1 },
			},
		],
	},
	{
		id: 'environment',
		text: 'Which type of environment do you prefer in games?',
		imageUrl: '/images/environment.jpg',
		options: [
			{
				id: 'open-world',
				text: 'Expansive and open-world settings',
				score: { adventurous: 2, immersive: 1 },
			},
			{
				id: 'competitive',
				text: 'Competitive arenas or battlegrounds',
				score: { competitive: 2, energetic: 1 },
			},
		],
	},
	{
		id: 'challenge',
		text: 'What kind of challenges do you enjoy most?',
		imageUrl: '/images/challenge.jpeg',
		options: [
			{
				id: 'exploring',
				text: 'Exploring and discovering new areas',
				score: { immersive: 2, adventurous: 1 },
			},
			{
				id: 'puzzle',
				text: 'Mental puzzles and problem-solving',
				score: { strategic: 2, calm: 1 },
			},
		],
	},
	{
		id: 'habit',
		text: 'How do you usually play games?',
		imageUrl: '/images/habit.jpeg',
		options: [
			{
				id: 'solo',
				text: 'Solo, enjoying the journey at my own pace',
				score: { immersive: 2, calm: 1 },
			},
			{
				id: 'grind',
				text: 'Pushing myself to beat tough levels',
				score: { adventurous: 2, strategic: 1 },
			},
		],
	},
	{
		id: 'creative',
		text: 'Do you enjoy creating or designing things within games?',
		imageUrl: '/images/creative.png',
		options: [
			{
				id: 'yes',
				text: 'Yes',
				score: { creative: 2, immersive: 1 },
			},
			{
				id: 'no',
				text: 'No',
				score: { competitive: 2, adventurous: 1 },
			},
		],
	},
];

export const results: Result[] = [
	{
		id: 'action-hero',
		title: 'Action Hero Type',
		description:
			'You live for adrenaline-pumping moments and high-stakes adventures. Games like God of War (PS4/PS5), Halo Infinite (Xbox Series X|S/PC), and Devil May Cry 5 (PS4/Xbox One/PC) are your favorites. These action-packed titles keep your heart racing and your reflexes sharp.',
		imageUrl: '/images/action-hero.jpg',
		threshold: { adventurous: 5, competitive: 3 },
	},
	{
		id: 'strategic-mastermind',
		title: 'Strategic Mastermind Type',
		description:
			'You enjoy games that challenge your intellect and planning skills. Titles like Civilization VI (PC/PS4/Xbox One), XCOM 2 (PC/PS4/Xbox One), and Age of Empires IV (PC) are perfect for your analytical mind.',
		imageUrl: '/images/strategic-mastermind.png',
		threshold: { strategic: 5, calm: 3 },
	},
	{
		id: 'immersive-storyteller',
		title: 'Immersive Storyteller Type',
		description:
			'You love getting lost in rich narratives and exploring detailed worlds. Games like The Witcher 3: Wild Hunt (PS4/PS5/Xbox/PC), Red Dead Redemption 2 (PS4/Xbox One/PC), and Horizon Zero Dawn (PS4/PC) offer unforgettable story-driven experiences.',
		imageUrl: '/images/immersive-storyteller.jpg',
		threshold: { immersive: 5, creative: 3 },
	},
	{
		id: 'competitive-warrior',
		title: 'Competitive Warrior Type',
		description:
			'You thrive on the thrill of competition and love to test your skills against others. Games like League of Legends (PC), Fortnite (PS4/PS5/Xbox/PC/Handheld), and Call of Duty: Warzone (PS4/PS5/Xbox/PC) are your go-to choices.',
		imageUrl: '/images/competitive-warrior.jpg',
		threshold: { competitive: 5, energetic: 3 },
	},
	{
		id: 'creative-architect',
		title: 'Creative Architect Type',
		description:
			'You have a passion for building and creating. Games like Minecraft (PC/PS4/Xbox/Handheld), The Sims 4 (PC/PS4/Xbox), and Cities: Skylines (PC/PS4/Xbox) allow you to express your imagination and construct your dream worlds.',
		imageUrl: '/images/creative-architect.png',
		threshold: { creative: 5, calm: 3 },
	},
	{
		id: 'casual-gamer',
		title: 'Casual Gamer Type',
		description:
			'You prefer easygoing and low-stress games that you can enjoy at your own pace. Relaxing titles like Animal Crossing: New Horizons (Nintendo Switch), Stardew Valley (PC/PS4/Xbox/Switch), and Journey (PS4/PC) suit you best.',
		imageUrl: '/images/casual-gamer.jpg',
		threshold: { calm: 5, relaxing: 3 },
	},
	{
		id: 'horror-enthusiast',
		title: 'Horror Enthusiast Type',
		description:
			'You love the thrill of fear and suspense. Games like Resident Evil Village (PS4/PS5/Xbox/PC), Silent Hill 2 Remake (PS5), and Dead by Daylight (PC/PS4/Xbox/Switch) keep you hooked with their creepy atmospheres.',
		imageUrl: '/images/horror-enthusiast.png',
		threshold: { immersive: 5, adventurous: 3 },
	},
	{
		id: 'sports-fanatic',
		title: 'Sports Fanatic Type',
		description:
			'You’re passionate about sports and enjoy games that replicate the excitement of real-world competitions. Titles like FIFA 24 (PS4/PS5/Xbox/PC), NBA 2K24 (PS4/PS5/Xbox/PC), and Tony Hawk’s Pro Skater 1+2 (PS4/Xbox/Switch/PC) are your favorites.',
		imageUrl: '/images/sports-fanatic.png',
		threshold: { competitive: 5, energetic: 3 },
	},
	{
		id: 'classic-gamer',
		title: 'Classic Gamer Type',
		description:
			'You appreciate nostalgia and love the simplicity of classic arcade or retro-style games. Play timeless hits like Pac-Man (Various Platforms), Super Mario Bros. (Nintendo Switch), and Sonic the Hedgehog (Switch/PC).',
		imageUrl: '/images/classic-gamer.jpg',
		threshold: { relaxing: 5, creative: 3 },
	},
	{
		id: 'open-world-adventurer',
		title: 'Open-World Adventurer Type',
		description:
			'You enjoy the freedom to explore vast worlds and uncover hidden secrets. Games like The Legend of Zelda: Breath of the Wild (Nintendo Switch), Elden Ring (PS4/PS5/Xbox/PC), and Skyrim (PS4/Xbox/PC/Switch) are your ideal choices.',
		imageUrl: '/images/open-world-adventurer.jpg',
		threshold: { adventurous: 5, immersive: 3 },
	},
];