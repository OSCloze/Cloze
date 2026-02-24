// src/utils/selectionWeights.js

/**
 * Calculate weight for a sentence based on:
 * - Number of incorrect attempts (higher = more weight)
 * - Number of correct attempts (higher = less weight)
 * - Sentence ID (lower = more weight - assuming older content)
 * - Recency (recent incorrect = more weight)
 */
export const calculateSentenceWeight = (sentence, stats) => {
    let weight = 1.0; // Base weight

    // Factor 1: Incorrect attempts - EACH incorrect adds weight
    // This creates more gradation (1 incorrect = 2x, 2 incorrect = 3x, etc.)
    if (stats.incorrect > 0) {
        weight *= (1 + stats.incorrect); // 1 incorrect = 2x, 2 incorrect = 3x, etc.
    }

    // Factor 2: Correct attempts - reduce weight after 3 correct
    if (stats.correct >= 3) {
        // Reduce weight gradually: 3 correct = 0.7x, 4 correct = 0.5x, 5+ correct = 0.3x
        if (stats.correct === 3) weight *= 0.7;
        else if (stats.correct === 4) weight *= 0.5;
        else weight *= 0.3; // 5+ correct
    } else if (stats.correct > 0) {
        // Slight reduction for 1-2 correct
        weight *= (1 - (stats.correct * 0.15)); // 1 correct = 0.85x, 2 correct = 0.7x
    }

    // Factor 3: Sentence ID (lower ID = slightly higher weight)
    // Use a gentler curve so early sentences aren't completely dominant
    const idFactor = 5000 / (sentence.id || 5000);
    weight *= Math.min(idFactor, 2.0); // Cap at 2x

    // Factor 4: Recency - boost if attempted recently
    if (stats.lastAttempt) {
        const hoursSinceLastAttempt = (Date.now() - stats.lastAttempt) / (1000 * 60 * 60);

        // If attempted in last 24 hours AND it was incorrect, boost significantly
        if (hoursSinceLastAttempt < 24 && stats.lastResult === 'incorrect') {
            weight *= 3.0;
        }
        // If attempted in last 24 hours AND it was correct, slight boost (still fresh in memory)
        else if (hoursSinceLastAttempt < 24 && stats.lastResult === 'correct') {
            weight *= 1.3;
        }
        // If attempted in last 2-7 days and was incorrect, moderate boost
        else if (hoursSinceLastAttempt < 168 && stats.lastResult === 'incorrect') {
            weight *= 1.8;
        }
    }

    // Factor 5: Never-seen-before sentences get a slight boost
    if (!stats.lastAttempt) {
        weight *= 1.2; // New sentences appear a bit more often
    }

    // Ensure weight is at least 0.2 (never completely eliminate a sentence)
    return Math.max(weight, 0.2);
};