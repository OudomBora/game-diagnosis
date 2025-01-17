import { Quiz } from '@/components/quiz';

export default function Home() {
	return (
		<main>
			<div className='min-h-screen p-4 md:p-8 bg-gray-50'>
				<div className='max-w-2xl mx-auto space-y-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-center'>
						Game Diagnosis
					</h1>
				</div>
				<Quiz />
			</div>
		</main>
	);
}
