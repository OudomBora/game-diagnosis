export interface Question {
    id: string;
    text: string;
    imageUrl?: string;
    options: {
        id: string;
        text: string;
        score: Record<string, number>;
    }[]
}

export interface Result {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    threshold: Record<string, number>;
}

export interface QuizState {
    currentQuestionIndex: number;
    answers: Record<string, string>;
    completed: boolean;
}