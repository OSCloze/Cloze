import { hsk1Words } from './words/hsk1';
import { hsk2Words } from './words/hsk2';
import { hsk3Words } from './words/hsk3';
import { hsk1Sentences } from './sentences/hsk1';
import { hsk2Sentences } from './sentences/hsk2';
import { hsk3Sentences } from './sentences/hsk3';

// Word collections by HSK level
export const hskWords = {
    1: hsk1Words,
    2: hsk2Words,
    3: hsk3Words,
};

// Sentence collections by HSK level
export const hskSentences = {
    1: hsk1Sentences,
    2: hsk2Sentences,
    3: hsk3Sentences,
};

// Helper: get words for a specific HSK level
export const getHSKWordsByLevel = (level) => hskWords[level] || [];

// Helper: get all HSK words (combined)
export const getAllHSKWords = () => [
    ...hsk1Words,
    ...hsk2Words,
    ...hsk3Words,
];

// Helper: get sentences for a specific HSK level
export const getHSKSentencesByLevel = (level) => hskSentences[level] || [];

// Helper: get all sentences (for global search)
export const getAllHSKSentences = () => [
    ...hsk1Sentences,
    ...hsk2Sentences,
    ...hsk3Sentences,
];

// Combined word list (all HSK words, no foundation)
export const allWords = getAllHSKWords();

// Lookup a word by ID
export const getWordById = (id) => {
    return allWords.find(word => word.id === id);
};