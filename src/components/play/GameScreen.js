import React from 'react';
import SentenceDisplay from './SentenceDisplay';
import TranslationBox from './TranslationBox';

export default function GameScreen({
  currentSentence,
  currentIndex,
  sessionSentences,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  showExplanation,
  selectedWord,
  onCheck,
  onNext,
  onToggleExplanation,
  onWordClick,
  onCloseTranslation,
  onRecordAttempt,
  onDontKnow,
  sentenceProgress,
  usedDontKnow // New prop to track if "I don't know" was used
}) {

  const handleCheck = () => {
    onCheck();
    // Record the attempt in sentence progress
    if (onRecordAttempt && currentSentence) {
      const isCorrect = feedback.includes('Correct');
      onRecordAttempt(currentSentence.id, isCorrect);
    }
  };

  const handleDontKnow = () => {
    if (onDontKnow) {
      onDontKnow(currentSentence);
    }
  };

  return (
    <div className="play-content play-content--game">
      <div className="main">
        <div className="game-header">
          <p className="progress">
            Question {currentIndex + 1} of {sessionSentences.length}
          </p>
          <div
            className={`feedback ${feedback.includes('Correct') ? 'correct' : feedback ? 'wrong' : ''}`}
            hidden={!feedback}
          >
            {feedback}
          </div>
        </div>

        {/* English translation always shown */}
        <div className="english-translation">
          {currentSentence?.nativeSentence}
        </div>

        <SentenceDisplay
          sentence={currentSentence}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isAnswered={isAnswered}
          feedback={feedback}
          onCheck={handleCheck}
          onWordClick={onWordClick}
          usedDontKnow={usedDontKnow}
        />

        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {!isAnswered && (
          <>
            <div className="check-row">
              <button
                type="button"
                id="checkButton"
                className="btn-primary"
                onClick={handleCheck}
                disabled={!userAnswer.trim()}
              >
                Check
              </button>
            </div>

            {/* I Don't Know Button */}
            <div className="dont-know-row">
              <button
                type="button"
                id="dontKnowButton"
                className="btn-dont-know"
                onClick={handleDontKnow}
              >
                I don't know
              </button>
            </div>
          </>
        )}

        {isAnswered && currentSentence?.explanation && (
          <div className="explanation" hidden={!showExplanation}>
            {currentSentence.explanation}
          </div>
        )}

        {isAnswered && (
          <div className="post-check-row">
            <button
              type="button"
              id="nextButton"
              className="btn-secondary"
              onClick={onNext}
            >
              {currentIndex + 1 >= sessionSentences.length ? 'See Results' : 'Next'}
            </button>
            {currentSentence?.explanation && (
              <button
                type="button"
                className="btn-ghost"
                onClick={onToggleExplanation}
              >
                {showExplanation ? 'Hide Explanation' : 'View Explanation'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}