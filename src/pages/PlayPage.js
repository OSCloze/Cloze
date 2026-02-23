import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useGameSession } from '../hooks/useGameSession';
import HSKSetup from '../components/play/HSKSetup';
import GameScreen from '../components/play/GameScreen';
import ReviewScreen from '../components/play/ReviewScreen';

export default function PlayPage() {
  const { handleCorrectAnswer, wordMastery, setCurrentPage } = useApp();
  const gameSession = useGameSession();

  const handleStart = (sentences) => {
    gameSession.startSession(sentences, 'hsk');
  };

  const handleCheck = () => {
    const isCorrect = gameSession.checkAnswer(gameSession.currentSentence.answer);

    if (isCorrect) {
      handleCorrectAnswer(
        gameSession.currentSentence.targetWordId,
        gameSession.currentSentence.id,
        null // no chapterId needed
      );
    }

    gameSession.recordResult(gameSession.currentSentence.id, {
      correct: isCorrect,
      answer: gameSession.userAnswer
    });
  };

  const handleNext = () => {
    gameSession.goToNext();
  };

  const handleWordClick = (wordData) => {
    gameSession.setSelectedWord(wordData);
  };

  // Build review items
  const reviewItems = gameSession.sessionSentences
    .filter(s => gameSession.sessionResults[s.id])
    .map(s => {
      const r = gameSession.sessionResults[s.id];
      return {
        sentence: s.sentence,
        native: s.nativeSentence,
        userAnswer: r.answer,
        correctAnswer: s.answer,
        isCorrect: r.correct
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
        />
      )}

      {gameSession.gameState === 'review' && (
        <ReviewScreen
          reviewItems={reviewItems}
          onPlayAgain={gameSession.resetToSetup}
          onReturnToChapters={() => setCurrentPage('levels')} // go to levels page
        />
      )}
    </section>
  );
}