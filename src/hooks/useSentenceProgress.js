// src/hooks/useSentenceProgress.js
import { useState, useEffect } from 'react';

export function useSentenceProgress() {
    const [sentenceProgress, setSentenceProgress] = useState(() => {
        const saved = localStorage.getItem('sentenceProgress');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('sentenceProgress', JSON.stringify(sentenceProgress));
    }, [sentenceProgress]);

    const recordAttempt = (sentenceId, isCorrect) => {
        setSentenceProgress(prev => {
            const current = prev[sentenceId] || { correct: 0, incorrect: 0, lastAttempt: null };

            return {
                ...prev,
                [sentenceId]: {
                    correct: current.correct + (isCorrect ? 1 : 0),
                    incorrect: current.incorrect + (isCorrect ? 0 : 1),
                    lastAttempt: Date.now(),
                    lastResult: isCorrect ? 'correct' : 'incorrect'
                }
            };
        });
    };

    const getSentenceStats = (sentenceId) => {
        return sentenceProgress[sentenceId] || { correct: 0, incorrect: 0 };
    };

    return {
        sentenceProgress,
        recordAttempt,
        getSentenceStats
    };
}