interface IApiEndpoint {
	amount: number;
	category: number;
	difficulty: 'easy' | 'medium' | 'hard';
}

interface IQuestion {
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export { IApiEndpoint, IQuestion };
