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

export { IApiEndpoint };

// `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`

// https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
