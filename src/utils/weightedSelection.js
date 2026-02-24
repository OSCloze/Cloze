// src/utils/weightedSelection.js
import { calculateSentenceWeight } from './selectionWeights';

/**
 * Select sentences using weighted random algorithm
 * Each sentence's probability of being selected is proportional to its weight
 * @param {Array} sentences - Array of sentence objects
 * @param {Object} sentenceProgress - Progress data for sentences
 * @param {number} count - Number of sentences to select
 * @returns {Array} - Selected sentences
 */
export const selectWeightedSentences = (sentences, sentenceProgress, count) => {
    if (!sentences || sentences.length === 0) return [];
    if (count >= sentences.length) return [...sentences]; // Return all if count exceeds available

    // Calculate weights for all sentences
    const weightedSentences = sentences.map(sentence => {
        const stats = sentenceProgress[sentence.id] || { correct: 0, incorrect: 0 };
        const weight = calculateSentenceWeight(sentence, stats);
        return { sentence, weight };
    });

    // Create a copy of the array to work with
    let availableSentences = [...weightedSentences];
    const selected = [];

    // Select 'count' sentences using weighted random selection without replacement
    for (let i = 0; i < count; i++) {
        if (availableSentences.length === 0) break;

        // Calculate total weight of remaining sentences
        const totalWeight = availableSentences.reduce((sum, item) => sum + item.weight, 0);

        // Generate a random number between 0 and totalWeight
        let random = Math.random() * totalWeight;

        // Find the sentence where the cumulative weight crosses the random threshold
        let cumulativeWeight = 0;
        let selectedIndex = 0;

        for (let j = 0; j < availableSentences.length; j++) {
            cumulativeWeight += availableSentences[j].weight;
            if (random <= cumulativeWeight) {
                selectedIndex = j;
                break;
            }
        }

        // Add the selected sentence to results
        selected.push(availableSentences[selectedIndex].sentence);

        // Remove it from available sentences (no replacement)
        availableSentences.splice(selectedIndex, 1);
    }

    return selected;
};

/**
 * Alternative: Weighted selection with some randomness but still prioritizes top weights
 * This gives more variety while still strongly favoring high-weight sentences
 */
export const selectWeightedSentencesWithRandomness = (sentences, sentenceProgress, count) => {
    if (!sentences || sentences.length === 0) return [];
    if (count >= sentences.length) return [...sentences];

    // Calculate weights
    const weightedSentences = sentences.map(sentence => {
        const stats = sentenceProgress[sentence.id] || { correct: 0, incorrect: 0 };
        const weight = calculateSentenceWeight(sentence, stats);
        return { sentence, weight };
    });

    // Add significant randomness to weights (50-200% of original)
    const withRandom = weightedSentences.map(item => ({
        ...item,
        randomWeight: item.weight * (0.5 + Math.random() * 1.5) // 50% to 200% of original
    }));

    // Sort by randomized weight
    withRandom.sort((a, b) => b.randomWeight - a.randomWeight);

    // Return top N
    return withRandom.slice(0, count).map(item => item.sentence);
};

// For debugging: See the weight distribution
export const getWeightDistribution = (sentences, sentenceProgress) => {
    return sentences.map(sentence => {
        const stats = sentenceProgress[sentence.id] || { correct: 0, incorrect: 0 };
        const weight = calculateSentenceWeight(sentence, stats);
        return {
            id: sentence.id,
            topic: sentence.topic,
            correct: stats.correct || 0,
            incorrect: stats.incorrect || 0,
            weight: weight
        };
    }).sort((a, b) => b.weight - a.weight);
};