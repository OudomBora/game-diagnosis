'use client'

import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { questions, results } from '@/data/quiz-data';
import { QuizState } from '@/type/quiz';
import Image from 'next/image';
import { useState } from 'react';

export function Quiz() {
	const [state, setState] = useState<QuizState>({
		currentQuestionIndex: 0, // Tracks current question
		answers: {}, // Stores user's answers
		completed: false, // Indicates if quiz is finished
	});

	const currentQuestion = questions[state?.currentQuestionIndex];

	const calculateResult = () => {
		const scores: Record<string, number> = {};

		// Loops through all answers and calculates trait scores
		Object.entries(state.answers).forEach(([questionId, answerId]) => {
			const question = questions.find((q) => q.id === questionId);
			const option = question?.options.find((o) => o.id === answerId);

			// Adds up scores for each personality trait
			if (option) {
				Object.entries(option.score).forEach(([trait, score]) => {
					scores[trait] = (scores[trait] || 0) + score;
				});
			}
		});

		// Finds the first result where all threshold conditions are met
		return (
			results.find((result) => {
				return Object.entries(result.threshold).every(
					([trait, minimum]) => (scores[trait] || 0) >= minimum
				);
			}) || results[0]
		);
	};

	const handleAnswer = (optionId: string) => {
		const newAnswers = {
			...state.answers,
			[currentQuestion.id]: optionId,
		};

		//last question
		if (state.currentQuestionIndex === questions.length - 1) {
			setState({
				...state,
				answers: newAnswers,
				completed: true,
			});
		} else {
			// not last question
			setState({
				...state,
				answers: newAnswers,
				currentQuestionIndex: state.currentQuestionIndex + 1,
			});
		}
	};

	const resetQuiz = () => {
		setState({
			currentQuestionIndex: 0,
			answers: {},
			completed: false,
		});
	};

	if (state.completed) {
		const result = calculateResult();
		return (
			<Card className='w-full max-w-2xl mx-auto'>
				<CardHeader>
					<CardTitle className='text-2xl text-center'>
						{result.title}
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					{result.imageUrl && (
						<div className='relative w-full aspect-square max-w-sm mx-auto'>
							<Image
								src={result.imageUrl || '/placeholder.svg'}
								alt={result.title}
								fill
								sizes='100%'
								className='object-cover rounded-lg'
							/>
						</div>
					)}
					<p className='text-center text-lg'>{result.description}</p>
					<Button onClick={resetQuiz} className='w-full'>
						Take Quiz Again
					</Button>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className='w-full max-w-2xl mx-auto'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>
					{currentQuestion.text}
				</CardTitle>
			</CardHeader>
			<CardContent className='space-y-4'>
				<Progress
					value={
						(state.currentQuestionIndex / questions.length) * 100
					}
					className='w-full'
				/>
				{currentQuestion.imageUrl && (
					<div className='relative w-full aspect-video'>
						<Image
							src={currentQuestion.imageUrl || '/placeholder.svg'}
							alt={currentQuestion.text}
							fill
							sizes='100%'
							className='object-cover rounded-lg'
						/>
					</div>
				)}
				<div className='grid gap-4'>
					{currentQuestion.options.map((option) => (
						<Button
							key={option.id}
							variant='outline'
							className='w-full text-lg py-8'
							onClick={() => handleAnswer(option.id)}>
							{option.text}
						</Button>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
