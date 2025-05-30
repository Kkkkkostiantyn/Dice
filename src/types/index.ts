export type GuessType = 'under' | 'over';

export interface GuessResult {
    time: string;
    guess: string;
    result: number;
    won: boolean;
}