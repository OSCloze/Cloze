import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { chapters, getWordById, getWordsForLevel } from '../data';
import WordGrid from '../components/words/WordGrid';
import WordModal from '../components/words/WordModal';

export default function ChaptersPage() {
    const {
        wordMastery,
        expandedLevels,
        toggleLevel,
        setCurrentPage,
        startChapter,
        completedChapters,
        getChapterProgress,
        replayChapter
    } = useApp();

    const [selectedWord, setSelectedWord] = useState(null);

    const foundationWords = getWordsForLevel(0);

    const handleWordClick = (word) => {
        setSelectedWord(word);
    };

    const handleCloseModal = () => {
        setSelectedWord(null);
    };

    const handlePlayStory = (chapterId) => {
        startChapter(chapterId);
        setCurrentPage('play');
    };

    const handleReplayChapter = (chapterId) => {
        replayChapter(chapterId); // This sets the replay flag without resetting progress
        setCurrentPage('play');
    };

    const isChapterLocked = (chapterId) => {
        if (chapterId === 1) return false;
        return !completedChapters.includes(chapterId - 1);
    };

    const isChapterCompleted = (chapterId) => {
        return completedChapters.includes(chapterId);
    };

    const getChapterPracticeProgress = (chapterId) => {
        const progress = getChapterProgress(chapterId);
        return {
            revealed: progress.revealedPractice || 0,
            total: progress.totalPractice || 0,
            percentage: progress.practicePercentage || 0
        };
    };

    const getWordObjectsFromIds = (wordIds) => {
        return wordIds.map(id => getWordById(id)).filter(Boolean);
    };

    return (
        <section className="view is-active" data-view="chapters">
            <header className="header">
                <h1>Chapters</h1>
                <p className="header-desc">
                    Learn words by chapter. Expand each section to see vocabulary.
                </p>
            </header>

            <div className="chapters-scrollable">
                <ul className="chapter-list">
                    {/* Foundation Section */}
                    <li className="chapter-item foundation-item">
                        <div
                            className={`chapter-header ${expandedLevels['foundation'] ? 'expanded' : ''}`}
                            onClick={() => toggleLevel('foundation')}
                        >
                            <span className="chapter-expand-icon">
                                {expandedLevels['foundation'] ? '▼' : '▶'}
                            </span>
                            <span className="chapter-title foundation-title">
                                Foundation
                            </span>
                            <span className="chapter-stats">
                                {foundationWords.length} words
                            </span>
                        </div>

                        {expandedLevels['foundation'] && (
                            <div className="chapter-content">
                                <p className="chapter-description">
                                    20 essential grammatical words and particles
                                </p>
                                <WordGrid
                                    words={foundationWords}
                                    wordMastery={wordMastery}
                                    selectedWordId={selectedWord?.id}
                                    onWordClick={handleWordClick}
                                    isFoundation={true}
                                />
                            </div>
                        )}
                    </li>

                    {/* Chapters */}
                    {chapters.map((chapter) => {
                        const chapterWords = getWordObjectsFromIds(chapter.words || []);
                        const isExpanded = expandedLevels[`chapter-${chapter.id}`] || false;
                        const isLocked = isChapterLocked(chapter.id);
                        const isCompleted = isChapterCompleted(chapter.id);
                        const progress = getChapterPracticeProgress(chapter.id);

                        const practiceSentences = chapter.sentences?.filter(s => s.type === 'practice') || [];
                        const hasProgress = progress.revealed > 0 && !isCompleted;

                        return (
                            <li key={chapter.id} className="chapter-item">
                                <div
                                    className={`chapter-header ${isLocked ? 'locked' : ''} ${isExpanded ? 'expanded' : ''} ${isCompleted ? 'completed' : ''}`}
                                    onClick={() => !isLocked && toggleLevel(`chapter-${chapter.id}`)}
                                >
                                    <span className="chapter-expand-icon">
                                        {isExpanded ? '▼' : '▶'}
                                    </span>
                                    <span className={`chapter-title ${isCompleted ? 'completed-title' : ''}`}>
                                        Chapter {chapter.id}: {chapter.title}
                                    </span>
                                    <span className="chapter-stats">
                                        {chapterWords.length} words
                                        {!isLocked && practiceSentences.length > 0 && !isCompleted && (
                                            <span className="chapter-progress-badge">
                                                {progress.revealed}/{practiceSentences.length}
                                            </span>
                                        )}
                                        {isCompleted && (
                                            <span className="chapter-complete-badge" title="Chapter completed">
                                                ✓
                                            </span>
                                        )}
                                    </span>
                                </div>

                                {isExpanded && !isLocked && (
                                    <div className="chapter-content">
                                        {isCompleted && (
                                            <div className="chapter-replay-container">
                                                <button
                                                    className="chapter-replay-pill"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleReplayChapter(chapter.id);
                                                    }}
                                                    title="Replay chapter (preserves your progress)"
                                                >
                                                    ↻ Play Again
                                                </button>
                                            </div>
                                        )}

                                        {hasProgress && !isCompleted && (
                                            <div className="chapter-progress-container">
                                                <div className="chapter-progress-bar">
                                                    <div
                                                        className="chapter-progress-fill"
                                                        style={{ width: `${progress.percentage}%` }}
                                                    />
                                                </div>
                                                <span className="chapter-progress-text">
                                                    {progress.revealed} of {progress.total} practice sentences completed
                                                </span>
                                            </div>
                                        )}

                                        <p className="chapter-description">{chapter.description}</p>

                                        <WordGrid
                                            words={chapterWords}
                                            wordMastery={wordMastery}
                                            selectedWordId={selectedWord?.id}
                                            onWordClick={handleWordClick}
                                            isFoundation={false}
                                        />
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {selectedWord && (
                <WordModal
                    word={selectedWord}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
}