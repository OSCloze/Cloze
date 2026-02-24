import React from 'react';
import { getWordById } from '../../data';

export default function SentenceDisplay({
  sentence,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  onCheck,
  onWordClick,
  usedDontKnow
}) {

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && userAnswer.trim()) {
      e.preventDefault();
      onCheck();
    }
  };

  const handleWordClick = (word) => {
    // Allow clicking on any non-punctuation word, but ONLY if:
    // 1. It's not the blank word, OR
    // 2. It IS the blank word but the question has been answered (isAnswered === true)
    if (!word.isPunctuation && word.wordId) {
      const isBlankWord = word.wordId === sentence.targetWordId;

      // Only allow click if:
      // - It's not the blank word, OR
      // - It IS the blank word AND the question has been answered
      if (!isBlankWord || (isBlankWord && isAnswered)) {
        const wordData = getWordById(word.wordId);
        if (wordData) {
          onWordClick({
            text: wordData.word,
            pinyin: wordData.pinyin,
            meaning: wordData.meaning
          });
        }
      }
    }
  };

  return (
    <>
      <div className="sentence-clickable-container">
        {sentence.words && sentence.words.map((word, idx) => {
          const isBlankWord = word.wordId === sentence.targetWordId;

          return (
            <span
              key={idx}
              className={`clickable-word ${word.isPunctuation ? 'punctuation' : ''} ${isBlankWord ? 'answer-word' : ''} ${isBlankWord && !isAnswered ? 'blank-not-clickable' : ''}`}
              onClick={() => handleWordClick(word)}
            >
              {isBlankWord && !isAnswered ? (
                <input
                  type="text"
                  className="inline-answer-word-input"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onClick={(e) => e.stopPropagation()}
                  autoFocus
                  style={{
                    width: `${Math.max(sentence.answer.length * 1.5, 2)}em`,
                    minWidth: '2em'
                  }}
                />
              ) : isBlankWord && isAnswered ? (
                <span className={`${feedback.includes('Correct') ? 'answer-correct' : 'answer-incorrect'} clickable-answer`}>
                  {sentence.answer}
                </span>
              ) : (
                word.text
              )}
            </span>
          );
        })}
      </div>

      {/* Only show user answer display if NOT using "I don't know" */}
      {isAnswered && !feedback.includes('Correct') && userAnswer && !usedDontKnow && (
        <div className="user-answer-display">
          <span className="user-answer-label">You answered: </span>
          <span className="user-answer-value">{userAnswer}</span>
        </div>
      )}
    </>
  );
}