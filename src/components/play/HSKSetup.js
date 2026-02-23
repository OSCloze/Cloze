import React, { useState, useEffect } from 'react';
import { getHSKSentencesByLevel } from '../../data';

export default function HSKSetup({ onStart }) {
    const [hskLevel, setHskLevel] = useState(1);
    const [topic, setTopic] = useState('all');
    const [sessionSize, setSessionSize] = useState(5);
    const [availableTopics, setAvailableTopics] = useState([]);

    // Update available topics when HSK level changes
    useEffect(() => {
        const sentences = getHSKSentencesByLevel(hskLevel);

        // Extract unique topics from sentences
        const topics = new Set();
        sentences.forEach(sentence => {
            if (sentence.topic) {
                topics.add(sentence.topic);
            }
        });

        const topicList = Array.from(topics).sort();
        setAvailableTopics(topicList);

        // Reset topic selection if current topic not available in new level
        if (topic !== 'all' && !topicList.includes(topic)) {
            setTopic('all');
        }
    }, [hskLevel]);

    const handleStart = () => {
        let sentences = getHSKSentencesByLevel(hskLevel);

        // Filter by topic if not 'all'
        if (topic !== 'all') {
            sentences = sentences.filter(s => s.topic === topic);
        }

        if (sentences.length === 0) {
            alert('No sentences available for this selection.');
            return;
        }

        // Randomly select the requested number
        const shuffled = [...sentences].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(sessionSize, sentences.length));

        onStart(selected);
    };

    return (
        <div className="play-config">
            <h2 className="play-config-title">HSK Practice</h2>
            <p className="mode-description">
                Practice sentences by HSK level and topic.
            </p>

            <div className="play-config-row">
                <label htmlFor="hskLevel" className="play-config-label">
                    HSK Level
                </label>
                <select
                    id="hskLevel"
                    className="play-config-select"
                    value={hskLevel}
                    onChange={(e) => setHskLevel(Number(e.target.value))}
                >
                    <option value={1}>HSK 1</option>
                    <option value={2}>HSK 2</option>
                    <option value={3}>HSK 3</option>
                </select>
            </div>

            <div className="play-config-row">
                <label htmlFor="topic" className="play-config-label">
                    Topic
                </label>
                <select
                    id="topic"
                    className="play-config-select"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                >
                    <option value="all">All Topics</option>
                    {availableTopics.map(t => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                </select>
                {availableTopics.length === 0 && (
                    <p className="topic-note">No topics available for this level</p>
                )}
            </div>

            <div className="play-config-row">
                <label htmlFor="sessionSize" className="play-config-label">
                    Number of questions
                </label>
                <select
                    id="sessionSize"
                    className="play-config-select"
                    value={sessionSize}
                    onChange={(e) => setSessionSize(Number(e.target.value))}
                >
                    <option value={5}>5 questions</option>
                    <option value={10}>10 questions</option>
                    <option value={20}>20 questions</option>
                </select>
            </div>

            <button
                type="button"
                className="btn-primary"
                onClick={handleStart}
            >
                Start Practice
            </button>
        </div>
    );
}