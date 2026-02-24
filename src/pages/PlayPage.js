import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import { useSentenceProgress } from '../hooks/useSentenceProgress';
import HSKSetup from '../components/play/HSKSetup';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const { handleCorrectAnswer, wordMastery, setCurrentPage } = useApp();
  const gameSession = useGameSession();
  const { sentenceProgress, recordAttempt } = useSentenceProgress();

  // Track if current question used "I don't know"
  const [usedDontKnow, setUsedDontKnow] = useState(false);

  const handleStart = (sentences) => {
    gameSession.startSession(sentences, 'hsk');
    setUsedDontKnow(false);
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);

    if (isCorrect) {
      handleCorrectAnswer(
        gameSession.currentSentence.targetWordId,
        gameSession.currentSentence.id,
        null
      );
    }

    gameSession.recordResult(gameSession.currentSentence.id, {
      correct: isCorrect,
      answer: gameSession.userAnswer,
      usedDontKnow: false
    });

    if (recordAttempt) {
      recordAttempt(gameSession.currentSentence.id, isCorrect);
    }
  };

  const handleDontKnow = (sentence) => {
    // Mark as incorrect
    gameSession.setFeedback('Not quite');
    gameSession.setIsAnswered(true);

    // Fill in the correct answer
    gameSession.setUserAnswer(sentence.answer);

    // Show explanation
    gameSession.setShowExplanation(true);

    // Record the incorrect attempt
    if (recordAttempt) {
      recordAttempt(sentence.id, false);
    }

    // Record in game session results with flag
    gameSession.recordResult(sentence.id, {
      correct: false,
      answer: sentence.answer,
      usedDontKnow: true
    });

    // Set the flag for this question
    setUsedDontKnow(true);
  };

  const handleNext = () => {
    gameSession.goToNext();
    // Reset the flag for the next question
    setUsedDontKnow(false);
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  // Build review items, filtering out the "I don't know" user answer
  const reviewItems = gameSession.sessionSentences
    .filter(s => gameSession.sessionResults[s.id])
    .map(s => {
      const r = gameSession.sessionResults[s.id];
      return {
        sentence: s.sentence,
        native: s.nativeSentence,
        // Don't show user answer if they used "I don't know"
        userAnswer: r.usedDontKnow ? '' : r.answer,
        correctAnswer: s.answer,
        isCorrect: r.correct,
        usedDontKnow: r.usedDontKnow || false
      };
    });

  return (
    <section className="view is-active" data-view="play">
      <header className="header header--play">
        <h1>Cloze 中文</h1>
      </header>

      {gameSession.gameState === 'setup' && (
        <HSKSetup onStart={handleStart} />
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
          onRecordAttempt={recordAttempt}
          onDontKnow={handleDontKnow}
          sentenceProgress={sentenceProgress}
          usedDontKnow={usedDontKnow}
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          reviewItems={reviewItems}
          onPlayAgain={gameSession.resetToSetup}
          onReturnToChapters={() => setCurrentPage('levels')}
        />
      )}
    </section>
  );
}