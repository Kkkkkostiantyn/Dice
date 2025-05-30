'use client';

import {useEffect, useState} from 'react';
import {GuessResult} from '@/types';

const HISTORY_KEY = 'guess-history';

export function useGuessGame() {
    const [guess, setGuess] = useState(50);
    const [direction, setDirection] = useState<'under' | 'over'>('under');
    const [generatedNumber, setGeneratedNumber] = useState(0);
    const [history, setHistory] = useState<GuessResult[]>([]);
    const [lastResult, setLastResult] = useState<GuessResult | undefined>(undefined);

    // Load history from localStorage on first load
    useEffect(() => {
        const stored = localStorage.getItem(HISTORY_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setHistory(parsed);
                }
            } catch (e) {
                console.error('Failed to parse stored history', e);
            }
        }
    }, []);

    // Save to localStorage whenever history updates
    useEffect(() => {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }, [history]);

    const makeGuess = () => {
        const number = Math.floor(Math.random() * 101); // 0–100
        setGeneratedNumber(number);

        const win =
            (direction === 'under' && number < guess) ||
            (direction === 'over' && number > guess);

        const result: GuessResult = {
            time: new Date().toLocaleTimeString(),
            guess: `${direction.charAt(0).toUpperCase() + direction.slice(1)} ${guess}`,
            result: number,
            won: win,
        };

        setHistory((prev) => [result, ...prev.slice(0, 9)]); // Keep last 10 entries
        setLastResult(result);
    };

    return {
        guess,
        setGuess,
        direction,
        setDirection,
        generatedNumber,
        makeGuess,
        history,
        lastResult,
    };
}
