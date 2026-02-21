import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import { chapters, getWordById } from '../data';
import { getAvailableLevels, isLevelUnlocked } from '../utils/levelHelpers';
import { getSentencesForLevel, selectSentencesByMastery } from '../utils/sentenceHelpers';
import PracticeSetup from '../components/play/PracticeSetup';
import VocabularyLearning from '../components/play/VocabularyLearning';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const [mode, setMode] = useState('story');
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [currentChapterWords, setCurrentChapterWords] = useState([]);

  const {
    completedLevels,
    handleCorrectAnswer,
    levels,
    answeredSentences,
    wordMastery,
    completedChapters,
    chapterProgress,
    getChapterProgress,
    getCurrentSentence,
    markSentenceRevealed,
    moveToNextSentence,
    isChapterCompleted,
    replayChapterId,
    setReplayChapterId,
    startChapter,
    setCurrentPage
  } = useApp();

  const gameSession = useGameSession();

  const isChapter1Completed = completedChapters?.includes(1) || false;

  const getCurrentChapter = () => {
    for (let i = 1; i <= chapters.length; i++) {
      if (!completedChapters?.includes(i)) {
        return chapters.find(c => c.id === i);
      }
    }
    return chapters[chapters.length - 1];
  };

  const currentChapter = getCurrentChapter();
  const progress = currentChapter ? getChapterProgress(currentChapter.id) : null;
  const isFirstTimeInChapter = currentChapter && progress && progress.revealedSentences.length === 0;

  // Helper to start a chapter by ID (used for replay and next chapter)
  const startChapterById = (chapterId) => {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    const progress = getChapterProgress(chapterId);
    const isFirstTime = progress.revealedSentences.length === 0;

    gameSession.setMode('story');
    gameSession.setChapterId(chapterId);
    gameSession.setChapterTitle(chapter.title);
    gameSession.setChapterImage(chapter.image);

    if (isFirstTime) {
      const chapterWords = chapter.words.map(id => getWordById(id)).filter(Boolean);
      setCurrentChapterWords(chapterWords);
      setShowVocabulary(true);
    } else {
      const currentSentence = getCurrentSentence(chapterId);
      const remainingSentences = chapter.sentences.slice(
        chapter.sentences.findIndex(s => s.id === currentSentence?.id)
      );
      gameSession.startSession(
        remainingSentences,
        'story',
        chapterId,
        chapter.title,
        chapter.image
      );
    }
  };

  // Handle replay flag
  useEffect(() => {
    if (replayChapterId) {
      const chapter = chapters.find(c => c.id === replayChapterId);
      if (chapter) {
        // Reset UI state
        setShowVocabulary(false);
        setCurrentChapterWords([]);

        // Set up for replay - start from the beginning
        gameSession.setMode('story');
        gameSession.setChapterId(replayChapterId);
        gameSession.setChapterTitle(chapter.title);
        gameSession.setChapterImage(chapter.image);

        // Always start from the first sentence for replay
        gameSession.startSession(
          chapter.sentences, // Full chapter from beginning
          'story',
          replayChapterId,
          chapter.title,
          chapter.image
        );

        // Clear the replay flag
        setReplayChapterId(null);
      }
    }
  }, [replayChapterId]);

  // When story mode starts, set up the session with the current chapter's sentences
  useEffect(() => {
    if (gameSession.mode === 'story' && gameSession.chapterId && !gameSession.currentSentence) {
      const chapter = chapters.find(c => c.id === gameSession.chapterId);
      if (chapter) {
        const progress = getChapterProgress(gameSession.chapterId);
        const isFirstTime = progress.revealedSentences.length === 0;

        if (isFirstTime) {
          const chapterWords = chapter.words.map(id => getWordById(id)).filter(Boolean);
          setCurrentChapterWords(chapterWords);
          setShowVocabulary(true);
        } else {
          const currentSentence = getCurrentSentence(gameSession.chapterId);
          const remainingSentences = chapter.sentences.slice(
            chapter.sentences.findIndex(s => s.id === currentSentence?.id)
          );
          gameSession.startSession(
            remainingSentences,
            'story',
            gameSession.chapterId,
            chapter.title,
            chapter.image
          );
        }
      }
    }
  }, [gameSession.mode, gameSession.chapterId]);

  const handleVocabularyComplete = () => {
    setShowVocabulary(false);
    const chapter = chapters.find(c => c.id === gameSession.chapterId);
    if (chapter) {
      const currentSentence = getCurrentSentence(gameSession.chapterId);
      const remainingSentences = chapter.sentences.slice(
        chapter.sentences.findIndex(s => s.id === currentSentence?.id)
      );
      gameSession.startSession(
        remainingSentences,
        'story',
        gameSession.chapterId,
        chapter.title,
        chapter.image
      );
    }
  };

  const handleStartPractice = (selectedTopic, sessionSize) => {
    // Collect sentences from all completed chapters based on topic filter
    let allSentences = [];

    if (selectedTopic === 'all') {
      // Get all sentences from completed chapters
      completedChapters?.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences) {
          // Filter to only practice sentences
          const practiceSentences = chapter.sentences.filter(s => s.type === 'practice');
          allSentences = [...allSentences, ...practiceSentences];
        }
      });
    } else {
      // Get sentences filtered by topic from completed chapters
      completedChapters?.forEach(chapterId => {
        const chapter = chapters.find(c => c.id === chapterId);
        if (chapter && chapter.sentences) {
          // Filter to only practice sentences with matching topic
          const filtered = chapter.sentences.filter(s =>
            s.type === 'practice' && s.topic === selectedTopic
          );
          allSentences = [...allSentences, ...filtered];
        }
      });
    }

    if (allSentences.length === 0) {
      alert('No practice sentences available for the selected topic. Try a different topic.');
      return;
    }

    // Select sentences weighted by word mastery
    const selected = selectSentencesByMastery(
      allSentences,
      sessionSize,
      wordMastery
    );

    gameSession.startSession(selected, 'practice');
  };

  const handleStartStory = () => {
    if (!currentChapter) return;
    startChapterById(currentChapter.id);
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);

    if (isCorrect) {
      handleCorrectAnswer(
        gameSession.currentSentence.targetWordId,
        gameSession.currentSentence.id,
        gameSession.currentSentence.level
      );

      // Only mark practice sentences as revealed
      if (gameSession.mode === 'story' &&
        gameSession.chapterId &&
        gameSession.currentSentence.type === 'practice') {
        markSentenceRevealed(
          gameSession.chapterId,
          gameSession.currentSentence.id
        );
      }
    }

    gameSession.recordResult(gameSession.currentSentence.id, {
      correct: isCorrect,
      answer: gameSession.userAnswer
    });

    if (gameSession.mode === 'story' && gameSession.chapterId) {
      const chapter = chapters.find(c => c.id === gameSession.chapterId);
      const currentIndex = chapter.sentences.findIndex(s => s.id === gameSession.currentSentence.id);
      const isLastSentence = currentIndex === chapter.sentences.length - 1;

      if (isCorrect && isLastSentence) {
        gameSession.setGameState('review');
      }
    }
  };

  const handleNext = () => {
    if (gameSession.mode === 'story' && gameSession.chapterId) {
      const nextIndex = gameSession.currentIndex + 1;
      const isLastInSession = nextIndex >= gameSession.sessionSentences.length;

      if (isLastInSession) {
        const chapter = chapters.find(c => c.id === gameSession.chapterId);
        const currentSentenceId = gameSession.currentSentence.id;
        const isLastChapterSentence = chapter.sentences[chapter.sentences.length - 1].id === currentSentenceId;

        if (isLastChapterSentence) {
          gameSession.setGameState('review');
          return;
        }
      }

      moveToNextSentence(gameSession.chapterId);
    }
    gameSession.goToNext();
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  const handleReturnToChapters = () => {
    gameSession.resetToSetup();
    setCurrentPage('chapters');
  };

  // Build review items from session results
  const reviewItems = gameSession.sessionSentences
    .filter(sentence => gameSession.sessionResults[sentence.id])
    .map(sentence => {
      const result = gameSession.sessionResults[sentence.id];
      return {
        sentence: sentence.sentence || sentence.chinese || '',
        native: sentence.native || sentence.nativeSentence || '',
        userAnswer: result.answer,
        correctAnswer: sentence.answer,
        isCorrect: result.correct
      };
    });

  // Determine next chapter (if any)
  const currentChapterId = gameSession.chapterId;
  const currentChapterIndex = chapters.findIndex(c => c.id === currentChapterId);
  const nextChapter = (currentChapterIndex >= 0 && currentChapterIndex < chapters.length - 1)
    ? chapters[currentChapterIndex + 1]
    : null;

  const handleNextChapter = () => {
    gameSession.resetToSetup();   // go back to setup screen
    setMode('story');             // ensure story mode stays active
  };

  return (
    <section className="view is-active" data-view="play">
      <header className="header header--play">
        <h1>Cloze 中文</h1>
      </header>

      {showVocabulary ? (
        <VocabularyLearning
          words={currentChapterWords}
          onComplete={handleVocabularyComplete}
        />
      ) : (
        gameSession.gameState === 'setup' && (
          <div className="play-content play-content--config">
            <div className="mode-selector">
              <button
                className={`mode-btn ${mode === 'story' ? 'active' : ''}`}
                onClick={() => setMode('story')}
              >
                <span className="mode-label">Story Mode</span>
              </button>
              <button
                className={`mode-btn ${mode === 'practice' ? 'active' : ''} ${!isChapter1Completed ? 'disabled' : ''}`}
                onClick={() => {
                  if (isChapter1Completed) {
                    setMode('practice');
                  }
                }}
                disabled={!isChapter1Completed}
                title={!isChapter1Completed ? "Complete Chapter 1 first to unlock Practice Mode" : ""}
              >
                <span className="mode-label">Practice Mode</span>
              </button>
            </div>

            {mode === 'story' && currentChapter && (
              <div className="story-setup">
                <div className="current-chapter-card">
                  {currentChapter.image && (
                    <div className="chapter-image-container">
                      <img
                        src={currentChapter.image}
                        alt={`Chapter ${currentChapter.id}`}
                        className="chapter-image"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                  )}
                  <div className="chapter-info">
                    <span className="chapter-number">Chapter {currentChapter.id}</span>
                    <h3 className="chapter-title">{currentChapter.title}</h3>
                    <p className="chapter-description">{currentChapter.description}</p>
                    <button
                      className="btn-primary continue-story-btn"
                      onClick={handleStartStory}
                    >
                      {isFirstTimeInChapter ? 'Start Story' : 'Continue Story'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {mode === 'practice' && (
              <div className="practice-setup">
                <PracticeSetup
                  onStart={handleStartPractice}
                  completedChapters={completedChapters}
                />
              </div>
            )}
          </div>
        )
      )}

      {gameSession.gameState === 'playing' && gameSession.currentSentence && (
        <GameScreen
          currentSentence={gameSession.currentSentence}
          currentIndex={gameSession.currentIndex}
          sessionSentences={gameSession.sessionSentences}
          userAnswer={gameSession.userAnswer}
          setUserAnswer={gameSession.setUserAnswer}
          isAnswered={gameSession.isAnswered}
          feedback={gameSession.feedback}
          showExplanation={gameSession.showExplanation}
          selectedWord={gameSession.selectedWord}
          onCheck={handleCheck}
          onNext={handleNext}
          onToggleExplanation={gameSession.toggleExplanation}
          onWordClick={handleWordClick}
          onCloseTranslation={gameSession.clearSelectedWord}
          mode={gameSession.mode}
          chapterTitle={gameSession.chapterTitle}
          chapterImage={gameSession.chapterImage}
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          reviewItems={reviewItems}
          onPlayAgain={gameSession.resetToSetup}
          onReturnToChapters={handleReturnToChapters}
          onNextChapter={gameSession.mode === 'story' && nextChapter ? handleNextChapter : null}
        />
      )}
    </section>
  );
}