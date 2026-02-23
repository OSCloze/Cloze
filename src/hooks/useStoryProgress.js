// src/hooks/useStoryProgress.js
import { useState, useEffect } from 'react';
import { chapters } from '../data';

export function useStoryProgress() {
    const [currentChapter, setCurrentChapter] = useState(() => {
        const saved = localStorage.getItem('currentChapter');
        return saved ? parseInt(saved) : 1;
    });

    const [completedChapters, setCompletedChapters] = useState(() => {
        const saved = localStorage.getItem('completedChapters');
        return saved ? JSON.parse(saved) : [];
    });

    const [chapterProgress, setChapterProgress] = useState(() => {
        const saved = localStorage.getItem('chapterProgress');
        if (saved) return JSON.parse(saved);

        const initial = {};
        chapters.forEach(chapter => {
            initial[chapter.id] = {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            };
        });
        return initial;
    });

    const [replayChapterId, setReplayChapterId] = useState(null);

    useEffect(() => {
        localStorage.setItem('currentChapter', currentChapter.toString());
    }, [currentChapter]);

    useEffect(() => {
        localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
    }, [completedChapters]);

    useEffect(() => {
        localStorage.setItem('chapterProgress', JSON.stringify(chapterProgress));
    }, [chapterProgress]);

    const startChapter = (chapterId) => {
        setCurrentChapter(chapterId);
    };

    const markSentenceRevealed = (chapterId, sentenceId) => {
        setChapterProgress(prev => {
            const chapter = prev[chapterId];
            if (!chapter) return prev;

            if (!chapter.revealedSentences.includes(sentenceId)) {
                const updatedRevealed = [...chapter.revealedSentences, sentenceId];

                const chapterData = chapters.find(c => c.id === chapterId);
                const practiceSentences = chapterData?.sentences?.filter(s => s.type === 'practice') || [];
                const totalPracticeSentences = practiceSentences.length;

                const revealedPracticeCount = updatedRevealed.filter(id => {
                    const sentence = chapterData?.sentences?.find(s => s.id === id);
                    return sentence?.type === 'practice';
                }).length;

                const isCompleted = revealedPracticeCount === totalPracticeSentences && totalPracticeSentences > 0;

                if (isCompleted) {
                    setTimeout(() => {
                        setCompletedChapters(current => {
                            if (!current.includes(chapterId)) {
                                console.log(`Chapter ${chapterId} completed!`);
                                return [...current, chapterId];
                            }
                            return current;
                        });
                    }, 0);
                }

                return {
                    ...prev,
                    [chapterId]: {
                        ...chapter,
                        revealedSentences: updatedRevealed,
                        completed: isCompleted
                    }
                };
            }
            return prev;
        });
    };

    const replayChapter = (chapterId) => {
        // Create a temporary replay session without modifying permanent progress
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return;

        // Set replay flag - this will trigger a fresh session in PlayPage
        // but won't modify the stored progress
        setReplayChapterId(chapterId);

        // Don't modify completedChapters or chapterProgress
        // This preserves the user's actual progress
    };

    const getCurrentSentence = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return null;

        // Always return the first sentence, regardless of progress
        // This ensures chapters always start from the beginning
        return chapter.sentences[0];
    };

    const moveToNextSentence = (chapterId) => {
        // This function can remain but won't affect chapter starting point
        setChapterProgress(prev => {
            const chapter = prev[chapterId];
            if (!chapter) return prev;

            const chapterSentences = chapters.find(c => c.id === chapterId)?.sentences || [];
            const nextIndex = (chapter.currentSentenceIndex || 0) + 1;

            if (nextIndex < chapterSentences.length) {
                return {
                    ...prev,
                    [chapterId]: {
                        ...chapter,
                        currentSentenceIndex: nextIndex
                    }
                };
            }
            return prev;
        });
    };

    const isChapterCompleted = (chapterId) => {
        return completedChapters.includes(chapterId);
    };

    const isChapterCompletelyFinished = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return false;

        const practiceSentences = chapter.sentences.filter(s => s.type === 'practice');
        const totalPractice = practiceSentences.length;

        const progress = chapterProgress[chapterId];
        if (!progress) return false;

        const revealedPractice = progress.revealedSentences.filter(id => {
            const sentence = chapter.sentences.find(s => s.id === id);
            return sentence?.type === 'practice';
        }).length;

        return revealedPractice === totalPractice && totalPractice > 0;
    };

    const getChapterProgress = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        const progress = chapterProgress[chapterId] || {
            completed: false,
            revealedSentences: [],
            currentSentenceIndex: 0
        };

        const practiceSentences = chapter?.sentences?.filter(s => s.type === 'practice') || [];
        const totalPractice = practiceSentences.length;
        const revealedPractice = progress.revealedSentences.filter(id => {
            const sentence = chapter?.sentences?.find(s => s.id === id);
            return sentence?.type === 'practice';
        }).length;

        return {
            ...progress,
            totalPractice,
            revealedPractice,
            practicePercentage: totalPractice > 0 ? Math.round((revealedPractice / totalPractice) * 100) : 0,
            totalSentences: chapter?.sentences?.length || 0,
            revealedCount: progress.revealedSentences.length
        };
    };

    const getChapterStats = (chapterId) => {
        const chapter = chapters.find(c => c.id === chapterId);
        const progress = getChapterProgress(chapterId);

        return {
            revealedCount: progress.revealedCount,
            totalSentences: progress.totalSentences,
            revealedPractice: progress.revealedPractice,
            totalPractice: progress.totalPractice,
            percentage: progress.practicePercentage,
            isCompleted: completedChapters.includes(chapterId)
        };
    };

    const resetStoryProgress = () => {
        setCurrentChapter(1);
        setCompletedChapters([]);
        const initial = {};
        chapters.forEach(chapter => {
            initial[chapter.id] = {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            };
        });
        setChapterProgress(initial);
    };

    const resetChapterProgress = (chapterId) => {
        setChapterProgress(prev => ({
            ...prev,
            [chapterId]: {
                completed: false,
                revealedSentences: [],
                currentSentenceIndex: 0
            }
        }));
        setCompletedChapters(prev => prev.filter(id => id !== chapterId));
    };

    return {
        currentChapter,
        completedChapters,
        chapterProgress,
        replayChapterId,
        setReplayChapterId,
        startChapter,
        markSentenceRevealed,
        replayChapter,
        getCurrentSentence,
        moveToNextSentence,
        isChapterCompleted,
        isChapterCompletelyFinished,
        getChapterProgress,
        getChapterStats,
        resetStoryProgress,
        resetChapterProgress
    };
}