// src/pages/LevelsPage.js
import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { hskWords, getWordById } from '../data';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

export default function LevelsPage() {
    const { wordMastery, expandedLevels, toggleLevel } = useApp();
    const [selectedWord, setSelectedWord] = useState(null);

    // Debug: Log what's in hskWords
    useEffect(() => {
        console.log('hskWords:', hskWords);
        console.log('hskWords[1]:', hskWords[1]);
        console.log('hskWords[2]:', hskWords[2]);
        console.log('hskWords[3]:', hskWords[3]);
    }, []);

    const handleWordClick = (word) => {
        console.log('Word clicked:', word);
        setSelectedWord(word);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
    };

    // Define HSK levels with their display names
    const hskLevels = [
        { id: 1, name: 'HSK 1', wordCount: hskWords[1]?.length || 0 },
        { id: 2, name: 'HSK 2', wordCount: hskWords[2]?.length || 0 },
        { id: 3, name: 'HSK 3', wordCount: hskWords[3]?.length || 0 },
    ];

    return (
        <section className="view is-active" data-view="levels">
            <header className="header">
                <h1>HSK Vocabulary</h1>
                <p className="header-desc">
                    Browse and learn words by HSK level. Click any word to see details.
                </p>
            </header>

            <div className="levels-scrollable">
                <ul className="level-list">
                    {hskLevels.map((level) => {
                        const isExpanded = expandedLevels[`hsk${level.id}`] || false;
                        const words = hskWords[level.id] || [];

                        return (
                            <li key={level.id} className="level-item">
                                {/* Level Header */}
                                <div
                                    className={`level-header ${isExpanded ? 'expanded' : ''}`}
                                    onClick={() => toggleLevel(`hsk${level.id}`)}
                                >
                                    <span className="level-expand-icon">
                                        {isExpanded ? '▼' : '▶'}
                                    </span>
                                    <span className="level-name">
                                        {level.name}
                                    </span>
                                    <span className="level-stats">
                                        {words.length} words
                                    </span>
                                </div>

                                {/* Expanded Content - Word Grid */}
                                {isExpanded && (
                                    <div className="level-content">
                                        {words.length > 0 ? (
                                            <WordGrid
                                                words={words}
                                                wordMastery={wordMastery}
                                                selectedWordId={selectedWord?.id}
                                                onWordClick={handleWordClick}
                                            />
                                        ) : (
                                            <p className="no-words-message">
                                                No words available for this level yet.
                                            </p>
                                        )}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Word Modal */}
            {selectedWord && (
                <WordModal
                    word={selectedWord}
                    masteryCount={wordMastery[selectedWord.id] || 0}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}