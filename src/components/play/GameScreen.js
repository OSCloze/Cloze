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
  mode,
  chapterTitle,
  chapterImage
}) {
  // Check if current sentence is a narrative scene
  const isNarrative = currentSentence?.type === 'narrative';
  // Check if we're in practice mode
  const isPracticeMode = mode === 'practice';

  // Check if there's speaker information to display (hide speaker details in practice mode)
  const hasSpeaker = !isPracticeMode && !isNarrative && currentSentence?.speaker;

  // Check if scene details should show (only in story mode)
  const showSceneDetails = !isPracticeMode && (currentSentence?.sceneDetails || currentSentence?.image);

  return (
    <div className="play-content play-content--game">
      <div className="main">
        <div className="game-header">
          <p className="progress">
            {isNarrative
              ? `Page ${currentIndex + 1} of ${sessionSentences.length}`
              : `Page ${currentIndex + 1} of ${sessionSentences.length}`
            }
          </p>
          {!isNarrative && (
            <div
              className={`feedback ${feedback.includes('Correct') ? 'correct' : feedback ? 'wrong' : ''}`}
              hidden={!feedback}
            >
              {feedback}
            </div>
          )}
        </div>

        {/* Scene Details Container - Only shows in story mode */}
        {showSceneDetails && (
          <div className="story-scene-details-container">
            {/* Scene image (optional) */}
            {currentSentence?.image && (
              <div className="scene-image-container">
                <img
                  src={currentSentence.image}
                  alt="Scene"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}

            {/* Scene text */}
            {currentSentence?.sceneDetails && (
              <div className="story-scene-details">
                {currentSentence.sceneDetails}
              </div>
            )}
          </div>
        )}

        {/* Story context - Only shows when there's speaker information and not in practice mode */}
        {hasSpeaker && (
          <div className="story-context">
            {/* Speaker row */}
            <div className="story-speaker-row">
              {currentSentence.speakerImage && (
                <div className="speaker-portrait">
                  <img
                    src={currentSentence.speakerImage}
                    alt={currentSentence.speaker}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="speaker-placeholder">' +
                          (currentSentence.speaker ? currentSentence.speaker.charAt(0) : '?') + '</div>';
                      }
                    }}
                  />
                </div>
              )}
              <div className="speaker-details">
                <div className="speaker-name">{currentSentence.speaker}</div>
                <div className="speaker-line">{currentSentence.nativeSentence}</div>
              </div>
            </div>
          </div>
        )}

        {/* Sentence Display - only for practice scenes */}
        {!isNarrative && (
          <SentenceDisplay
            sentence={currentSentence}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            isAnswered={isAnswered}
            feedback={feedback}
            onCheck={onCheck}
            onWordClick={onWordClick}
          />
        )}

        {/* English translation line - Show in both story and practice mode, but without speaker name/image in practice */}
        {!isNarrative && currentSentence?.nativeSentence && (
          <div className={`english-translation ${isPracticeMode ? 'practice-mode' : ''}`}>
            {currentSentence.nativeSentence}
          </div>
        )}

        {/* Translation Box */}
        {selectedWord && (
          <TranslationBox
            word={selectedWord}
            onClose={onCloseTranslation}
          />
        )}

        {/* For narrative scenes, just show Next button */}
        {isNarrative ? (
          <div className="narrative-next-row">
            <button
              type="button"
              id="nextButton"
              className="btn-primary"
              onClick={onNext}
            >
              Continue →
            </button>
          </div>
        ) : (
          <>
            {/* Answer row */}
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

            {/* Explanation */}
            {isAnswered && currentSentence?.explanation && (
              <div className="explanation" hidden={!showExplanation}>
                {currentSentence.explanation}
              </div>
            )}

            {/* Post-check row */}
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
          </>
        )}
      </div>
    </div>
  );
}