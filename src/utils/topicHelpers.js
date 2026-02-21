// src/utils/topicHelpers.js
import { chapters } from '../data';

/**
 * Convert a topic string to a display name automatically
 * Examples: 
 *   "Beverage" -> "Beverage"
 *   "Tableware" -> "Tableware"
 *   "Action" -> "Action"
 * You can override with a manual mapping if needed, but not required
 */
const getAutomaticDisplayName = (topic) => {
    // If you want special formatting for certain topics, add them here
    // But this is optional - you can leave it empty and it will just return the topic
    const specialCases = {
        // Add any special formatting here if needed
        // "Beverage": "Beverages & Drinks",  // Uncomment if you want this
        // "Tableware": "Tableware & Utensils", // Uncomment if you want this
    };

    return specialCases[topic] || topic;
};

/**
 * Get all available topics from completed chapters (excluding narrative)
 * @param {Array} completedChapters - Array of completed chapter IDs
 * @returns {Array} - Array of unique topic strings
 */
export const getAvailableTopics = (completedChapters) => {
    // Safety check: if completedChapters is undefined or not an array, return empty array
    if (!completedChapters || !Array.isArray(completedChapters)) {
        return [];
    }

    const topics = new Set();

    completedChapters.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences && Array.isArray(chapter.sentences)) {
            // Only include topics from practice sentences, exclude narrative
            chapter.sentences.forEach(sentence => {
                if (sentence.topic && sentence.type !== 'narrative') {
                    topics.add(sentence.topic);
                }
            });
        }
    });

    return Array.from(topics).sort();
};

/**
 * Get sentences filtered by topic and completed chapters (excluding narrative)
 * @param {string} topic - Topic to filter by (or 'all' for all topics)
 * @param {Array} completedChapters - Array of completed chapter IDs
 * @returns {Array} - Array of sentences matching the topic
 */
export const getSentencesByTopic = (topic, completedChapters) => {
    // Safety check
    if (!completedChapters || !Array.isArray(completedChapters)) {
        return [];
    }

    let sentences = [];

    completedChapters.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences && Array.isArray(chapter.sentences)) {
            // First filter to only practice sentences
            const practiceSentences = chapter.sentences.filter(s => s.type !== 'narrative');

            if (topic === 'all') {
                sentences = [...sentences, ...practiceSentences];
            } else {
                const filtered = practiceSentences.filter(s => s.topic === topic);
                sentences = [...sentences, ...filtered];
            }
        }
    });

    return sentences;
};

/**
 * Get topic display name - automatically handles any topic
 * @param {string} topic 
 * @returns {string}
 */
export const getTopicDisplayName = (topic) => {
    return getAutomaticDisplayName(topic);
};

/**
 * Check if a topic has any practice sentences in completed chapters
 * @param {string} topic 
 * @param {Array} completedChapters 
 * @returns {boolean}
 */
export const hasPracticeSentences = (topic, completedChapters) => {
    if (!completedChapters || !Array.isArray(completedChapters)) {
        return false;
    }

    for (const chapterId of completedChapters) {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences && Array.isArray(chapter.sentences)) {
            const hasTopic = chapter.sentences.some(s =>
                s.topic === topic && s.type !== 'narrative'
            );
            if (hasTopic) return true;
        }
    }
    return false;
};

/**
 * Get all unique topics from all chapters (excluding narrative)
 * @returns {Array} - Array of unique topic strings
 */
export const getAllTopics = () => {
    const topics = new Set();

    chapters.forEach(chapter => {
        if (chapter.sentences && Array.isArray(chapter.sentences)) {
            chapter.sentences.forEach(sentence => {
                if (sentence.topic && sentence.type !== 'narrative') {
                    topics.add(sentence.topic);
                }
            });
        }
    });

    return Array.from(topics).sort();
};

/**
 * Get a count of practice sentences per topic
 * @param {Array} completedChapters - Optional: filter by completed chapters
 * @returns {Object} - Object with topic names as keys and counts as values
 */
export const getTopicCounts = (completedChapters = null) => {
    const counts = {};

    const chaptersToCheck = completedChapters
        ? chapters.filter(c => completedChapters.includes(c.id))
        : chapters;

    chaptersToCheck.forEach(chapter => {
        if (chapter.sentences && Array.isArray(chapter.sentences)) {
            chapter.sentences.forEach(sentence => {
                if (sentence.topic && sentence.type !== 'narrative') {
                    counts[sentence.topic] = (counts[sentence.topic] || 0) + 1;
                }
            });
        }
    });

    return counts;
};