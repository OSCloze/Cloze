import React from 'react';
import { getWordById } from '../../data';

export default function SentenceDisplay({
  sentence,
  userAnswer,
  setUserAnswer,
  isAnswered,
  feedback,
  onCheck,
  onWordClick
}) {

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === 'Enter' && userAnswer.trim()) {
      e.preventDefault();
      onCheck();
    }
  };

  const handleWordClick = (word) => {
    // Allow clicking on any non-punctuation word, including answered words
    // Just don't allow clicking on the blank input field
    if (!word.isPunctuation && word.wordId) {
      const wordData = getWordById(word.wordId);
      if (wordData) {
        onWordClick({
          text: wordData.word,
          pinyin: wordData.pinyin,
          meaning: wordData.meaning
        });
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
              className={`clickable-word ${word.isPunctuation ? 'punctuation' : ''} ${isBlankWord ? 'answer-word' : ''}`}
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

      {isAnswered && !feedback.includes('Correct') && userAnswer && (
        <div className="user-answer-display">
          <span className="user-answer-label">You answered: </span>
          <span className="user-answer-value">{userAnswer}</span>
        </div>
      )}
    </>
  );
}