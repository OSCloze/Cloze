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
}) {
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
          {currentSentence.nativeSentence}
        </div>

        <SentenceDisplay
          sentence={currentSentence}
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          isAnswered={isAnswered}
          feedback={feedback}
          onCheck={onCheck}
          onWordClick={onWordClick}
        />

        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {!isAnswered && (
          <div className="check-row">
            <button
              type="button"
              id="checkButton"
              className="btn-primary"
              onClick={onCheck}
              disabled={!userAnswer.trim()}
            >
              Check
            </button>
          </div>
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