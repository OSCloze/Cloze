// src/components/words/WordCard.js
import React from 'react';

export default function WordCard({ word, masteryCount, isSelected, onClick }) {
  // Determine card class based on mastery
  const getCardClass = () => {
    if (masteryCount >= 10) {
      return 'word-card mastered-blue';
    }

    if (masteryCount >= 5) {
      return 'word-card mastered-green';
    }

    if (masteryCount >= 1) {
      return 'word-card learned';
    }

    return 'word-card';
  };

  return (
    <div
      className={`${getCardClass()} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="word-character">{word.word}</span>
      <span className="word-pinyin">{word.pinyin}</span>
      <span className="word-meaning">{word.meaning}</span>
      {masteryCount > 0 && (
        <div className="word-mastery">
          <span className="mastery-badge">
            ✓ {masteryCount}
          </span>
        </div>
      )}
    </div>
  );
}